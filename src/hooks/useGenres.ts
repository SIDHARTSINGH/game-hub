import genres from "../data/genres";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

// fetching static data
// return an object with these properties :
//  - Minimal impact on the component
//  - in the future, switch back to fetching from the server
const useGenres = () => ({ data: genres, isLoading: null, error: null });

export default useGenres;
