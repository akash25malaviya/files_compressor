import axios from "axios";
const API_BASE_URL = process.env.REACT_APP_PUBLIC_BASE_API || "";

const AxiosInterceptor = axios.create({
  baseURL: API_BASE_URL,
});

AxiosInterceptor.interceptors.request.use(
  (config) => {
    return config;
  },
  (err) => Promise.reject(err)
);
AxiosInterceptor.interceptors.response.use(
  (res) => {
    return res;
  },
  (err) => {
    if (err?.response?.status !== 200) {
      console.log(err?.response?.statusText);
    }
    return err?.response;
  }
);
export default AxiosInterceptor;
