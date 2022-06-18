const authToken = "ecom_auth_token";
const cart = "ecart";
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

export const getCart = () => {
  let carts = localStorage.getItem(cart) || "";

  if (typeof carts !== "undefined" && carts !== null && carts !== "") {
    carts = JSON.parse(carts) || [];
  }
  return carts;
};

export const setCart = (data = []) => {
  data
    ? window.localStorage.setItem(cart, JSON.stringify(data))
    : window.localStorage.removeItem(cart);
};
