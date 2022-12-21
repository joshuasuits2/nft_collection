import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import ProgressBar from "../progress-bar/ProgressBar";
import HeaderAuth from "./HeaderAuth";
import AuthUser from "../../config/AuthUser";
import { useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import { useAuthentication } from "../../config/auth-context";

const Main = () => {
  const { setUser, setUserId, setUserName } = useAuthentication();
  const { logout, token } = AuthUser();
  const { user } = useAuth();

  const handleSignOut = () => {
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
  }, []);
  return (
    <div>
      {user ? (
        <>
          <HeaderAuth handleSignOut={handleSignOut} />
          <ProgressBar />
          <Outlet></Outlet>
        </>
      ) : (
        <>
          <Header></Header>
          <ProgressBar />
          <Outlet></Outlet>
        </>
      )}
    </div>
  );
};

export default Main;
