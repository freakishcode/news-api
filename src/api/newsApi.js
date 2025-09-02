import axios from "axios";
import { API_KEY, BASE_URL } from "./config/apiConfig";

// Fetch headlines or search results with pagination
export const fetchNews = async ({
  category = "general",
  query = "",
  page = 1,
  pageSize = 12,
}) => {
  const endpoint = query
    ? `${BASE_URL}/everything`
    : `${BASE_URL}/top-headlines`;

  const response = await axios.get(endpoint, {
    params: {
      country: query ? undefined : "us",
      category: query ? undefined : category,
      q: query || undefined,
      apiKey: API_KEY,
      pageSize,
      page,
    },
  });

  return {
    articles: response.data.articles,
    totalResults: response.data.totalResults,
  };
};
