import axios from "axios";
import { useEffect, useState } from "react";

// for auto-completion and type-safety
interface User {
  id: number;
  name: string;
}

// ASYNC, AWAIT
function UsersList() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(
    () => {
      axios
        // specify the type of data to be fetched
        .get<User[]>("https://jsonplaceholder.typicode.com/users")
        // specify the type of data to be set using setUsers() in useState<T> type param
        .then((res) => setUsers(res.data));
    },
    // [] : execute once : else,
    []
  );

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

export default UsersList;
