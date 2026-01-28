/* -------- Access Token Helpers -------- */

export const getAccessToken = () => {
  return localStorage.getItem("accessToken");
};

export const setAccessToken = (token: string) => {
  localStorage.setItem("accessToken", token);
};

export const removeAccessToken = () => {
  localStorage.removeItem("accessToken");
};

/* -------- Refresh Token Helpers -------- */

export const getRefreshToken = () => {
  return localStorage.getItem("refreshToken");
};

export const setRefreshToken = (token: string) => {
  localStorage.setItem("refreshToken", token);
};

export const removeRefreshToken = () => {
  localStorage.removeItem("refreshToken");
};

/* -------- Logout Helper -------- */

export const clearTokens = () => {
  removeAccessToken();
  removeRefreshToken();
};