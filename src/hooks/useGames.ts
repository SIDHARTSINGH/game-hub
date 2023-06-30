import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";
import { CanceledError } from "axios";

interface Game {
  id: number;
  name: string;
}

interface GameResponse {
  count: number;
  results: Game[];
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  //   Fetch games from API
  useEffect(() => {
    // 2. Handle cancelations

    // 2.1 create new AbortController
    const controller = new AbortController();

    apiClient
      // 2.2 pass a object to get() with controller.signal
      .get<GameResponse>("/games", { signal: controller.signal })
      .then((res) => setGames(res.data.results))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });

    //   2.3 return a cleanup function for the useEffect() hook
    //          and call controller.abort() in the callback
    return () => controller.abort();
  }, []);

  return { games, error };
};

export default useGames;
