import React, { useState } from "react";
import styled from "styled-components";
import verify from "../../assets/outside/verify.png";
import { baseURL, logoURL } from "../../config/getConfig";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const CardCollectionStyles = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 360px;
  cursor: pointer;
  &:hover > .overlay {
    opacity: 0;
  }
  .overlay {
    background: linear-gradient(
      180deg,
      rgba(83, 80, 80, 0) 27.51%,
      rgba(31, 30, 30, 0.66) 116.99%
    );
    transition: all 0.25s ease-in-out;
  }
  .avatar-image {
    &:before {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      content: "";
      background: linear-gradient(180deg, #ddb9ff 0%, #a749f8 100%);
      width: 105px;
      height: 105px;
      z-index: -1;
      border-radius: 1000px;
    }
  }
`;
const CardCollection = ({ logo, banner, name, loading, ...props }) => {
  const [heart, setHeart] = useState(false);
  const handleReaction = () => {
    setHeart(!heart);
    console.log(heart);
  };
  return (
    <CardCollectionStyles>
      <div className="collection-image h-[310px] w-full z-0 absolute">
        <img
          src={`${baseURL}/storage/bannerImages/${banner}`}
          alt=""
          className="w-full h-full object-cover rounded-xl"
        />
      </div>
      <div className="overlay rounded-[12px] h-[310px] w-full absolute top-0 left-0 z-[1]" />
      <div className="ml-5 mt-auto flex items-end w-full">
        <div className="rounded-full h-[100px] w-[100px] flex items-end relative z-[2] cursor-pointer">
          <img
            src={`${baseURL}/storage/logoImages/${logo}`}
            alt=""
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <div className="relative z-[2] mb-2 ml-3 font-bold flex gap-x-[10px] items-center ">
          <span>{name}</span>
          <img src={verify} alt="" className="shrink-0 w-4 h-4 object-cover" />
        </div>
      </div>
      <span
        className="block absolute bottom-[80px] right-[30px] z-10 cursor-pointer transition-all"
        onClick={handleReaction}
      >
        <svg
          width="28"
          height="23"
          viewBox="0 0 28 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 7.71428C0 9.57143 0.28866 12.4286 2.8866 15C5.19588 17.2857 12.8454 22.4286 13.134 22.7143C13.4227 22.8571 13.7113 23 14 23C14.2887 23 14.5773 22.8571 14.866 22.7143C15.1546 22.4286 22.8041 17.4286 25.1134 15C27.7113 12.4286 28 9.57143 28 7.71428C28 3.42857 24.5361 0 20.2062 0C17.8969 0 15.5876 1.28571 14.1443 3.28571C12.701 1.28571 10.3918 0 7.79381 0C3.60825 0 0 3.42857 0 7.71428Z"
            fill={heart ? "#AD45FF" : "#FFF"}
          />
        </svg>
      </span>
    </CardCollectionStyles>
  );
};

export default CardCollection;
