import { useEffect } from "react";
import { createContext, useContext, useState } from "react";
import useAuth from "../hooks/useAuth";

const AuthContext = createContext();

function AuthProvider(props) {
  const {
    user,
    userName,
    userId,
    userImage,
    setUser,
    setUserId,
    setUserName,
    setUserImage,
  } = useAuth();

  const value = {
    user,
    userName,
    userId,
    userImage,
    setUser,
    setUserId,
    setUserName,
    setUserImage,
  };
  return <AuthContext.Provider value={value} {...props}></AuthContext.Provider>;
}

const useAuthentication = () => {
  const context = useContext(AuthContext);
  if (typeof context === "undefined") {
    throw new Error("useAuthentication must be used within a AuthProvider");
  }
  return context;
};

export { AuthProvider, useAuthentication };
