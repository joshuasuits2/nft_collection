import React from "react";
import { useNavigate } from "react-router-dom";
import PageContainer from "../components/layout/PageContainer";
import AuthUser from "../config/AuthUser";
import bannerCollection from ".././assets/collection/bannerCollection.png";
import avaCollection from ".././assets/collection/avatarcollection.png";
import { Tab } from "@headlessui/react";
import styled from "styled-components";
import CardList from "../components/layout/CardList";
import { ListCategory } from "../fakeAPI/Categories";
import Footer from "../components/layout/Footer";

const ProfileStyles = styled.div`
  .text-gradient {
    background: linear-gradient(180deg, #ddb9ff 0%, #a749f8 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }
`;

const Profile = () => {
  const { token } = AuthUser();
  const navigate = useNavigate();
  if (!token) return navigate("/error");
  return (
    <ProfileStyles className="body-style">
      <div className="relative">
        <div className="banner w-full h-[380px]">
          <img
            src={bannerCollection}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative -top-[60px] left-[100px] flex gap-x-10">
          <div className="logo w-[180px] h-[180px] ">
            <img
              src={avaCollection}
              alt=""
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div className="mt-[80px] flex flex-col">
            <span className="">0xc4c16a45...b21a</span>
            <span className="text-[20px] font-bold">Takashi Murakami</span>
            <div className="w-[559px]">
              <p className="text-[14px] font-[300] mt-2 leading-[21px]">
                First Videogame that combines console and P&E🔥 Developed by AAA
                gaming Vets 🎮 Seen on Playstation, XBOX, IGN and Steam.
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
              <span>0.0016 ETH</span>
            </div>
            <button className="mt-4 inline-flex items-center justify-center px-8 py-4 font-sans font-semibold tracking-wide text-white bg-[#c68afc] rounded-lg h-[50px]">
              Deposite
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
    </ProfileStyles>
  );
};

export default Profile;