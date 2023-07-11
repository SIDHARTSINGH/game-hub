import { useQuery } from "@tanstack/react-query";
import { Response } from "./useData";
import { Platform } from "./useGames";
import apiClient from "../services/apiClient";
import platforms from "../data/platforms";

const usePlatforms = () =>
  useQuery({
    queryKey: ["paltforms"],
    queryFn: () =>
      apiClient
        .get<Response<Platform>>("/platforms/lists/parents")
        .then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000,
    initialData: { count: platforms.length, results: platforms },
  });

export default usePlatforms;
