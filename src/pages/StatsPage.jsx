import React from "react";
import styled from "styled-components";
import Dropdown from "../components/dropdown/Dropdown";
import PageContainer from "../components/layout/PageContainer";

const categories = [
  { id: 1, name: "All categories" },
  { id: 2, name: "Music" },
  { id: 3, name: "Art" },
  { id: 4, name: "Photography" },
  { id: 5, name: "Sport" },
  { id: 6, name: "Virtual Worlds" },
  { id: 7, name: "More" },
];

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
        <Dropdown listArr={categories}></Dropdown>
      </PageContainer>
    </StatsPageStyles>
  );
};

export default StatsPage;
