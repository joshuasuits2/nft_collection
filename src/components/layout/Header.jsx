import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Input from "../input/Input";

const ListLink = [
  {
    id: 1,
    title: "Home",
    to: "/",
  },
  {
    id: 2,
    title: "Explore",
    to: "/explore",
  },
  {
    id: 3,
    title: "Stats",
    to: "/stats",
  },
];

const HeaderStyles = styled.div`
  margin-bottom: 65px;
  span.connect {
    background: linear-gradient(180deg, #ddb9ff 0%, #a749f8 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  a {
    display: inline-block;
    text-decoration: none;
  }
  .menu-item {
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 0.32px;
    color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
    background-image: linear-gradient(180deg, #ddb9ff 0%, #a749f8 100%);
  }
`;

const Header = () => {
  return (
    <HeaderStyles>
      <header className="grid grid-cols-2 gap-[100px] w-full max-w-[1240px] mx-auto">
        <div className="header-left flex items-center ">
          <img srcSet="./logo.png 2x" alt="" className="inline-block" />
          <Input
            className="ml-[85px]"
            placeholder="Search item here..."
            kind="search"
          ></Input>
        </div>

        <div className="header-right  flex items-center justify-between">
          <ul className="flex items-center gap-10">
            {ListLink.map((item) => (
              <NavLink
                key={item.id}
                to={item.to}
                className={({ isActive }) =>
                  isActive ? "menu-item" : "text-white"
                }
              >
                {item.title}
              </NavLink>
            ))}
          </ul>
          <div className="user flex items-center gap-[30px]">
            <div>
              <svg
                width="35"
                height="35"
                viewBox="0 0 35 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_1_2552)">
                  <path
                    d="M17.5 0.546875C7.83266 0.546875 0 8.13477 0 17.5C0 26.8652 7.83266 34.4531 17.5 34.4531C27.1673 34.4531 35 26.8652 35 17.5C35 8.13477 27.1673 0.546875 17.5 0.546875ZM17.5 7.10938C20.9294 7.10938 23.7097 9.80273 23.7097 13.125C23.7097 16.4473 20.9294 19.1406 17.5 19.1406C14.0706 19.1406 11.2903 16.4473 11.2903 13.125C11.2903 9.80273 14.0706 7.10938 17.5 7.10938ZM17.5 30.625C13.3579 30.625 9.64617 28.8066 7.1623 25.9629C8.48891 23.543 11.0857 21.875 14.1129 21.875C14.2823 21.875 14.4516 21.9023 14.6139 21.9502C15.5313 22.2373 16.4909 22.4219 17.5 22.4219C18.5091 22.4219 19.4758 22.2373 20.3861 21.9502C20.5484 21.9023 20.7177 21.875 20.8871 21.875C23.9143 21.875 26.5111 23.543 27.8377 25.9629C25.3538 28.8066 21.6421 30.625 17.5 30.625Z"
                    fill="url(#paint0_linear_1_2552)"
                  />
                </g>
                <defs>
                  <linearGradient
                    id="paint0_linear_1_2552"
                    x1="17.5"
                    y1="0.546875"
                    x2="17.5"
                    y2="34.4531"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#DDB9FF" />
                    <stop offset="1" stopColor="#A749F8" />
                  </linearGradient>
                  <clipPath id="clip0_1_2552">
                    <rect width="35" height="35" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <button className="flex items-center justify-center px-6 py-4 font-semibold tracking-[0.02em] border border-solid border-purple-400 rounded-lg h-[57px]">
              <span className="connect"> Connect Wallet</span>
            </button>
          </div>
        </div>
      </header>
    </HeaderStyles>
  );
};

export default Header;
