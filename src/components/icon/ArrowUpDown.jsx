import React from "react";

const ArrowUpDown = ({ state = "", className = "" }) => {
  return (
    <>
      {!!state ? (
        <span>
          <svg
            width="10"
            height="6"
            viewBox="0 0 10 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 1.19141L5 6L10 1.19141L8.76117 0L5 3.61719L1.23883 0L0 1.19141Z"
              fill="url(#paint0_linear_278_287)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_278_287"
                x1="0"
                y1="3"
                x2="10"
                y2="3"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#DDB9FF" />
                <stop offset="1" stopColor="#A749F8" />
              </linearGradient>
            </defs>
          </svg>
        </span>
      ) : (
        <span>
          <svg
            width="10"
            height="6"
            viewBox="0 0 10 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 4.80859L5 0L2.1639e-07 4.80859L1.23883 6L5 2.38281L8.76117 6L10 4.80859Z"
              fill="url(#paint0_linear_234_24630)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_234_24630"
                x1="10"
                y1="3"
                x2="0"
                y2="3"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#DDB9FF" />
                <stop offset="1" stopColor="#A749F8" />
              </linearGradient>
            </defs>
          </svg>
        </span>
      )}
    </>
  );
};

export default ArrowUpDown;
