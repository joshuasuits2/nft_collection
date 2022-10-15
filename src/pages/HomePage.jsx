import React from "react";
import "./styles/HomePage.scss";
import Partner from "../components/layout/Partner";
import LandingPage from "../modules/homepage/LandingPage";
import TrendingCollection from "../modules/homepage/TrendingCollection";
import NewItemsPage from "../modules/homepage/NewItemsPage";
import TopCollectionPage from "../modules/homepage/TopCollectionPage";
import CreateAndSell from "../modules/homepage/CreateAndSell";
import Footer from "../components/layout/Footer";

const HomePage = () => {
  return (
    <div className="h-[4750px]">
      <LandingPage></LandingPage>
      <Partner></Partner>
      <TrendingCollection></TrendingCollection>
      <NewItemsPage></NewItemsPage>
      <TopCollectionPage></TopCollectionPage>
      <CreateAndSell></CreateAndSell>
      <Footer></Footer>
    </div>
  );
};

export default HomePage;
