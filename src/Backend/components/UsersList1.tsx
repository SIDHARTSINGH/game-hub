import axios from "axios";
import { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
}

// Handling Errors
function UsersList() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/xusers")
      .then((res) => setUsers(res.data))
      // callback function executes if something goes wrong
      // updating the error state : to display a message
      .catch((err) => {
        setError(err.message);
      });
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
