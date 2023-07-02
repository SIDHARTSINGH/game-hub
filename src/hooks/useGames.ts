import { GameQuery } from "../App";
import useData from "./useData";
import { Genre } from "./useGenres";

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

// Refactor : accept GameQuery as argument
const useGames = (gameQuery: GameQuery) => {
  return useData<Game>(
    "/games",
    {
      // Refactor : update params
      params: {
        genres: gameQuery.genre?.id,
        platforms: gameQuery.platform?.id,
      },
    },
    // Refactor : update deps
    [gameQuery]
  );
};

export default useGames;
