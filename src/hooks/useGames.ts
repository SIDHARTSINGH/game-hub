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

const useGames = (selectedGenre: Genre | null) => {
  return useData<Game>(
    // endpoint
    "/games",

    // we need pass the selectedGenre as a query param :
    // in the 'axiosRequestConfig' object
    { params: { genres: selectedGenre?.id } },

    // we need pass the selectedGenre as a dependency to the useEffect() hook:
    // so that, the useEffect() hook will be called when selectedGenre changes
    // as an list of deps
    [selectedGenre?.id]
  );
};

export default useGames;
