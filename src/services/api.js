import axios from "axios";

const api = axios.create({
  baseURL: "https://ebraga-omnistack06-backend.herokuapp.com",
});

export default api;
