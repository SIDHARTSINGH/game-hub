import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
}

// Handling Errors with async and await
function UsersList() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");

  // - In JS, if a function returns a promise :
  //  we can put the await keyword in front of the promise to get the result
  //
  // - 'await' expressions are only allowed within 'async' functions
  //
  // - 'async' functions cannot be passed in a 'Hook'
  //
  // - define a async function inside the arrow function in the Hook
  useEffect(() => {
    // async function
    const fetchUser = async () => {
      try {
        const res = await axios
          // get -> promise -> res / err
          .get<User[]>("https://jsonplaceholder.typicode.com/xusers");

        setUsers(res.data);
      } catch (err) {
        // err is of type 'unknown' :
        // - Type Assertion to define the type in the setError():
        //
        // - Type Annotation is not allowed in the 'catch' block
        setError((err as AxiosError).message);
      }
    };

    fetchUser();
  }, []);

  return (
    <>
      {error && <p>{error}</p>}
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
}

export default UsersList;
