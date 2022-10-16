import React, { useRef } from "react";
import Partner from "../components/layout/Partner";
import ExploreCollection from "../modules/explore/ExploreCollection";
import LandingExplore from "../modules/explore/LandingExplore";
import styled from "styled-components";
import PageContainer from "../components/layout/PageContainer";
import AllNFTs from "../modules/explore/AllNFTs";
import Footer from "../components/layout/Footer";

const ExplorePageStyles = styled.div`
  width: 100%;
  background: #141418;
  background-size: cover;
  background-position: top left;
  padding: 0 !important;
  width: 100%;
`;

const ExplorePage = () => {
  const pageRefs = useRef({});
  return (
    <ExplorePageStyles>
      <LandingExplore pageRefs={pageRefs}></LandingExplore>
      <PageContainer>
        <Partner></Partner>
        <ExploreCollection></ExploreCollection>
        <AllNFTs pageRefs={pageRefs}></AllNFTs>
        <Footer></Footer>
      </PageContainer>
    </ExplorePageStyles>
  );
};

export default ExplorePage;
