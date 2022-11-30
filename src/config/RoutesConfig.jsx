import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "../components/layout/Main";
import CategoryDetail from "../pages/CategoryDetail";
import ExplorePage from "../pages/ExplorePage";
import HomePage from "../pages/HomePage";
import PageNotFound from "../pages/PageNotFound";
import StatsPage from "../pages/StatsPage";
import WalletsPage from "../pages/WalletsPage";
import DetailCollection from "../pages/DetailCollection";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Create from "../pages/Create";

const RoutesConfig = () => {
  return (
    <Routes>
      <Route element={<Main />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/stats" element={<StatsPage />} />
        <Route path="/wallets" element={<WalletsPage />} />
        <Route path="/create" element={<Create />} />
        <Route path="/:slug" element={<CategoryDetail />} />
        <Route path="/collection/:slug" element={<DetailCollection />} />
      </Route>
      <Route path="/error" element={<PageNotFound></PageNotFound>}></Route>
      <Route path="/login" element={<Login></Login>}></Route>
      <Route path="/signup" element={<SignUp></SignUp>}></Route>
      <Route path="/*" element={<PageNotFound></PageNotFound>}></Route>
    </Routes>
  );
};

export default RoutesConfig;
