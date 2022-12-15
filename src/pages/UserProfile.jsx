import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PageContainer from "../components/layout/PageContainer";
import AuthUser from "../config/AuthUser";
import avatar_default_1 from ".././assets/avatar/avatar_default_1.png";
import cover_default from ".././assets/avatar/cover_default.png";
import { Tab } from "@headlessui/react";
import { useAuthentication } from "../config/auth-context";
import useAccountBalance from "../hooks/useAccountBalance";
import styled from "styled-components";
import Footer from "../components/layout/Footer";
import Deposit from "../components/modal/Deposit";
import verify from "../assets/outside/verify.png";
import { useEffect } from "react";
import axios from "axios";
import { baseURL } from "../config/getConfig";
import Card from "../components/layout/Card";

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
    title: "Liked",
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
  const { userId, accountBalance, setAccountBalance } = useAccountBalance();
  const { userName } = useAuthentication();
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [nfts, setNfts] = useState([]);

  const displayTokenUser = `0x${token?.slice(0, 10).toLowerCase()}...${token
    ?.slice(40, 44)
    .toLowerCase()}`;

  useEffect(() => {
    (async () => {
      const res = await axios.get(`${baseURL}/api/nfts?owner_id=${userId}`);
      setNfts(res.data.nfts);
    })();
  }, [userId]);

  if (!token) return navigate("/error");

  return (
    <ProfileStyles className="body-style">
      {userId ? (
        <div>
          <div className="relative">
            <div className="banner w-full h-[380px]">
              <img
                src={cover_default}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative -top-[60px] left-[100px] flex gap-x-10">
              <div className="logo w-[180px] h-[180px] ">
                <img
                  src={avatar_default_1}
                  alt=""
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div className="mt-[80px] flex flex-col">
                <span className="">{displayTokenUser}</span>
                <div className="flex mt-2 gap-x-2 items-center">
                  <span className="text-[20px] font-bold">{userName}</span>
                  <img src={verify} alt="" className="w-4 h-4 object-cover" />
                </div>
                <div className="w-[559px]">
                  <p className="text-[14px] font-[300] mt-2 leading-[24px]">
                    First Videogame that combines console and P&E🔥 Developed by
                    AAA gaming Vets 🎮 Seen on Playstation, XBOX, IGN and Steam.
                    Incubated by @SeedifyFund🚀
                  </p>
                </div>
                <div className="flex mt-5 gap-x-[30px]">
                  <span>10,5k followers</span>
                  <span>150 following</span>
                  <span>34 images</span>
                </div>
              </div>
              <div className="mt-[100px] ml-[200px] flex flex-col items-start">
                <div className="flex gap-x-4 items-center">
                  <span className="text-[16px] font-[600] text-[#c68afc]">
                    Account balance:
                  </span>
                  <span>{accountBalance.balance}</span>
                  <span className="font-[500]">ETH</span>
                </div>
                <button
                  onClick={() => setShowModal(true)}
                  className="mt-4 inline-flex items-center justify-center px-8 py-4 font-sans font-semibold tracking-wide text-white bg-[#c68afc] rounded-lg h-[50px]"
                >
                  Add Money
                </button>
              </div>
            </div>
          </div>
          <PageContainer>
            <div className="">
              <Tab.Group>
                <Tab.List className="flex gap-x-[30px]">
                  {ListData.length > 0 &&
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
                          .filter((item) => item.owner_id !== item.creator_id)
                          .map((category) => (
                            <Card
                              key={category.id}
                              srcTop={`${baseURL}/storage/nftImages/${category.url_image_nft}`}
                              name={category.name}
                              owner={userName}
                              price={category?.price}
                              remaining={category?.updated_at}
                              crypto={category?.crypto_id}
                              id={category?.id}
                            />
                          ))}
                    </div>
                  </Tab.Panel>
                  <Tab.Panel>
                    <div className="grid grid-cols-4 gap-x-[50px] gap-y-[70px]">
                      {nfts?.length > 0 &&
                        nfts
                          .filter((item) => item.owner_id === item.creator_id)
                          .map((category) => (
                            <Card
                              key={category.id}
                              srcTop={`${baseURL}/storage/nftImages/${category.url_image_nft}`}
                              name={category.name}
                              owner={userName}
                              price={category?.price}
                              remaining={category?.updated_at}
                              crypto={category?.crypto_id}
                              id={category?.id}
                            />
                          ))}
                    </div>
                  </Tab.Panel>
                  <Tab.Panel></Tab.Panel>
                </Tab.Panels>
              </Tab.Group>
            </div>
            <Footer></Footer>
          </PageContainer>
          <Deposit
            open={showModal}
            accountBalance={accountBalance}
            handleAccountBalanceChange={(exchange) => {
              console.log(accountBalance);
              setAccountBalance({
                ...accountBalance,
                balance: (
                  parseFloat(accountBalance.balance) + parseFloat(exchange)
                ).toFixed(4),
              });
            }}
            handleClose={() => setShowModal(false)}
          />
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
