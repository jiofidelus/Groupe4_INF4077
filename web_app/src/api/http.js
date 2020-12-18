/** @format */
import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8000/api",
  headers: { "Content-Type": "mutipart/form-data" },
});

export default instance;
