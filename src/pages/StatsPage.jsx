import React from "react";
import styled from "styled-components";
import Footer from "../components/layout/Footer";
import PageContainer from "../components/layout/PageContainer";
import CollectionStats from "../modules/stats/CollectionStats";

const StatsPageStyles = styled.div``;

const StatsPage = () => {
  window.scrollTo(0, 0);
  return (
    <StatsPageStyles className="body-style">
      <PageContainer>
        <CollectionStats></CollectionStats>
        <Footer></Footer>
      </PageContainer>
    </StatsPageStyles>
  );
};

export default StatsPage;
