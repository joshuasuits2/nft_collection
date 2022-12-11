import React, { useEffect, useState } from "react";
import PageContainer from "../components/layout/PageContainer";
import styled from "styled-components";
import Footer from "../components/layout/Footer";
import Heading from "../components/layout/Heading";
import CardList from "../components/layout/CardList";
import verify from "../assets/outside/verify.png";
import avatar from "../assets/avatar/Ellipse 378.png";
import MeeCat101 from "../assets/collection/MeeCat101.png";

import { ListCategory } from "../fakeAPI/Categories";
import { useParams } from "react-router-dom";
import EyeIcon from "../assets/icons/EyeIcon";
import HeartIcon from "../assets/icons/HeartIcon";
import axios from "axios";
import { baseURL } from "../config/getConfig";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

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
`;
const CategoryDetail = () => {
  const { slug } = useParams();
  const [nft, setNft] = useState({ item: "", name: "" });
  let params = new URLSearchParams(slug);
  let slugID = params.get("search");

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(`${baseURL}/api/nfts/${slugID}`);
        const info = await axios.get(`${baseURL}/api/nfts?includeOwner=1`);
        const list = info?.data.nfts;
        console.log(list);
        const owner = list?.filter((item) => item.id === parseInt(slugID));
        setNft((prevState) => ({
          ...prevState,
          item: res?.data?.nft,
          name: owner[0]?.owner.name,
        }));
      } catch (error) {
        console.log(error);
      }
    })();
  }, [slugID]);

  if (!slugID) return <PageContainer>Not found!...</PageContainer>;
  return (
    <CategoryDetailStyles className="body-style">
      <PageContainer>
        {nft?.item?.url_image_nft ? (
          <div className="flex gap-x-[100px]">
            <div className="flex-[50%] flex flex-col">
              <div className="card-top relative z-10">
                <div className="background-item-blur h-[500px] ">
                  <img
                    src={`${baseURL}/${nft?.item?.url_image_nft}`}
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
                  <span className="name-linear font-[600]">{nft?.name}</span>
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
                    <EyeIcon></EyeIcon>
                    <span>2,7k view</span>
                  </div>
                  <div className="like flex items-center gap-x-[10px] text-[16px] font-[400]">
                    <HeartIcon></HeartIcon>
                    <span>34 favorites</span>
                  </div>
                </div>
                <span className="font-bold mt-[30px]">Description</span>
                <p className="mt-[30px] text-[15px] font-[300] leading-[35px]">
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
                      <span className="font-[600]">Current Owner</span>
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
                      <span className="font-[600]">Collection</span>
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
                            <span>2</span>
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
                            <span>1</span>
                          </div>
                          <div className="sec linear-timing flex items-center">
                            6
                          </div>
                        </div>
                        <div className="text">hour</div>
                      </div>
                      <div className="minutes flex flex-col gap-y-3 items-center">
                        <div className="number flex gap-x-[5px]">
                          <div className="pri linear-timing flex items-center">
                            <span>3</span>
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
        ) : (
          <div className="flex gap-x-[100px]">
            <div className="flex-[50%] flex flex-col">
              <div className="card-top relative z-10">
                <SkeletonTheme baseColor="#202020" highlightColor="#444">
                  <Skeleton
                    width={475}
                    height={500}
                    style={{ borderRadius: "16px" }}
                  />
                </SkeletonTheme>
              </div>
            </div>
          </div>
        )}
        <Heading className="mt-[70px]" alignItems="start">
          MORE FROM THE COLLECTION
        </Heading>
        <CardList data={ListCategory}></CardList>
        <Footer></Footer>
      </PageContainer>
    </CategoryDetailStyles>
  );
};

export default CategoryDetail;
