import axios, { AxiosInstance } from "axios";
function setAPI(): AxiosInstance {
  const instance = axios.create({
    baseURL: "http://localhost:4000/",
    timeout: 10000,
    headers: { "Content-Type": "application/json" },
  });
  return instance;
}
const API = setAPI();
export default API;
