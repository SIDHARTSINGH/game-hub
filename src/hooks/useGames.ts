import { useInfiniteQuery } from "@tanstack/react-query";
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
  // Passing generic type arguments only in useGames() :
  // since, gameGrid component handles error : the type of error object is not known
  useInfiniteQuery<Response<Game>, Error>({
    queryKey: ["games", gameQuery],

    // for infinite query : receiving page number as a parameter
    // destructure and get pageParam property that react query passes here
    // initialise to 1, so we get page 1's data
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genre?.id,
          parent_platforms: gameQuery.platform?.id,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          // RAWG api supports data pagination using a query parameter - 'page'
          page: pageParam,
        },
      }),
    // used to compute the next page number
    getNextPageParam: (lastPage, allPages) => {
      // check if this is the last page
      // by checking the 'next' property of the response:'Response'
      return lastPage.next ? allPages.length + 1 : undefined;
    },
    staleTime: 24 * 60 * 60 * 1000,
  });

export default useGames;
