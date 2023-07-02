import axios, { AxiosError, CanceledError } from "axios";
import { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
}

// Cancelling a Fetch Request : Cleanup Function
function UsersList() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    // Built-in class to cancle/abort async operaitons
    // 1. AbortController object
    const controller = new AbortController();

    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users", {
        // 2. set signal property
        signal: controller.signal,
      })
      .then((res) => setUsers(res.data))
      .catch((err) => {
        // 4. Strict Mode : React renders the component twice :
        //    The first rendered component is dismounted before the second render : canceled error
        //    Second render
        //
        // if err is canceled error don't display the error
        if (err instanceof CanceledError) return;
        setError(err.message);
      });

    // 3. cleanup funtion
    return () => controller.abort();
  }, []);

  return (
    <>
      {error && <p className="text-danger">{error}</p>}

      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
}

export default UsersList;
