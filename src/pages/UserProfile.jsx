import React, { useCallback, useRef } from "react";
import { useNavigate } from "react-router-dom";
import PageContainer from "../components/layout/PageContainer";
import AuthUser from "../config/AuthUser";
import avatar_default_1 from ".././assets/avatar/avatar_default_1.png";
import cover_default from ".././assets/avatar/cover_default.png";
import { Tab } from "@headlessui/react";
import styled from "styled-components";
import CardList from "../components/layout/CardList";
import { ListCategory } from "../fakeAPI/Categories";
import Footer from "../components/layout/Footer";
import useAuth from "../hooks/useAuth";
import Deposit from "../components/modal/Deposit";
import { useState } from "react";
import { useEffect } from "react";
import verify from "../assets/outside/verify.png";
import { useAuthentication } from "../config/auth-context";

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
  const { token, http } = AuthUser();
  const { userId, userName } = useAuthentication();
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [accountBalance, setAccountBalance] = useState({});

  const handleFetchData = useRef();

  handleFetchData.current = async () => {
    try {
      if (userId) {
        const res = await http.get(`/account_balances?user_id=${userId}`);
        setAccountBalance(res?.data?.accountBalances[0]);
        console.log(res?.data?.accountBalances[0]);
      }
    } catch (error) {}
  };

  const handleFindQuery = () => {
    handleFetchData.current();
  };

  useEffect(() => {
    handleFindQuery();
  }, [userId]);

  const displayTokenUser = `0x${token?.slice(0, 10).toLowerCase()}...${token
    ?.slice(40, 44)
    .toLowerCase()}`;

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
              <div className="mt-[100px] ml-[200px] flex flex-col ">
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
                  <Tab>
                    {({ selected }) => (
                      <span
                        className={`w-[105px] h-[49px] font-[500] cursor-pointer rounded-lg ${
                          selected ? "text-gradient" : ""
                        }`}
                      >
                        Colleted 3.6k
                      </span>
                    )}
                  </Tab>
                  <Tab>
                    {({ selected }) => (
                      <span
                        className={`w-[105px] h-[49px] font-[500] cursor-pointer rounded-lg ${
                          selected ? "text-gradient" : ""
                        }`}
                      >
                        Created 28.5k
                      </span>
                    )}
                  </Tab>{" "}
                  <Tab>
                    {({ selected }) => (
                      <span
                        className={`w-[105px] h-[49px] font-[500] cursor-pointer rounded-lg ${
                          selected ? "text-gradient" : ""
                        }`}
                      >
                        Favorited
                      </span>
                    )}
                  </Tab>{" "}
                  <Tab>
                    {({ selected }) => (
                      <span
                        className={`w-[105px] h-[49px] font-[500] cursor-pointer rounded-lg ${
                          selected ? "text-gradient" : ""
                        }`}
                      >
                        Activity
                      </span>
                    )}
                  </Tab>
                </Tab.List>
                <div className="mt-4 mb-[70px] w-full h-[1px] bg-purple-500"></div>
                <Tab.Panels>
                  <Tab.Panel>
                    <CardList data={ListCategory}></CardList>
                    <CardList data={ListCategory}></CardList>
                  </Tab.Panel>
                  <Tab.Panel>
                    <CardList data={ListCategory}></CardList>
                    <CardList data={ListCategory}></CardList>
                  </Tab.Panel>
                  <Tab.Panel>
                    <CardList data={ListCategory}></CardList>
                    <CardList data={ListCategory}></CardList>
                  </Tab.Panel>
                  <Tab.Panel>
                    <CardList data={ListCategory}></CardList>
                    <CardList data={ListCategory}></CardList>
                  </Tab.Panel>
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
