import axios from "axios";

const baseURL = (import.meta.env && import.meta.env.VITE_API_URL) || "";

const api = axios.create({
  baseURL,
  withCredentials: true,
});

api.interceptors.request.use(
  (config) => {
    try {
      const token = localStorage.getItem("token");
      if (token && config.headers) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    } catch (e) {
      // ignore localStorage errors
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
