import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import APIClient, { Response } from "../services/apiClient";

const apiClient = new APIClient<Game>("/games");

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

const useGames = (gameQuery: GameQuery) =>
  useQuery<Response<Game>, Error>({
    queryKey: ["games", gameQuery],
    // Can't just reference the function :
    //  queryFn: apiClient.get :
    // since, we need to pass a config object
    queryFn: () =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genre?.id,
          parent_platforms: gameQuery.platform?.id,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
        },
      }),
  });

export default useGames;
