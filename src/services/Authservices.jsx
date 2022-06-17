import axios from "axios";

const AuthServices = {};

AuthServices.register = async (data) => {
  let url = "register";
  let res = axios
    .post(url, data)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return err.response;
    });

  return res;
};

AuthServices.login = async (data) => {
  let url = "login";
  let res = axios
    .post(url, data)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return err.response;
    });

  return res;
};

export default AuthServices;
