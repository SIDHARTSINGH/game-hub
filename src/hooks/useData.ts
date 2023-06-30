// Generic Data Fetching Hook

import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";
import { CanceledError } from "axios";

// 2. create Response interface
//      it has 'results' property of type T[] :
//      add generic type param <T> to Response and in get<Response<T>>
interface Response<T> {
  count: number;
  results: T[];
}

// 1. add generic type param <T> in useData and <T[]> in useState
// 3. take 'endpoint' as parameter and pass to the methods
const useData = <T>(endpoint: string) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    apiClient
      .get<Response<T>>(endpoint, { signal: controller.signal })
      .then((res) => {
        setData(res.data.results);
        // setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        // setLoading(false);
      })

      .finally(() => {
        setLoading(false);
      });

    return () => controller.abort();
  }, []);

  return { data, error, isLoading };
};

export default useData;
