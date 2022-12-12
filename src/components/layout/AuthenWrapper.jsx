import React from "react";
import { Outlet } from "react-router-dom";
import { AuthProvider } from "../../config/auth-context";

const AuthenWrapper = () => {
  return (
    <AuthProvider>
      <Outlet></Outlet>
    </AuthProvider>
  );
};

export default AuthenWrapper;
