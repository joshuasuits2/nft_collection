import React from "react";
import styled from "styled-components";

const UnderlineHoverStyles = styled.div`
  span {
    position: relative;
  }

  span::before {
    content: "";
    position: absolute;
    bottom: -8px;
    left: 0;
    right: 0;
    height: 2px;
    background-color: ${(props) => props.bgc || "#fbff2a"};
    transform-origin: bottom right;
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }

  span:hover::before {
    transform-origin: bottom left;
    transform: scaleX(1);
  }
`;

const UnderlineHover = ({ children }) => {
  return <UnderlineHoverStyles>{children}</UnderlineHoverStyles>;
};

export default UnderlineHover;
