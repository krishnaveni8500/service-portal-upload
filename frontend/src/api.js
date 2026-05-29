import axios from "axios";

const API = axios.create({
  baseURL: "/api"//"http://localhost:3000/api"//change fron ec2
});

// attach token automatically
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) {
    req.headers.Authorization = token;
  }
  return req;
});

export default API;