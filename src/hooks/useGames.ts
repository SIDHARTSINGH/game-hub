import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import apiClient, { Response } from "../services/apiClient";

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
const useGames = (gameQuery: GameQuery) =>
  useQuery<Response<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: () =>
      apiClient
        .get<Response<Game>>("/games", {
          params: {
            genres: gameQuery.genre?.id,
            parent_platforms: gameQuery.platform?.id,
            ordering: gameQuery.sortOrder,
            search: gameQuery.searchText,
          },
        })
        .then((res) => res.data),
  });

export default useGames;
