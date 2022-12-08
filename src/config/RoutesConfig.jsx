import React from "react";
import { Route, Routes } from "react-router-dom";
import PageNotFound from "../pages/PageNotFound";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import { Suspense } from "react";
const Main = React.lazy(() => import("../components/layout/Main"));
const HomePage = React.lazy(() => import("../pages/HomePage"));
const ExplorePage = React.lazy(() => import("../pages/ExplorePage"));
const StatsPage = React.lazy(() => import("../pages/StatsPage"));
const WalletsPage = React.lazy(() => import("../pages/WalletsPage"));
const Create = React.lazy(() => import("../pages/Create"));
const CreateCollection = React.lazy(() => import("../pages/CreateCollection"));
const Profile = React.lazy(() => import("../pages/Profile"));
const CategoryDetail = React.lazy(() => import("../pages/CategoryDetail"));
const DetailCollection = React.lazy(() => import("../pages/DetailCollection"));

const RoutesConfig = () => {
  return (
    <Suspense>
      <Routes>
        <Route element={<Main />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/stats" element={<StatsPage />} />
          <Route path="/wallets" element={<WalletsPage />} />
          <Route path="/create" element={<Create />} />
          <Route path="/create-collection" element={<CreateCollection />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/:slug" element={<CategoryDetail />} />
          <Route path="/collection/:slug" element={<DetailCollection />} />
        </Route>
        <Route path="/error" element={<PageNotFound></PageNotFound>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="/*" element={<PageNotFound></PageNotFound>}></Route>
      </Routes>
    </Suspense>
  );
};

export default RoutesConfig;
