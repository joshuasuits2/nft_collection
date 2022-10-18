import React, { useEffect, useRef } from "react";
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
  .animate {
    opacity: 0;
    animation: animate-partner 1.5s ease-in-out forwards 1s;
    transform: translateY(250%);
  }
  @keyframes animate-partner {
    0% {
      opacity: 0;
      transform: translateY(250%);
    }
    100% {
      opacity: 1;
      transform: translateY(0%);
    }
  }
`;

const ExplorePage = () => {
  const pageRefs = useRef({});
  useEffect(() => {
    setTimeout(() => {
      document.body.style.overflowY = "auto";
    }, 2500);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  document.body.style.overflowY = "hidden";
  return (
    <ExplorePageStyles>
      <LandingExplore pageRefs={pageRefs}></LandingExplore>
      <PageContainer>
        <Partner className="animate"></Partner>
        <ExploreCollection></ExploreCollection>
        <AllNFTs pageRefs={pageRefs}></AllNFTs>
        <Footer></Footer>
      </PageContainer>
    </ExplorePageStyles>
  );
};

export default ExplorePage;
