import React from "react";
import planet from "../../assets/outside/planet.png";
import imageTopic from "../../assets/outside/ImageTopic.png";
import Button from "../../components/button/Button";
import UnderlineHover from "../../components/underline/UnderlineHover";

const LandingPage = () => {
  return (
    <div className=" flex  justify-between relative">
      <img
        src={planet}
        alt=""
        className="absolute -top-[100px] block -z-[2] -translate-x-6"
      />
      <div className="body-left flex-1 relative">
        <div className="circle-white"></div>
        <p className="heading">
          Discover Collect <br></br>And Sell Remarkable <br></br> NFTs
        </p>
        <div className="flex items-center gap-[75px] mt-[40px]">
          <Button url="/wallets">Connect Wallet</Button>

          <div className="flex items-center gap-[18px]">
            <span className="cursor-pointer">
              <svg
                width="41"
                height="40"
                viewBox="0 0 41 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M29.2208 20C29.2206 20.295 29.1421 20.5847 28.9934 20.8394C28.8446 21.0942 28.6309 21.3049 28.3741 21.45L19.6208 26.4133C19.2401 26.6293 18.8094 26.7414 18.3717 26.7387C17.934 26.7359 17.5048 26.6183 17.1268 26.3976C16.7489 26.1769 16.4355 25.8609 16.218 25.4811C16.0005 25.1013 15.8865 24.671 15.8875 24.2333V15.7633C15.8877 15.3262 16.0025 14.8968 16.2205 14.5179C16.4384 14.1391 16.7519 13.8239 17.1297 13.604C17.5075 13.3841 17.9363 13.2671 18.3734 13.2646C18.8105 13.2622 19.2406 13.3744 19.6208 13.59L28.3741 18.55C28.6309 18.6951 28.8446 18.9058 28.9934 19.1606C29.1421 19.4153 29.2206 19.705 29.2208 20ZM20.8875 0C18.261 -3.9137e-08 15.6603 0.517315 13.2338 1.52241C10.8073 2.5275 8.60249 4.00069 6.74532 5.85786C4.88814 7.71504 3.41495 9.91982 2.40986 12.3463C1.40477 14.7728 0.887451 17.3736 0.887451 20C0.887451 22.6264 1.40477 25.2272 2.40986 27.6537C3.41495 30.0802 4.88814 32.285 6.74532 34.1421C8.60249 35.9993 10.8073 37.4725 13.2338 38.4776C15.6603 39.4827 18.261 40 20.8875 40C26.1918 40 31.2789 37.8929 35.0296 34.1421C38.7803 30.3914 40.8875 25.3043 40.8875 20C40.8875 14.6957 38.7803 9.60859 35.0296 5.85786C31.2789 2.10714 26.1918 7.90407e-08 20.8875 0V0ZM4.22078 20C4.22078 15.5797 5.97673 11.3405 9.10234 8.21489C12.2279 5.08928 16.4672 3.33333 20.8875 3.33333C25.3077 3.33333 29.547 5.08928 32.6726 8.21489C35.7982 11.3405 37.5541 15.5797 37.5541 20C37.5541 24.4203 35.7982 28.6595 32.6726 31.7851C29.547 34.9107 25.3077 36.6667 20.8875 36.6667C16.4672 36.6667 12.2279 34.9107 9.10234 31.7851C5.97673 28.6595 4.22078 24.4203 4.22078 20Z"
                  fill="#FBFF2A"
                />
              </svg>
            </span>
            <UnderlineHover>
              <span className="text-[#FBFF2A] cursor-pointer">
                Discover Artwork
              </span>
            </UnderlineHover>
          </div>
        </div>
      </div>
      <div className="body-right flex-1 translate-x-[55px]">
        <div className="circle-violet"></div>
        <div className="circle-blue"></div>
        <div className="circle-yellow"></div>
        <p className="sub-title text-[14px] font-[400] leading-6 text-center ">
          Find digital artwork by professionals and discover the true <br></br>
          meaning of the artwork
        </p>
        <img src={imageTopic} alt="" className="mt-[25px]" />
        <ul className="statistics flex gap-[60px] items-center justify-center mt-[50px]">
          <li className="flex flex-col items-center">
            <span className="font-[700] text-[30px]">100K+</span>
            <span>Artwork</span>
          </li>
          <li className="flex flex-col items-center">
            <span className="font-[700] text-[30px]">12K+</span>
            <span>Owners</span>
          </li>
          <li className="flex flex-col items-center">
            <span className="font-[700] text-[30px]">20K+</span>
            <span>Sales</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LandingPage;
