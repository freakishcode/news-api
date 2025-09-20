import { useQuery } from "@tanstack/react-query";
import api from "../api/api";

export const useArticles = ({ q, category, page, perPage }) => {
  return useQuery({
    queryKey: ["articles", q || null, category || null, page, perPage],
    queryFn: async () => {
      const params = {
        page,
        perPage,
      };

      if (q && q.trim() !== "") {
        params.q = q.trim();
      }

      if (category && category.trim() !== "") {
        params.category = category.trim();
      }

      const res = await api.get("../../php/articles.php", { params });
      return res.data;
    },
    keepPreviousData: true,
  });
};
