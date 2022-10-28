import React from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

const ButtonStyles = styled.div`
  position: relative;
  width: ${(props) => props.width || "201px"};
  height: ${(props) => props.height || "62px"};
  display: flex;
  justify-content: center;
  align-items: center;
  .title {
    letter-spacing: 0.02em;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    background: linear-gradient(
      91.03deg,
      #ffffff -6.88%,
      rgba(255, 255, 255, 0.72) 109.82%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  .button {
    position: absolute;
    top: 0;
    left: 0;
    cursor: pointer;
    width: 100%;
    height: 100%;
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(
      93deg,
      rgba(235, 235, 235, 0) -6.21%,
      rgba(235, 235, 235, 0.33) -6.2%,
      rgba(219, 219, 219, 0.02) 118.18%
    );
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))
      drop-shadow(0px 4px 4px rgba(26, 25, 25, 0.25));
    backdrop-filter: blur(25px);
    border-radius: 8px;
    color: inherit;
  }
  .blur-after {
    position: absolute;
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;
    width: calc(100% - 50px);
    height: 62px;
    ${(props) =>
      props.kind === "small" &&
      css`
        width: 77px;
        height: 39px;
        top: 22px;
      `};
    border-radius: 8px;
    background: linear-gradient(180deg, #b444ff 0%, #f582ff 100%);
    backdrop-filter: blur(25px);
  }
`;
const Button = ({ children, className, kind = "", url = "", ...props }) => {
  return (
    <ButtonStyles className={className} kind={kind} {...props}>
      <Link to={url}>
        <div className="button">
          <span className="title">{children}</span>
        </div>
        <div className="blur-after"></div>
      </Link>
    </ButtonStyles>
  );
};

export default Button;
