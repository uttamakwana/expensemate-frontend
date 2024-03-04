// api.js
import axios from "axios";

const baseURL = "https://splitwise-backend-k48h.onrender.com/api/v1";

export const server = axios.create({
  baseURL,
});
