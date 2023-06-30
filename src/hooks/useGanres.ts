import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";
import { CanceledError } from "axios";

interface Genre {
  id: number;
  name: string;
}

interface GenreResponse {
  count: number;
  results: Genre[];
}
const useGenres = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  //   Fetch games from API
  useEffect(() => {
    // 2. Handle cancelations
    // 2.1 create new AbortController
    const controller = new AbortController();

    setLoading(true);
    apiClient
      // 2.2 pass a object to get() with controller.signal
      .get<GenreResponse>("/genres", { signal: controller.signal })
      .then((res) => {
        setGenres(res.data.results);
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

    //   2.3 return a cleanup function for the useEffect() hook
    //          and call controller.abort() in the callback
    return () => controller.abort();
  }, []);

  return { genres, error, isLoading };
};

export default useGenres;
