import React from "react";
import styled from "styled-components";
import Footer from "../components/layout/Footer";
import PageContainer from "../components/layout/PageContainer";
import CollectionStats from "./styles/stats/CollectionStats";

const StatsPageStyles = styled.div`
  width: 100%;
  background: #141418;
  background-size: cover;
  background-position: top left;
  padding: 0 !important;
  width: 100%;
`;

const StatsPage = () => {
  return (
    <StatsPageStyles>
      <PageContainer>
        <CollectionStats></CollectionStats>
        <Footer></Footer>
      </PageContainer>
    </StatsPageStyles>
  );
};

export default StatsPage;
