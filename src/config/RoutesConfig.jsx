import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "../components/layout/Main";
import CategoryDetail from "../pages/CategoryDetail";
import ExplorePage from "../pages/ExplorePage";
import HomePage from "../pages/HomePage";
import StatsPage from "../pages/StatsPage";
import WalletsPage from "../pages/WalletsPage";

const RoutesConfig = () => {
  return (
    <Routes>
      <Route element={<Main />}>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/explore" element={<ExplorePage />}></Route>
        <Route path="/stats" element={<StatsPage />}></Route>
        <Route path="/wallets" element={<WalletsPage />}></Route>
        <Route
          path="/:slug"
          element={<CategoryDetail></CategoryDetail>}
        ></Route>
      </Route>
      <Route path="*" element={<div>Page not found</div>}></Route>
    </Routes>
  );
};

export default RoutesConfig;
