import React, { useEffect } from "react";
import PageContainer from "../components/layout/PageContainer";
import MeeCat602 from "../assets/nfts/MeeCat602.png";
import styled from "styled-components";
import Footer from "../components/layout/Footer";
import verify from "../assets/outside/verify.png";
import avatar from "../assets/avatar/Ellipse 378.png";
import MeeCat101 from "../assets/collection/MeeCat101.png";
import Heading from "../components/layout/Heading";
import CardList from "../components/layout/CardList";

const CategoryDetailStyles = styled.div`
  .linear-property {
    background: linear-gradient(
      93deg,
      rgba(235, 235, 235, 0) -6.21%,
      rgba(235, 235, 235, 0.33) -6.2%,
      rgba(219, 219, 219, 0.02) 118.18%
    );
    /* opacity: 0.5; */
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))
      drop-shadow(0px 4px 4px rgba(26, 25, 25, 0.25));
    backdrop-filter: blur(25px);
    border-radius: 8px;
  }
  .linear-timing {
    width: 40px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 25px;
    font-weight: bold;
    background: linear-gradient(
      131.63deg,
      rgba(235, 235, 235, 0.52) 23.3%,
      rgba(235, 235, 235, 0.5) 47.9%,
      rgba(219, 219, 219, 0.18) 79.82%
    );
    border-radius: 8px;
  }
  .name-linear {
    background: linear-gradient(180deg, #1ab5db 0%, #1a89df 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  .background-item-blur {
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(
      93deg,
      rgba(235, 235, 235, 0) -6.21%,
      rgba(235, 235, 235, 0.33) -6.2%,
      rgba(219, 219, 219, 0.02) 118.18%
    );
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))
      drop-shadow(0px 4px 4px rgba(26, 25, 25, 0.25));
    backdrop-filter: blur(25px);
    border-radius: 16px;
  }
  .effect-blur {
    background: #fbff2a;
    opacity: 0.3;
    filter: blur(100px);
    left: 239px;
    z-index: -1;
  }
  .text-gradient {
    background: linear-gradient(180deg, #ddb9ff 0%, #a749f8 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;
const CategoryDetail = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      // behavior: "smooth",
    });
  }, []);
  return (
    <CategoryDetailStyles className="body">
      <PageContainer>
        <div className="flex gap-x-[130px]">
          <div className="flex-[50%] flex flex-col">
            <div className="card-top relative z-10">
              <div className="background-item-blur h-[540px] ">
                <img
                  src={MeeCat602}
                  alt=""
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
              <div className="effect-blur absolute w-[300px] h-[300px] top-[80px]"></div>
            </div>
            <span className="mt-10">Details</span>
            <div className="details flex gap-x-[130px] mt-5">
              <div>
                <ul className="flex flex-col gap-y-4">
                  <li className="text-gradient">Contract Address</li>
                  <li className="text-gradient">Token ID</li>
                  <li className="text-gradient">Token Standard</li>
                  <li className="text-gradient">Blockchain</li>
                  <li className="text-gradient">Last Updated</li>
                  <li className="text-gradient">Creator Earnings</li>
                </ul>
              </div>
              <div>
                <ul className="flex flex-col gap-y-4">
                  <li className="text-[#FBFF2A]">0x1263...5df5</li>
                  <li className="text-[#FBFF2A]">602</li>
                  <li>ERC-721</li>
                  <li className="text-[#FBFF2A]">Ethereum</li>
                  <li>2 days ago</li>
                  <li>10%</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex-[70%]">
            <div className="desc flex flex-col">
              <div className="creator flex items-center gap-x-2">
                <span className="name-linear font-[600]">Layer Lab</span>
                <img src={verify} alt="" className="w-4 h-4 object-cover" />
              </div>
              <span className="font-bold text-[20px] mt-[10px]">
                MeeCat #602
              </span>
              <div className="flex font-bold text-[20px] mt-[25px] items-center justify-between">
                <div className="price w-[137px] h-[50px] rounded-full bg-[#FBFF2A] flex items-center justify-center text-[#000000] gap-x-2">
                  <span>0.03</span>
                  <div className="w-[64px] flex  bg-[#E7DE06] rounded-full items-center justify-center h-9">
                    ETH
                  </div>
                </div>
                <span className="text-[16px] font-[500]">$ 4,429.87</span>
                <div className="view flex items-center gap-x-[10px] text-[16px] font-[400]">
                  <span>
                    <svg
                      width="22"
                      height="16"
                      viewBox="0 0 22 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g opacity="0.9">
                        <path
                          d="M10.9998 10.909C12.6199 10.909 13.9332 9.60656 13.9332 7.99991C13.9332 6.39326 12.6199 5.09082 10.9998 5.09082C9.37974 5.09082 8.06641 6.39326 8.06641 7.99991C8.06641 9.60656 9.37974 10.909 10.9998 10.909Z"
                          fill="white"
                        />
                        <path
                          d="M21.9563 7.75273C21.0938 5.54011 19.5964 3.62663 17.6492 2.24879C15.702 0.87095 13.3904 0.089144 11 0C8.60964 0.089144 6.29802 0.87095 4.35083 2.24879C2.40363 3.62663 0.906232 5.54011 0.0436893 7.75273C-0.0145631 7.91251 -0.0145631 8.08749 0.0436893 8.24727C0.906232 10.4599 2.40363 12.3734 4.35083 13.7512C6.29802 15.1291 8.60964 15.9109 11 16C13.3904 15.9109 15.702 15.1291 17.6492 13.7512C19.5964 12.3734 21.0938 10.4599 21.9563 8.24727C22.0146 8.08749 22.0146 7.91251 21.9563 7.75273V7.75273ZM11 12.7273C10.0572 12.7273 9.1356 12.45 8.35171 11.9306C7.56781 11.4111 6.95684 10.6728 6.59605 9.80905C6.23526 8.94525 6.14086 7.99476 6.32479 7.07775C6.50872 6.16075 6.96271 5.31843 7.62936 4.65731C8.29601 3.99619 9.14537 3.54596 10.07 3.36356C10.9947 3.18116 11.9532 3.27477 12.8242 3.63257C13.6952 3.99037 14.4397 4.59627 14.9635 5.37367C15.4872 6.15106 15.7668 7.06503 15.7668 8C15.7649 9.25316 15.262 10.4544 14.3685 11.3406C13.475 12.2267 12.2636 12.7253 11 12.7273V12.7273Z"
                          fill="white"
                        />
                      </g>
                    </svg>
                  </span>
                  <span>2,7k view</span>
                </div>
                <div className="like flex items-center gap-x-[10px] text-[16px] font-[400]">
                  <span>
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g opacity="0.9">
                        <path
                          d="M1.94116 8.62046C1.94116 9.78781 2.12794 11.5837 3.80896 13.2001C5.3032 14.6368 10.2529 17.8694 10.4396 18.049C10.6264 18.1388 10.8132 18.2286 11 18.2286C11.1868 18.2286 11.3735 18.1388 11.5603 18.049C11.7471 17.8694 16.6968 14.7266 18.191 13.2001C19.872 11.5837 20.0588 9.78781 20.0588 8.62046C20.0588 5.92659 17.8175 3.77148 15.0158 3.77148C13.5215 3.77148 12.0273 4.57965 11.0934 5.83679C10.1595 4.57965 8.66524 3.77148 6.98422 3.77148C4.27591 3.77148 1.94116 5.92659 1.94116 8.62046Z"
                          fill="white"
                        />
                      </g>
                    </svg>
                  </span>
                  <span>34 favorites</span>
                </div>
              </div>
              <span className="font-bold mt-[30px]">Description</span>
              <p className="mt-[30px] font-[300] leading-[35px]">
                A new metaverse experience! MeeCats living in Meetopia come to
                visit. The MeeCats team creates an accessible, gamified NFT
                experience.
              </p>
              <div className="owner-and-collection flex items-center gap-x-[60px] mt-[50px]">
                <div className="own flex gap-x-[10px] items-center">
                  <img
                    src={avatar}
                    alt=""
                    className="w-[60px] h-[60px] object-cover"
                  />
                  <div className="name flex flex-col">
                    <span>Current Owner</span>
                    <span>Jane Cooper</span>
                  </div>
                </div>
                <div className="collection flex gap-x-[10px] items-center">
                  <img
                    src={MeeCat101}
                    alt=""
                    className="w-[60px] h-[60px] object-cover"
                  />
                  <div className="collection  flex flex-col">
                    <span>Collection</span>
                    <span>MeeCat101</span>
                  </div>
                </div>
              </div>

              <div className="action flex gap-x-[180px] mt-[30px] justify-between">
                <div className="auction-ending">
                  <span>Auction Ending in</span>
                  <div className="timing mt-4 flex gap-x-5">
                    <div className="days flex flex-col gap-y-3 items-center">
                      <div className="number flex gap-x-[5px]">
                        <div className="pri linear-timing flex items-center">
                          <span className>2</span>
                        </div>
                        <div className="sec linear-timing flex items-center">
                          5
                        </div>
                      </div>
                      <div className="text">Days</div>
                    </div>
                    <div className="hours flex flex-col gap-y-3 items-center">
                      <div className="number flex gap-x-[5px]">
                        <div className="pri linear-timing flex items-center">
                          <span className>1</span>
                        </div>
                        <div className="sec linear-timing flex items-center">
                          6
                        </div>
                      </div>
                      <div className="text">Days</div>
                    </div>
                    <div className="minutes flex flex-col gap-y-3 items-center">
                      <div className="number flex gap-x-[5px]">
                        <div className="pri linear-timing flex items-center">
                          <span className>3</span>
                        </div>
                        <div className="sec linear-timing flex items-center">
                          3
                        </div>
                      </div>
                      <div className="text">Days</div>
                    </div>
                  </div>
                </div>
                <div className="deal  flex flex-col gap-y-5">
                  <button className="w-[150px] h-[55px] font-[500] bg-[#FBFF2A] rounded-lg text-[#141118]">
                    Buy Now
                  </button>
                  <button className="w-[150px] h-[55px] font-[500] rounded-lg border border-solid border-white">
                    Make Offer
                  </button>
                </div>
              </div>

              <div className="properties mt-[80px]">
                <span className="">Properties</span>
                <div className="grid grid-cols-3 grid-rows-3 mt-5 gap-y-4">
                  <div className="linear-property gap-y-[10px] py-5 px-2 w-[200px] flex flex-col justify-center items-center">
                    <span className="text-gradient text-[14px] font-[500]">
                      Background
                    </span>
                    <span className="text-[12px] font-[500]">
                      Dark Green Gradient
                    </span>
                    <span className="text-[12px]">95% have this trait </span>
                  </div>
                  <div className="linear-property gap-y-[10px] py-5 px-2 w-[200px] flex flex-col justify-center items-center">
                    <span className="text-gradient text-[14px] font-[500]">
                      Background
                    </span>
                    <span className="text-[12px] font-[500]">
                      Dark Green Gradient
                    </span>
                    <span className="text-[12px]">95% have this trait </span>
                  </div>
                  <div className="linear-property gap-y-[10px] py-5 px-2 w-[200px] flex flex-col justify-center items-center">
                    <span className="text-gradient text-[14px] font-[500]">
                      Background
                    </span>
                    <span className="text-[12px] font-[500]">
                      Dark Green Gradient
                    </span>
                    <span className="text-[12px]">95% have this trait </span>
                  </div>
                  <div className="linear-property gap-y-[10px] py-5 px-2 w-[200px] flex flex-col justify-center items-center">
                    <span className="text-gradient text-[14px] font-[500]">
                      Background
                    </span>
                    <span className="text-[12px] font-[500]">
                      Dark Green Gradient
                    </span>
                    <span className="text-[12px]">95% have this trait </span>
                  </div>
                  <div className="linear-property gap-y-[10px] py-5 px-2 w-[200px] flex flex-col justify-center items-center">
                    <span className="text-gradient text-[14px] font-[500]">
                      Background
                    </span>
                    <span className="text-[12px] font-[500]">
                      Dark Green Gradient
                    </span>
                    <span className="text-[12px]">95% have this trait </span>
                  </div>
                  <div className="linear-property gap-y-[10px] py-5 px-2 w-[200px] flex flex-col justify-center items-center">
                    <span className="text-gradient text-[14px] font-[500]">
                      Background
                    </span>
                    <span className="text-[12px] font-[500]">
                      Dark Green Gradient
                    </span>
                    <span className="text-[12px]">95% have this trait </span>
                  </div>
                  <div className="linear-property gap-y-[10px] py-5 px-2 w-[200px] flex flex-col justify-center items-center">
                    <span className="text-gradient text-[14px] font-[500]">
                      Background
                    </span>
                    <span className="text-[12px] font-[500]">
                      Dark Green Gradient
                    </span>
                    <span className="text-[12px]">95% have this trait </span>
                  </div>
                  <div className="linear-property gap-y-[10px] py-5 px-2 w-[200px] flex flex-col justify-center items-center">
                    <span className="text-gradient text-[14px] font-[500]">
                      Background
                    </span>
                    <span className="text-[12px] font-[500]">
                      Dark Green Gradient
                    </span>
                    <span className="text-[12px]">95% have this trait </span>
                  </div>
                  <div className="linear-property gap-y-[10px] py-5 px-2 w-[200px] flex flex-col justify-center items-center">
                    <span className="text-gradient text-[14px] font-[500]">
                      Background
                    </span>
                    <span className="text-[12px] font-[500]">
                      Dark Green Gradient
                    </span>
                    <span className="text-[12px]">95% have this trait </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Heading className="mt-[70px]" alignItems="start">
          MORE FROM THE COLLECTION
        </Heading>
        <CardList></CardList>
        <Footer></Footer>
      </PageContainer>
    </CategoryDetailStyles>
  );
};

export default CategoryDetail;
