import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./components/layout/Main";
import ExplorePage from "./pages/ExplorePage";
import HomePage from "./pages/HomePage";
import StatsPage from "./pages/StatsPage";

const App = () => {
  return (
    <div>
      <Routes>
        <Route element={<Main />}>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/explore" element={<ExplorePage />}></Route>
          <Route path="/stats" element={<StatsPage />}></Route>
        </Route>
        <Route path="*" element={<div>Page not found</div>}></Route>
      </Routes>
    </div>
  );
};

export default App;
