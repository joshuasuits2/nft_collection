import axios from "axios";

export default function AuthCreate() {
  const http = axios.create({
    baseURL: "http://localhost:8000/api",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return {
    http,
  };
}
