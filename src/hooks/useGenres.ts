// for fetching static data
import genres from "../data/genres";

import { useQuery } from "@tanstack/react-query";
import apiClient, { Response } from "../services/apiClient";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: () =>
      apiClient.get<Response<Genre>>("/genres").then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, // 24hrs
    initialData: { count: genres.length, results: genres },
  });

export default useGenres;
