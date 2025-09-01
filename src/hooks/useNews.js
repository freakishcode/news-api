import { useQuery } from "@tanstack/react-query";
import { fetchNews } from "../api/newsApi";

export const useNews = (category, query, page, pageSize) => {
  return useQuery({
    queryKey: ["news", category, query, page, pageSize],
    queryFn: () => fetchNews({ category, query, page, pageSize }),
    staleTime: 1000 * 60 * 5,
    keepPreviousData: true,
    enabled: !!category || !!query,
  });
};
