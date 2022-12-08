import React, { useEffect, useState } from "react";
import "./styles/HomePage.scss";
import Partner from "../components/layout/Partner";
import LandingPage from "../modules/homepage/LandingPage";
import TrendingCollection from "../modules/homepage/TrendingCollection";
import NewItemsPage from "../modules/homepage/NewItemsPage";
import TopCollectionPage from "../modules/homepage/TopCollectionPage";
import CreateAndSell from "../modules/homepage/CreateAndSell";
import Footer from "../components/layout/Footer";
import PageContainer from "../components/layout/PageContainer";
import AuthUser from "../config/AuthUser";
import axios from "axios";
import { baseURL } from "../config/getConfig";

const HomePage = () => {
  const [collections, setCollections] = useState([]);
  useEffect(() => {
    console.log(baseURL);
    (async () => {
      try {
        const res = await axios.get(`${baseURL}/api/collections`);
        console.log("data:", res.data.collections);
        setCollections(res.data.collections);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
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
