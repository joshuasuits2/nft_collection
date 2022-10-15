import React from "react";
import styled from "styled-components";

const PageContainerStyles = styled.div`
  width: 100%;
  max-width: 1240px;
  margin: 0 auto;
`;

const PageContainer = ({ children, className = "" }) => {
  return (
    <PageContainerStyles className={className}>{children}</PageContainerStyles>
  );
};

export default PageContainer;
