import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api", // Adjust if your backend runs elsewhere
  withCredentials: false,
});

export default api;
