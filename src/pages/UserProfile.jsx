import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PageContainer from "../components/layout/PageContainer";
import AuthUser from "../config/AuthUser";
import { Tab } from "@headlessui/react";
import styled from "styled-components";
import Footer from "../components/layout/Footer";
import verify from "../assets/outside/verify.png";
import axios from "axios";
import { baseURL } from "../config/getConfig";
import Card from "../components/layout/Card";
import avatarUserImage from "../assets/userImages/user.jpg";
import coverUserImage from "../assets/userImages/cover.jpg";
import CardCollection from "../components/layout/CardCollection";

const ListData = [
  {
    id: 1,
    title: "Collected",
  },
  {
    id: 2,
    title: "Created",
  },
  {
    id: 3,
    title: "Collection",
  },
];

const ProfileStyles = styled.div`
  .text-gradient {
    background: linear-gradient(180deg, #ddb9ff 0%, #a749f8 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }
`;

const UserProfile = () => {
  const { token } = AuthUser();
  const [myCollection, setMyCollection] = useState([]);
  const [nfts, setNfts] = useState([]);
  const [user, setUser] = useState([]);
  const { slug } = useParams();
  const navigate = useNavigate();
  let params = new URLSearchParams(slug);
  let slugValue = params.get("query");

  useEffect(() => {
    (async () => {
      const res = await axios.get(`${baseURL}/api/users/${slugValue}`);
      const resNft = await axios.get(
        `${baseURL}/api/nfts?includeOwner=1&includeCreator=1`
      );
      setUser(res?.data?.user);
      setNfts(resNft?.data.nfts);
      console.log(res?.data?.user);
      console.log("resNft?.data.nfts: ", resNft?.data.nfts);
    })();
  }, [slugValue]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!token) return navigate("/error");

  return (
    <ProfileStyles className="body-style">
      {user?.id ? (
        <div>
          <div className="relative">
            <form className="relative">
              <div className="cover w-full h-[380px]">
                <label className="mt-5 cursor-pointer flex items-center justify-center bg-[#2c2c35] w-full h-[380px] relative overflow-hidden flex-col ">
                  <>
                    {user?.cover === "cover.jpg" ? (
                      <img
                        src={coverUserImage}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <img
                        src={`${baseURL}/storage/coverImages/${user?.cover}`}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    )}
                  </>
                </label>
              </div>
              <div className="relative -top-[60px] left-[100px] flex gap-x-10">
                <div className="logo w-[180px] h-[180px">
                  <label className="mt-5 cursor-pointer flex items-center justify-center  bg-[#2c2c35] w-[180px] h-[180px] rounded-full relative">
                    <>
                      {user?.avatar === "user.jpg" ? (
                        <img
                          src={avatarUserImage}
                          alt=""
                          className="w-[180px] h-[180px] object-cover rounded-full"
                        />
                      ) : (
                        <img
                          src={`${baseURL}/storage/avatarImages/${user?.avatar}`}
                          alt=""
                          className="w-[180px] h-[180px] object-cover rounded-full"
                        />
                      )}
                    </>
                  </label>
                </div>
                <div className="mt-[80px] flex flex-col">
                  <div className="flex mt-2 gap-x-2 items-center">
                    <span className="text-[20px] font-bold">{user?.name}</span>
                    <img src={verify} alt="" className="w-4 h-4 object-cover" />
                  </div>
                  <div className="w-[559px]">
                    <p className="text-[14px] font-[300] mt-2 leading-[24px]">
                      First Videogame that combines console and P&E🔥 Developed
                      by AAA gaming Vets 🎮 Seen on Playstation, XBOX, IGN and
                      Steam. Incubated by @SeedifyFund🚀
                    </p>
                  </div>
                  <div className="flex mt-5 gap-x-[30px]">
                    <span>10,5k followers</span>
                    <span>150 following</span>
                    <span>34 images</span>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <PageContainer>
            <div className="">
              <Tab.Group>
                <Tab.List className="flex gap-x-[30px]">
                  {ListData?.length > 0 &&
                    ListData.map((item) => (
                      <Tab key={item.id}>
                        {({ selected }) => (
                          <span
                            className={`w-[105px] h-[49px] font-[500] cursor-pointer rounded-lg ${
                              selected ? "text-gradient" : ""
                            }`}
                          >
                            {item.title}
                          </span>
                        )}
                      </Tab>
                    ))}
                </Tab.List>
                <div className="mt-4 mb-[70px] w-full h-[1px] bg-purple-500"></div>
                <Tab.Panels>
                  <Tab.Panel>
                    <div className="grid grid-cols-4 gap-x-[50px] gap-y-[70px]">
                      {nfts?.length > 0 &&
                        nfts
                          .filter(
                            (item) =>
                              item.owner_id === parseInt(slugValue) &&
                              item.owner_id !== item.creator_id
                          )
                          .map((category) => (
                            <Card
                              key={category.id}
                              srcTop={`${baseURL}/storage/nftImages/${category.url_image_nft}`}
                              name={category.name}
                              status={category?.status}
                              owner={category.owner.name}
                              price={category?.price}
                              remaining={category?.updated_at}
                              crypto={category?.crypto_id}
                              id={category?.id}
                            />
                          ))}
                    </div>
                  </Tab.Panel>
                  {/* Created */}
                  <Tab.Panel>
                    <div className="grid grid-cols-4 gap-x-[50px] gap-y-[70px]">
                      {nfts?.length > 0 &&
                        nfts
                          .filter(
                            (item) => parseInt(slugValue) === item.creator_id
                          )
                          .map((category) => (
                            <Card
                              key={category.id}
                              srcTop={`${baseURL}/storage/nftImages/${category.url_image_nft}`}
                              status={category?.status}
                              name={category.name}
                              owner={category.owner.name}
                              price={category?.price}
                              remaining={category?.updated_at}
                              crypto={category?.crypto_id}
                              id={category?.id}
                            />
                          ))}
                    </div>
                  </Tab.Panel>
                  <Tab.Panel>
                    <div className="grid grid-cols-3 gap-x-[40px] gap-y-[80px]">
                      {myCollection?.length > 0 &&
                        myCollection.map((card) => (
                          <CardCollection
                            id={card?.id}
                            key={card?.id}
                            logo={card?.url_image_logo}
                            banner={card?.url_image_banner}
                            name={card?.name}
                          />
                        ))}
                    </div>
                  </Tab.Panel>
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
    </ProfileStyles>
  );
};

export default UserProfile;
