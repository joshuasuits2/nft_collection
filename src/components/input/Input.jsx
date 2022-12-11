import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import lodash from "lodash";
import { baseURL } from "../../config/getConfig";
import { useNavigate } from "react-router-dom";
import slugify from "slugify";

const InputStyle = styled.div`
  position: relative;
  .search-input {
    width: ${(props) => props.width || "300px"};
  }
  input:focus + span stop {
    stop-color: #d285ff;
  }
`;

const Input = ({
  searchValue = "",
  className = "",
  placeholder = "",
  type = "text",
  kind = "",
  ...props
}) => {
  const navigate = useNavigate();
  const handleSearchItem = lodash.debounce((e) => {
    if (e.key === "Enter") {
      if (e.target.value !== "") {
        const slug = slugify(e.target.value, "%");
        navigate(`/result/search_query=${slug}`);
      } else navigate("/");
    }
  }, 700);

  return (
    <InputStyle className={className} {...props}>
      <input
        type={type}
        id="input-text"
        onKeyDown={handleSearchItem}
        kind={kind}
        placeholder={placeholder}
        className={`search-input h-[53px] border border-[#9b9b9bce] border-solid rounded-lg py-[10px] px-5 pr-[55px] outline-none bg-transparent font-light text-[14px] text-white tracking-[0.02em] 
focus:border-purple-400 transition-all 
         `}
      />
      {kind === "search" && (
        <label htmlFor="input-text">
          <span className="absolute right-[23px] top-1/2 -translate-y-1/2">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.8"
                d="M17 17L13.2223 13.2156M15.3158 8.15789C15.3158 10.0563 14.5617 11.8769 13.2193 13.2193C11.8769 14.5617 10.0563 15.3158 8.15789 15.3158C6.2595 15.3158 4.43886 14.5617 3.0965 13.2193C1.75413 11.8769 1 10.0563 1 8.15789C1 6.2595 1.75413 4.43886 3.0965 3.0965C4.43886 1.75413 6.2595 1 8.15789 1C10.0563 1 11.8769 1.75413 13.2193 3.0965C14.5617 4.43886 15.3158 6.2595 15.3158 8.15789Z"
                stroke="url(#paint0_linear_1_2575)"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1_2575"
                  x1="-0.151671"
                  y1="2.71429"
                  x2="18.8505"
                  y2="3.05698"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="white" />
                  <stop offset="1" stopColor="white" stopOpacity="0.72" />
                </linearGradient>
              </defs>
            </svg>
          </span>
        </label>
      )}
    </InputStyle>
  );
};

export default Input;
