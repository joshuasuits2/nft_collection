import React, { useRef, useState } from "react";
import styled from "styled-components";
import PageContainer from "../components/layout/PageContainer";

const StatsPageStyles = styled.div`
  width: 100%;
  background: #141418;
  background-size: cover;
  background-position: top left;
  padding: 0 !important;
  width: 100%;
  height: 4700px;
`;

const StatsPage = () => {
  return (
    <StatsPageStyles>
      <PageContainer>
        <p>long time n osee</p>
      </PageContainer>
    </StatsPageStyles>
  );
};

export default StatsPage;
