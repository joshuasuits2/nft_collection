import React, { useState, useEffect, Fragment } from "react";
import { Tab } from "@headlessui/react";
import PageContainer from "../components/layout/PageContainer";
import styled from "styled-components";
import verify from "../assets/outside/verify.png";
import discord from "../assets/collection-images/discord.png";
import facebook from "../assets/collection-images/facebook.png";
import instagram from "../assets/collection-images/instagram.png";
import telegram from "../assets/collection-images/telegram.png";
import twitter from "../assets/collection-images/twitter.png";
import share from "../assets/collection-images/share.png";
import ethereum from "../assets/outside/ethereum.png";
import Footer from "../components/layout/Footer";
import { useParams } from "react-router-dom";
import axios from "axios";
import AuthUser from "../config/AuthUser";
import { baseURL } from "../config/getConfig";
import WalletsPage from "./WalletsPage";
import Card from "../components/layout/Card";

const DetailCollectionStyles = styled.div`
  .text-gradient {
    background: linear-gradient(180deg, #ddb9ff 0%, #a749f8 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

const DetailCollection = () => {
  const { slug } = useParams();
  const [collection, setCollection] = useState();
  const [nfts, setNfts] = useState();
  let params = new URLSearchParams(slug);
  let slugValue = params.get("query");
  const { token } = AuthUser();
  useEffect(() => {
    (async () => {
      try {
        const collectionItem = await axios.get(
          `${baseURL}/api/collections?includeCreator=1`
        );
        const list = collectionItem?.data.collections;
        const item = list.find((item) => item.id === parseInt(slugValue));
        setCollection(item);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [slugValue]);

  useEffect(() => {
    (async () => {
      try {
        const nftsItem = await axios.get(
          `${baseURL}/api/nfts?collectionId=${slugValue}&includeOwner=1`
        );
        const list = nftsItem?.data.nfts;
        console.log(list);
        setNfts(list);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [slugValue]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!token) return <WalletsPage></WalletsPage>;
  return (
    <DetailCollectionStyles className="body-style">
      {collection?.url_image_banner ? (
        <div>
          <img
            src={`${baseURL}/storage/bannerImages/${collection?.url_image_banner}`}
            alt=""
            className="w-full h-[380px] object-cover"
          />
          <PageContainer>
            <div className="flex justify-between">
              <div className="flex-[8] flex gap-10">
                <img
                  src={`${baseURL}/storage/logoImages/${collection?.url_image_logo}`}
                  alt=""
                  className="w-[180px] h-[180px] rounded-full translate-y-[-52px]"
                />
                <div>
                  <div className="flex items-center gap-3 mt-4 mb-3">
                    <span>{collection?.name}</span>
                    <img src={verify} alt="" className="w-4 h-4 object-cover" />
                  </div>
                  <span className="text-[14px] font-normal mt-4">
                    <strong className="text-[14px] font-bold">By {""}</strong>
                    {collection?.creator.name}
                  </span>
                  <p className="mt-3 leading-6 font-normal text-[14px] tracking-[0.02rem]">
                    {collection?.description}
                  </p>
                  <div className="mt-5 text-4 font-bold flex gap-x-[25px]">
                    <div className="flex items-center">
                      <span className="mr-2">Total volume: </span>
                      <img
                        src={ethereum}
                        alt=""
                        className="w-4 h-4 object-cover"
                      />
                      <span>
                        {nfts
                          ?.reduce((sum, nft) => {
                            return sum + parseFloat(nft?.price);
                          }, 0)
                          .toFixed(3)}{" "}
                        ETH
                      </span>
                    </div>
                    <span className="">Floor Price: 0.02</span>
                    <span className="">Best Offer: 0.02</span>
                  </div>
                </div>
              </div>
              <div className="flex-[4] flex gap-x-4 mt-[30px] right-0 justify-end">
                <img src={twitter} alt="" className="w-5 h-5 object-cover" />
                <img src={instagram} alt="" className="w-5 h-5 object-cover" />
                <img src={facebook} alt="" className="w-5 h-5 object-cover" />
                <img src={telegram} alt="" className="w-5 h-5 object-cover" />
                <img src={discord} alt="" className="w-5 h-5 object-cover" />
                <img src={share} alt="" className="w-5 h-5 object-cover" />
              </div>
            </div>
            <div className="mt-[65px]">
              <Tab.Group>
                <Tab.List className="flex gap-x-[30px] text-4 font-bold">
                  <Tab as={Fragment} style={{ cursor: "pointer" }}>
                    {({ selected }) => (
                      <span
                        className={
                          selected ? "text-gradient border-none" : "text-white"
                        }
                      >
                        Items
                      </span>
                    )}
                  </Tab>
                  <Tab as={Fragment} style={{ cursor: "pointer" }}>
                    {({ selected }) => (
                      <span
                        className={
                          selected ? "text-gradient border-none" : "text-white"
                        }
                      >
                        Analytics
                      </span>
                    )}
                  </Tab>
                </Tab.List>
                <div className="w-full h-[1px] bg-purple-500 mt-4 mb-[70px]"></div>
                <Tab.Panels>
                  <Tab.Panel>
                    <div className="grid grid-cols-4 gap-x-[50px] gap-y-[70px]">
                      {nfts?.length > 0 &&
                        nfts
                          .sort(function (a, b) {
                            var keyA = new Date(a.updated_at),
                              keyB = new Date(b.updated_at);
                            if (keyA < keyB) return 1;
                            if (keyA > keyB) return -1;
                            return 0;
                          })
                          .filter((item, index) => index < 8)
                          .map((category) => (
                            <Card
                              key={category.id}
                              srcTop={`${baseURL}/storage/nftImages/${category.url_image_nft}`}
                              name={category.name}
                              owner={category.owner.name}
                              price={category.price}
                              remaining={category.updated_at}
                              crypto={category.crypto_id}
                              id={category.id}
                              status={category.status}
                              coin={category.crypto}
                            />
                          ))}
                    </div>
                  </Tab.Panel>
                  <Tab.Panel>No any analytic</Tab.Panel>
                </Tab.Panels>
              </Tab.Group>
            </div>
            <Footer></Footer>
          </PageContainer>
        </div>
      ) : (
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="spinner">
            <div className="double-bounce1"></div>
            <div className="double-bounce2"></div>
          </div>
        </div>
      )}
    </DetailCollectionStyles>
  );
};

export default DetailCollection;
