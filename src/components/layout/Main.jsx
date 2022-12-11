import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import ProgressBar from "../progress-bar/ProgressBar";
import HeaderAuth from "./HeaderAuth";
import AuthUser from "../../config/AuthUser";
import { useState } from "react";
import { useEffect } from "react";
import useAuth from "../../hooks/useAuth";

const Main = () => {
  const { user, userName, userId, setUser, setUserId, setUserName } = useAuth();
  const { logout, token } = AuthUser();
  const handleSignout = () => {
    if (token !== undefined) {
      logout();
      setUser(null);
      setUserId(null);
      setUserName(null);
      sessionStorage.removeItem("user");
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div>
      {user ? (
        <HeaderAuth handleSignout={handleSignout}></HeaderAuth>
      ) : (
        <Header></Header>
      )}
      <ProgressBar></ProgressBar>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
