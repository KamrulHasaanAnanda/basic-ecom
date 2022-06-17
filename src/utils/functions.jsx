const authToken = "ecom_auth_token";
export const getToken = () => window.localStorage.getItem(authToken);

export const setToken = (token) => {
  token
    ? window.localStorage.setItem(authToken, token)
    : window.localStorage.removeItem(authToken);
};

export const getUser = () => window.localStorage.getItem("ecomUser");

export const setUser = (user) => {
  user
    ? window.localStorage.setItem("ecomUser", user)
    : window.localStorage.removeItem("ecomUser");
};
