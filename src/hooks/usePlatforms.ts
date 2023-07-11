import { useQuery } from "@tanstack/react-query";
import { Platform } from "./useGames";
import APIClient from "../services/apiClient";
import platforms from "../data/platforms";

const apiClient = new APIClient<Platform>("/platforms/list/parents");

const usePlatforms = () =>
  useQuery({
    queryKey: ["paltforms"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000,
    initialData: {
      count: platforms.length,
      results: platforms,
    },
  });

export default usePlatforms;
