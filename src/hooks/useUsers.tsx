import { useEffect, useState } from "react";
import { CanceledError } from "axios";
import userService, { User } from "../services/user-service";

const useUsers = () => {
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

  return { users, error, isLoading, setUsers, setError };
};

export default useUsers;
