import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AuthUser() {
  const navigate = useNavigate();

  const getToken = () => {
    const tokenString = sessionStorage.getItem("token");
    const userToken = JSON.parse(tokenString);
    return userToken;
  };
  const [token, setToken] = useState(getToken);

  const saveToken = (token) => {
    sessionStorage.setItem("token", JSON.stringify(token));
    setToken(token);
    navigate("/");
  };

  const logout = () => {
    sessionStorage.removeItem("token");
    sessionStorage.clear();
    navigate("/");
  };

  const http = axios.create({
    baseURL: "http://localhost:8000/api",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  });
  return {
    setToken: saveToken,
    token,
    getToken,
    http,
    logout,
  };
}
