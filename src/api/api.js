// api.js
import axios from "axios";

const baseURL = "http://localhost:4000/api/v1";

export const server = axios.create({
  baseURL,
});
