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
  const { user, setUser } = useAuth();
  const { logout, token } = AuthUser();
  const { userId } = useAuth();
  const handleSignout = () => {
    if (token !== undefined) {
      logout();
      setUser(null);
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
