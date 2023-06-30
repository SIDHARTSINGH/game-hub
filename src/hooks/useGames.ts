import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";
import { CanceledError } from "axios";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[]; // array of objects : each object has a platform property of type Platform
  metacritic: number;
}

interface GameResponse {
  count: number;
  results: Game[];
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
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
      .get<GameResponse>("/games", { signal: controller.signal })
      .then((res) => {
        setGames(res.data.results);
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

  return { games, error, isLoading };
};

export default useGames;
