// Adding Query String Param to useData() hook to fetch games on the basis of genre

import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";
import { AxiosRequestConfig, CanceledError } from "axios";

interface Response<T> {
  count: number;
  results: T[];
}

// AxiosRequestConfig object :
// we can data in request body, set query string params

// 1. updata parameter of useData() hook : (requestBody?: AxiosRequestConfig)
// 2. pass selectedGenre when calling the useData() hook : in useGames() hook
// 3. while requesting call : second param  : after setting the signal : spread requestBody to get any additional properties

// 4. update parameter of useData() hook : (deps?: any[])
// 5. pass the dependencies as an array : when calling the useData() hook : in useGames() hook
// 6. pass the dependencies in the DependeciesList of the useEffect() hook
const useData = <T>(
  endpoint: string,
  requestBody?: AxiosRequestConfig,
  deps?: any[]
) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(
    () => {
      const controller = new AbortController();

      setLoading(true);
      apiClient
        .get<Response<T>>(endpoint, {
          signal: controller.signal,
          ...requestBody, // axiosRequestConfig object
        })
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
    },
    // pass the dependencies in the array : if it is not null
    deps ? [...deps] : []
  );

  return { data, error, isLoading };
};

export default useData;
