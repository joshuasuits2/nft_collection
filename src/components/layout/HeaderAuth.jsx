import React, { useEffect, useRef, useState } from "react";
import { Link, Navigate, NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Input from "../input/Input";
import avatar_default from "../../assets/avatar/avatar_default.png";
import AuthUser from "../../config/AuthUser";

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
  margin-bottom: 58px;
  #header {
    --transition-curve: cubic-bezier(0.05, 0, 0.2, 1);
    transition: top 0.5s var(--transition-curve),
      background-color 0.2s var(--transition-curve),
      box-shadow 0.2s var(--transition-curve),
      color 0.2s var(--transition-curve);
  }
  .header-fixed {
    position: fixed;
    --transition-curve: cubic-bezier(0.05, 0, 0.2, 1);
    transition: top 0.5s var(--transition-curve),
      background-color 0.2s var(--transition-curve),
      box-shadow 0.2s var(--transition-curve),
      color 0.2s var(--transition-curve);
    top: 0;
    z-index: 50;
    background: linear-gradient(
      180deg,
      rgba(52, 51, 53, 0.5) 50%,
      rgba(64, 59, 69, 0.5) 100%
    );
    backdrop-filter: blur(50px);
  }
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

const HeaderAuth = ({ handleSignout }) => {
  const navigate = useNavigate();
  useEffect(() => {
    const header = document.getElementById("header");
    const sticky = header.offsetTop;
    const handleFixed = () => {
      if (window.pageYOffset > sticky) {
        header.classList.add("header-fixed");
      } else {
        header.classList.remove("header-fixed");
      }
    };
    window.onscroll = function () {
      handleFixed();
    };
    return () => {
      window.onscroll = null;
    };
  }, []);

  return (
    <HeaderStyles>
      <div className="w-full py-[7px]" id="header">
        <header className="grid grid-cols-2 gap-[100px] w-full max-w-[1240px] mx-auto">
          <div className="header-left flex items-center">
            <Link
              to="/"
              onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              }}
            >
              <img srcSet="./logo.png" alt="" className="inline-block" />
            </Link>
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
                  onClick={() => {
                    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                  }}
                >
                  {item.title}
                </NavLink>
              ))}
            </ul>
            <div className="user flex items-center gap-[30px]">
              <Link
                to="/wallets"
                onClick={() => {
                  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                }}
              >
                <img
                  src={avatar_default}
                  alt=""
                  className="w-[35px] h-[35px] object-cover rounded-full"
                />
              </Link>
              <button onClick={handleSignout}>
                <span className="text-white font-[400] cursor-pointer">
                  Sign out
                </span>
              </button>
              <button
                className="h-[53px]  px-5 py-4 flex items-center justify-center font-medium tracking-[0.02em] bg-purple-400 rounded-lg "
                onClick={() => navigate("/create")}
              >
                <span className="text-white">Create</span>
              </button>
            </div>
          </div>
        </header>
      </div>
    </HeaderStyles>
  );
};

export default HeaderAuth;
