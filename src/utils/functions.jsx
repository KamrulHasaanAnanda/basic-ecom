const authToken = "auth_token";
export const getToken = () => window.localStorage.getItem(authToken);

export const setToken = (token) => {
  token
    ? window.localStorage.setItem(authToken, token)
    : window.localStorage.removeItem(authToken);
};
