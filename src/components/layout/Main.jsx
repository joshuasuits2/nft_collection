import React, { useState } from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import ProgressBar from "../progressbar/ProgressBar";
import DropWallets from "./DropWallets";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <ProgressBar></ProgressBar>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
