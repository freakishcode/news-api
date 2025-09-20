import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost/php/articles.php", // adjust to your backend host
});

export default api;
