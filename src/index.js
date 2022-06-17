import axios from "axios";
import React from "react";
import ReactDOM from "react-dom/client";
import { ToastContainer, Zoom } from "react-toastify";
import App from "./App";
import { toastifyAlertError } from "./utils/alerts";
import { getToken } from "./utils/functions";

axios.defaults.headers["Accept"] = "application/json";
axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
axios.interceptors.request.use((config) => {

  if(navigator.onLine){
    config.baseURL = "http://localhost:4000/";

   
    config.withCredentials = true;
  
    const access_token = getToken();
    config.headers.Authorization = access_token ? `Bearer ${access_token}` : "";
    return config;
  }else{
    toastifyAlertError("No internet connection","top-center")
  }
});
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
    <ToastContainer transition={Zoom}/>
  </React.StrictMode>
);
