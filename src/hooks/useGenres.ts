import useData from "./useData";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

// Abstract away the implementation using a generic data fetching hook
//    specify the generic type argument and endpoint while calling

// Hide 'endpoints' and 'making http requests' from the GenreList Component
const useGenres = () => useData<Genre>("/genres");

export default useGenres;
