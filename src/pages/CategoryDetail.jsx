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
import BuyNow from "../components/modal/BuyNow";
import PropertiesNFT from "../components/layout/PropertiesNFT";
import TimingNFT from "../components/layout/TimingNFT";
import DetailInfoNFT from "../components/layout/DetailInfoNFT";

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
  const [nft, setNft] = useState();
  const [showModal, setShowModal] = useState(false);
  const { slug } = useParams();
  let params = new URLSearchParams(slug);
  let slugValue = params.get("query");

  useEffect(() => {
    (async () => {
      try {
        const nftItem = await axios.get(`${baseURL}/api/nfts/${slugValue}`);
        setNft(nftItem.data.nft);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [slugValue]);

  if (!slugValue) return <PageContainer>Not found!...</PageContainer>;
  return (
    <CategoryDetailStyles className="body-style">
      {nft?.url_image_nft ? (
        <PageContainer>
          <div className="flex gap-x-[100px]">
            <div className="flex-[50%] flex flex-col">
              <div className="card-top relative z-10">
                <div className="background-item-blur h-[500px] containerImage">
                  <img
                    src={`${baseURL}/storage/nftImages/${nft?.url_image_nft}`}
                    alt=""
                    className="img-detail w-full h-full object-cover rounded-2xl cursor-pointer"
                  />
                </div>
              </div>
              <span className="mt-10">Details</span>
              <DetailInfoNFT></DetailInfoNFT>
            </div>
            <div className="flex-[70%]">
              <div className="desc flex flex-col">
                <div className="creator flex items-center gap-x-2">
                  <span className="name-linear font-[600]">
                    {nft?.creator.name}
                  </span>
                  <img src={verify} alt="" className="w-4 h-4 object-cover" />
                </div>
                <span className="font-bold text-[20px] mt-[10px]">
                  {nft?.name}
                </span>
                <div className="flex font-bold text-[20px] mt-[25px] items-center justify-between">
                  <div className="price px-3 h-[50px] rounded-full bg-[#FBFF2A] flex items-center justify-center text-[#000000] gap-x-2">
                    <span>{nft?.price}</span>
                    <div className="w-[64px] flex  bg-[#E7DE06] rounded-full items-center justify-center h-9">
                      {nft?.crypto.name.substring(
                        0,
                        nft?.crypto.name.indexOf(" ")
                      )}
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
                  {nft?.description}
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
                      <span className="text-[15px]">{nft?.owner.name}</span>
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
                      <span className="text-[15px]">
                        {nft?.collection.name}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="action flex gap-x-[180px] mt-[30px] justify-between">
                  <TimingNFT></TimingNFT>
                  <div className="deal  flex flex-col gap-y-5">
                    <button
                      onClick={() => setShowModal(true)}
                      className="w-[150px] h-[55px] font-[500] bg-[#FBFF2A] rounded-lg text-[#141118]"
                    >
                      Buy Now
                    </button>
                    <button className="w-[150px] h-[55px] font-[500] rounded-lg border border-solid border-white">
                      Make Offer
                    </button>
                  </div>
                </div>
                <PropertiesNFT></PropertiesNFT>
              </div>
            </div>
          </div>
          <Heading className="mt-[70px]" alignItems="start">
            MORE FROM THE COLLECTION
          </Heading>
          <CardList data={ListCategory}></CardList>
          <Footer></Footer>
          <BuyNow
            open={showModal}
            nftInfoDetail={nft}
            handleClose={() => setShowModal(false)}
          ></BuyNow>
        </PageContainer>
      ) : (
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="spinner">
            <div className="double-bounce1"></div>
            <div className="double-bounce2"></div>
          </div>
        </div>
      )}
    </CategoryDetailStyles>
  );
};

export default CategoryDetail;
