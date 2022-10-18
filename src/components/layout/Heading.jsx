import React from "react";
import styled from "styled-components";

const HeadingStyles = styled.div`
  text-align: left;
  display: flex;
  align-items: ${(props) => props.alignItems || "center"};
  justify-content: center;
  flex-direction: column;
  span {
    font-family: "Ultra";
    font-style: normal;
    font-weight: 400;
    font-size: 25px;
    line-height: 32px;
    display: flex;
    align-items: center;
    letter-spacing: 0.02em;
    background: linear-gradient(180deg, #ddb9ff 0%, #a749f8 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

const Heading = ({ children, desc, className = " ", ...props }) => {
  return (
    <HeadingStyles className={className} {...props}>
      <span>
        <svg
          width="62"
          height="42"
          viewBox="0 0 62 42"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_f_1_2154)">
            <path
              d="M19 21L47 27V15L19 21Z"
              fill="url(#paint0_linear_1_2154)"
            />
          </g>
          <g filter="url(#filter1_b_1_2154)">
            <path
              d="M0 21.5L44 30V13L0 21.5Z"
              fill="url(#paint1_linear_1_2154)"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_1_2154"
              x="4"
              y="0"
              width="58"
              height="42"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="7.5"
                result="effect1_foregroundBlur_1_2154"
              />
            </filter>
            <filter
              id="filter1_b_1_2154"
              x="-100"
              y="-87"
              width="244"
              height="217"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feGaussianBlur in="BackgroundImageFix" stdDeviation="50" />
              <feComposite
                in2="SourceAlpha"
                operator="in"
                result="effect1_backgroundBlur_1_2154"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_backgroundBlur_1_2154"
                result="shape"
              />
            </filter>
            <linearGradient
              id="paint0_linear_1_2154"
              x1="33"
              y1="15"
              x2="33"
              y2="27"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#DDB9FF" />
              <stop offset="1" stopColor="#A749F8" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_1_2154"
              x1="45.6604"
              y1="21.5"
              x2="-0.830187"
              y2="21.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#A749F8" />
              <stop offset="0.836458" stopColor="#DDB9FF" stopOpacity="0.04" />
            </linearGradient>
          </defs>
        </svg>
        {children}
        <svg
          width="62"
          height="42"
          viewBox="0 0 62 42"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_f_1_2151)">
            <path
              d="M43 21L15 27V15L43 21Z"
              fill="url(#paint0_linear_1_2151)"
            />
          </g>
          <g filter="url(#filter1_b_1_2151)">
            <path
              d="M62 21.5L18 30V13L62 21.5Z"
              fill="url(#paint1_linear_1_2151)"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_1_2151"
              x="0"
              y="0"
              width="58"
              height="42"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="7.5"
                result="effect1_foregroundBlur_1_2151"
              />
            </filter>
            <filter
              id="filter1_b_1_2151"
              x="-82"
              y="-87"
              width="244"
              height="217"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feGaussianBlur in="BackgroundImageFix" stdDeviation="50" />
              <feComposite
                in2="SourceAlpha"
                operator="in"
                result="effect1_backgroundBlur_1_2151"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_backgroundBlur_1_2151"
                result="shape"
              />
            </filter>
            <linearGradient
              id="paint0_linear_1_2151"
              x1="29"
              y1="15"
              x2="29"
              y2="27"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#DDB9FF" />
              <stop offset="1" stopColor="#A749F8" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_1_2151"
              x1="16.3396"
              y1="21.5"
              x2="62.8302"
              y2="21.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#A749F8" />
              <stop offset="0.836458" stopColor="#DDB9FF" stopOpacity="0.04" />
            </linearGradient>
          </defs>
        </svg>
      </span>
      <p className="mt-[25px] text-[14px]">{desc}</p>
    </HeadingStyles>
  );
};

export default Heading;
