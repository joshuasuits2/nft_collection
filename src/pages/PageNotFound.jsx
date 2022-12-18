import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import NotFound from "../assets/outside/NotFound.png";

const PageNotFoundStyles = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  button {
    margin-top: 60px;
    z-index: 1;
    position: relative;
    font-size: inherit;
    font-family: inherit;
    color: white;
    height: 62px;
    width: 200px;
    outline: none;
    border: none;
    background-image: linear-gradient(
      135deg,
      rgb(83, 152, 249),
      rgb(70, 248, 251)
    );

    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))
      drop-shadow(0px 4px 4px rgba(26, 25, 25, 0.25));
    backdrop-filter: blur(25px);
    color: #d4d4d8;
  }
  button:active {
    color: #c084fc;
  }
  button:hover {
    cursor: pointer;
  }

  button::before {
    content: "";
    z-index: -1;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border: 1px solid;
    border-image-source: linear-gradient(
      131.63deg,
      rgba(235, 235, 235, 0.5) 23.29%,
      rgba(235, 235, 235, 0.52) 23.3%,
      rgba(219, 219, 219, 0.18) 79.82%
    );
    border-image-slice: 1;
    transform-origin: center;
    transform: scale(1);
  }
  button:hover::before {
    transition: all 0.75s ease-in-out;
    transform-origin: center;
    transform: scale(1.75);
    opacity: 0;
  }
`;

const PageNotFound = () => {
  return (
    <PageNotFoundStyles>
      <img
        src={NotFound}
        alt=""
        className="w-full h-full object-cover pointer-events-none"
      />
      <div className="text absolute flex flex-col items-center top-[140px]">
        <span className="text-[25px]">Oops!</span>
        <span className="text-[180px] -mt-5 font-bold pointer-events-none">
          404
        </span>
        <span className="text-[40px] -mt-10  font-[700]">PAGE NOT FOUND</span>
        <Link to="/">
          <button>
            <span className="text-white">Back to Home</span>
          </button>
        </Link>
      </div>
    </PageNotFoundStyles>
  );
};

export default PageNotFound;
