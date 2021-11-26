import axios from "axios";
const baseURL = process.env.REACT_APP_API_URL;

const API = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 15000,
});

API.interceptors.request.use((request) => {
  let token = localStorage.getItem("token")
    ? localStorage.getItem("token")
    : undefined;
  request.headers["Authorization"] = 'Bearer ' + token;
  return request;
});

API.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error?.response?.status) {
      switch (error.response.status) {
        case 400:
          const { data } = error.response || {};
          error["errMsg"] = data["errMsg"] || "Có lỗi xảy ra";
          break;
        case 401:
          window.location = "/#/login" as any;
          break;
        default:
          return Promise.reject({ response: error });
      }
      return Promise.reject({ response: error });
    }
    error["errMsg"] = "Có lỗi xảy ra";
  }
);

export default API;