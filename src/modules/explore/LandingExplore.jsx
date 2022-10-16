import React from "react";
import styled from "styled-components";
import PageContainer from "../../components/layout/PageContainer";
import planet_large from "../../assets/outside/planet_large.png";
import planet_small from "../../assets/outside/planet_small.png";
import general from "../../assets/outside/general.png";

const LadingExploreStyles = styled.div`
  .description {
    display: -webkit-box;
    -webkit-line-clamp: 6;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
  }
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
    background: linear-gradient(
      93deg,
      rgba(235, 235, 235, 0) -6.21%,
      rgba(235, 235, 235, 0.33) -6.2%,
      rgba(219, 219, 219, 0.02) 118.18%
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

  .planet_large {
    mix-blend-mode: screen;
    position: absolute;
    left: 5%;
    right: 53.4%;
    top: -65px;
    bottom: 87.22%;
    transform: scale(1.4) translateX(65%) rotate(-5deg);
    animation: planetLargeAnimate 1.5s ease-in-out forwards 1s;
    z-index: 1;
    pointer-events: none;
  }
  .general {
    mix-blend-mode: screen;
    display: block;
    -webkit-filter: brightness(120%);
    filter: contrast(1.25);
    position: absolute;
    left: 29%;
    top: -30px;
    opacity: 0.7;
    z-index: 0;
    transform: scale(1.3) translate(-20%, 10%) rotate(-2deg);
    animation: generalAnimate 1.5s ease-in-out forwards 1s;
    pointer-events: none;
  }
  .planet_small {
    mix-blend-mode: screen;
    pointer-events: none;
    position: absolute;
    margin-top: 150px;
    left: 25%;
    z-index: 0;
    transform: translate(720px, -220px) rotate(-4deg);
    animation: planetSmallAnimate 1.5s ease-in-out forwards 1s;
  }
  .desc {
    transform: translateY(80%);
    opacity: 0;
    animation: descAnimate 1.5s ease-in-out forwards 1s;
  }

  @keyframes descAnimate {
    0% {
      transform: translateY(80%);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes generalAnimate {
    0% {
      transform: scale(1.3) translate(-20%, 10%) rotate(-2deg);
      opacity: 1;
    }
    100% {
      transform: scale(1) translateX(0%);
      opacity: 0.7;
    }
  }

  @keyframes planetLargeAnimate {
    0% {
      transform: scale(1.4) translateX(65%) rotate(-5deg);
    }
    100% {
      transform: scale(1) translateX(0%) rotate(0);
    }
  }

  @keyframes planetSmallAnimate {
    0% {
      transform: translate(720px, -220px) rotate(-4deg);
    }
    100% {
      transform: scale(1) translateX(0%) rotate(0);
    }
  }
`;

const LandingExplore = ({ pageRefs }) => {
  function scrollIntoView(type) {
    pageRefs.current[type].scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
      duration: "1000ms",
    });
  }
  return (
    <LadingExploreStyles>
      <div className="space_image relative ">
        <img src={planet_large} alt="" className="planet_large" />
        <img src={general} alt="" className="general" />
        <img src={planet_small} alt="" className="planet_small" />
      </div>
      <PageContainer>
        <div className="grid grid-cols-2 gap-x-[55px]">
          <div className=""></div>
          <div className="h-[350px] w-[600px] mt-[20px]  desc">
            <h3 className="text-[20px] font-bold leading-[35px]   tracking-[0.02em]">
              Labore ea qui duie reprehenderit ad minim nulla.
            </h3>
            <p className="text-[14px] leading-[40px] font-[300] mt-[20px] font-['Montserrat'] h-[248px]  tracking-[0.02em] description">
              Deserunt ipsum id dolore irure elit mollit. Occaecat nisi id
              commodo consectetur laborum. Consequat commodo fugiat dolore minim
              excepteur consequat eiusmod. Deserunt duis nostrud eu ad mollit.
              Irure reprehenderit proident et occaecat. Sint deserunt voluptate
              deserunt nostrud. Ex ut mollit culpa amet. Anim dolore sint
              commodo enim voluptate labore ut sint mollit dolor voluptate eu ut
              proident. In eu in ad cupidatat. Tempor ipsum eu labore incididunt
              pariatur exercilit.
            </p>
            <div>
              <button onClick={() => scrollIntoView("allNFT")}>
                Scroll Down
              </button>
            </div>
          </div>
        </div>
      </PageContainer>
    </LadingExploreStyles>
  );
};

export default LandingExplore;
