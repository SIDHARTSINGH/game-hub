import { GameQuery } from "../App";
import useData from "./useData";

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
      // params object's property are specific : described in the API docs : cannot be changed
      params: {
        genres: gameQuery.genre?.id,
        platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchText,
      },
    },
    // Refactor : update deps
    [gameQuery]
  );
};

export default useGames;
