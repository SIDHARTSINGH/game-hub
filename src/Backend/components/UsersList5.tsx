import { useEffect, useState } from "react";
import apiClient, { CanceledError } from "../../services/api-client";
import userService, { User } from "../../services/user-service";

// finally block
// display a loading indicator
function UsersList() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");

  // 1. define a state variable
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    // 2. set isLoading = true
    setLoading(true);

    // getAllUsers() : returns the promise : generated internally by axios.get(...)
    const { request, cancel } = userService.getAllUsers();

    request
      .then((res) => setUsers(res.data))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      })
      // 3. set isLoading = false
      //    either on both 'then' and 'catch'
      //    or 'finally'
      .finally(() => {
        setLoading(false);
      });

    //   replace 'controller.abort()' with 'cancel()'
    return () => cancel();
  }, []);

  const deleteUser = (user: User) => {
    // Optimistic Update

    // Backing up the users, if the promise is rejected due to any reason
    const originalUsers = [...users];

    // 1. Update UI
    setUsers(users.filter((u) => u.id !== user.id));

    // 2. Call server to persist the changes
    userService
      .deleteUser(user)
      // No then() is called : we don't wanna do anything after the promise is resolved
      .catch((err) => {
        // Promise rejected

        // 1. show error message
        setError(err.message);

        // 2. update backed up users
        setUsers(originalUsers);
      });
  };

  const addUser = () => {
    // 1. create new user
    const newUser = { id: 0, name: "sid" };

    // 2. update users
    setUsers([newUser, ...users]);

    // 3. Call server to save the changes : post the new user to server
    userService
      .addUser(newUser)
      // on success : response onject with new user with appropriate id is returned
      //            : update the users with new user with appr. id
      .then((res) => setUsers([res.data, ...users]));
  };

  const updateUser = (user: User) => {
    // Optimistic Update

    const originalUsers = [...users];

    // 1. create new user with updated data
    //    done with a form : here, name suffix with '!'
    const updatedUser = { ...user, name: user.name + "!" };

    // 2. update users
    setUsers(users.map((u) => (u.id === user.id ? updatedUser : u)));

    // 3. call th server to save the changes
    userService.updateUser(user, updatedUser).catch((err) => {
      setError(err.message);
      setUsers(originalUsers);
    });
  };

  return (
    <>
      {error && <p className="text-danger">{error}</p>}

      {/* 5. display a loding indicator */}
      {isLoading && <div className="spinner-border"></div>}
      <button className="btn btn-primary mb-3" onClick={addUser}>
        Add User
      </button>
      <ul className="list-group w-auto">
        {users.map((user) => (
          <li
            key={user.id}
            className="list-group-item d-flex justify-content-between"
          >
            {user.name}
            {"  "}
            <div>
              <button
                className="btn btn-outline-secondary mx-2"
                onClick={() => updateUser(user)}
              >
                Update
              </button>
              <button
                className="btn btn-outline-danger"
                onClick={() => deleteUser(user)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default UsersList;
