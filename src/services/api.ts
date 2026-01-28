import axios from "axios";
import {
  getAccessToken,
  getRefreshToken,
  setAccessToken,
  clearTokens,
} from "../utils/token";

const api = axios.create({
  baseURL: "http://localhost:5000",
});

/* Attach Access Token */
api.interceptors.request.use((config) => {
  const token = getAccessToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

/* Refresh Token Logic */
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      const refreshToken = getRefreshToken();

      if (!refreshToken) {
        clearTokens();
        window.location.href = "/login";
        return Promise.reject(error);
      }

      try {
        const res = await axios.post(
          "http://localhost:5000/auth/refresh",
          { refreshToken }
        );

        setAccessToken(res.data.accessToken);

        // Retry request safely
        error.config.headers.Authorization =
          "Bearer " + res.data.accessToken;

        return api(error.config);
      } catch {
        clearTokens();
        window.location.href = "/login";
      }
    }

    return Promise.reject(error);
  }
);

export default api;