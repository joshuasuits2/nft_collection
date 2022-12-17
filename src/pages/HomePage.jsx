import React from "react";
import "./styles/HomePage.scss";
import Partner from "../components/layout/Partner";
import LandingPage from "../modules/homepage/LandingPage";
import TrendingCollection from "../modules/homepage/TrendingCollection";
import NewItemsPage from "../modules/homepage/NewItemsPage";
import TopCollectionPage from "../modules/homepage/TopCollectionPage";
import CreateAndSell from "../modules/homepage/CreateAndSell";
import Footer from "../components/layout/Footer";
import PageContainer from "../components/layout/PageContainer";
import AllNFTs from "../modules/explore/AllNFTs";

const HomePage = () => {
  return (
    <PageContainer>
      <LandingPage></LandingPage>
      <Partner></Partner>
      <TrendingCollection></TrendingCollection>
      <NewItemsPage></NewItemsPage>
      <TopCollectionPage></TopCollectionPage>
      <CreateAndSell></CreateAndSell>
      <Footer></Footer>
    </PageContainer>
  );
};

export default HomePage;
