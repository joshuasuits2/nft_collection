import React from "react";
import styled from "styled-components";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import lodash from "lodash";
import slugify from "slugify";

const InputStyle = styled.div`
  position: relative;
  .search-input {
    width: ${(props) => props.width || "300px"};
  }
  /* input:focus + span stop {
    stop-color: #d285ff;
  } */
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
  const [icon, setIcon] = useState(false);
  const ref = useRef(null);

  const handleClick = () => {
    ref.current.value = "";
    setIcon(false);
  };
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
        type="text"
        onChange={(e) => {
          if (e.target.value.length === 0) {
            setIcon(false);
          } else setIcon(true);
        }}
        defaultValue={""}
        ref={ref}
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
          <div className="absolute right-[23px] top-1/2 -translate-y-1/2">
            {!icon ? (
              <span className="transition-all">
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
            ) : (
              <span className="transition-all">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  onClick={handleClick}
                >
                  <path
                    d="M11.0564 10.3536L13.2929 12.59L12.59 13.2929L10.3536 11.0564L10 10.7029L9.64645 11.0564L7.41 13.2929L6.70711 12.59L8.94355 10.3536L9.29711 10L8.94355 9.64645L6.70711 7.41L7.41 6.70711L9.64645 8.94355L10 9.29711L10.3536 8.94355L12.59 6.70711L13.2929 7.41L11.0564 9.64645L10.7029 10L11.0564 10.3536ZM1.5 10C1.5 14.6861 5.31386 18.5 10 18.5C14.6861 18.5 18.5 14.6861 18.5 10C18.5 5.31386 14.6861 1.5 10 1.5C5.31386 1.5 1.5 5.31386 1.5 10ZM0.5 10C0.5 4.74614 4.74614 0.5 10 0.5C15.2539 0.5 19.5 4.74614 19.5 10C19.5 15.2539 15.2539 19.5 10 19.5C4.74614 19.5 0.5 15.2539 0.5 10Z"
                    fill="url(#paint0_linear_1269_5746)"
                    stroke="url(#paint1_linear_1269_5746)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_1269_5746"
                      x1="-1.43959"
                      y1="2.14286"
                      x2="22.3131"
                      y2="2.57123"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="white" />
                      <stop offset="1" stopColor="white" stopOpacity="0.72" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_1269_5746"
                      x1="9.99997"
                      y1="-1.35132"
                      x2="21.929"
                      y2="9.25085"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#EBEBEB" stopOpacity="0.5" />
                      <stop
                        offset="0.0001"
                        stopColor="#EBEBEB"
                        stopOpacity="0.52"
                      />
                      <stop offset="1" stopColor="#DBDBDB" stopOpacity="0.18" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            )}
          </div>
        </label>
      )}
    </InputStyle>
  );
};

export default Input;
