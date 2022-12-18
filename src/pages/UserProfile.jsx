import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PageContainer from "../components/layout/PageContainer";
import AuthUser from "../config/AuthUser";
import { Tab } from "@headlessui/react";
import { useAuthentication } from "../config/auth-context";
import useAccountBalance from "../hooks/useAccountBalance";
import styled from "styled-components";
import Footer from "../components/layout/Footer";
import Deposit from "../components/modal/Deposit";
import verify from "../assets/outside/verify.png";
import axios from "axios";
import { baseURL } from "../config/getConfig";
import Card from "../components/layout/Card";
import { useForm } from "react-hook-form";
import useImageUpload from "../hooks/useImageUpload";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import avatarUserImage from "../assets/userImages/user.jpg";
import coverUserImage from "../assets/userImages/cover.jpg";

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
    title: "My Collection",
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
  const { handleSubmit, register } = useForm({});
  const navigate = useNavigate();
  const { token } = AuthUser();
  const { userId, accountBalance, setAccountBalance } = useAccountBalance();
  const [statusBtn, setStatusBtn] = useState(true);
  const { userImage, userName } = useAuthentication();
  const [showModal, setShowModal] = useState(false);
  const [nfts, setNfts] = useState([]);

  const { image: cover, handleSelectImage: handleSelectCover } =
    useImageUpload();
  const { image: avatar, handleSelectImage: handleSelectAvatar } =
    useImageUpload();

  const displayTokenUser = `0x${token?.slice(0, 10).toLowerCase()}...${token
    ?.slice(40, 44)
    .toLowerCase()}`;

  useEffect(() => {
    (async () => {
      const res = await axios.get(`${baseURL}/api/nfts?includeOwner=1`);
      setNfts(res?.data?.nfts);
      console.log(res?.data?.nfts);
    })();
  }, [userId]);

  const onSubmit = async (values) => {
    console.log(values);
    console.log(avatar);
    console.log(cover);
    console.log(`${baseURL}/api/users/${userId}?_method=PUT`);
    await axios
      .post(
        `${baseURL}/api/users/${userId}?_method=PUT`,
        {
          avatar: avatar,
          cover: cover,
        },
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "multipart/form-data",
            authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        console.log(res);
        toast.success("Update Successfully!", {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!token) return navigate("/error");

  return (
    <ProfileStyles className="body-style">
      {userId ? (
        <div>
          <div className="relative">
            <form className="relative" onSubmit={handleSubmit(onSubmit)}>
              <div className="cover w-full h-[380px]">
                <div
                  className={`w-full h-[380px] absolute z-[10] ${
                    statusBtn === true ? "" : "hidden"
                  }`}
                ></div>
                <label className="mt-5 cursor-pointer flex items-center justify-center bg-[#2c2c35] w-full h-[380px] relative overflow-hidden flex-col ">
                  <input
                    type="file"
                    className="hidden-input"
                    {...register("cover")}
                    accept="image/*"
                    onChange={handleSelectCover}
                  />
                  {!cover ? (
                    <>
                      {userImage.cover === "cover.jpg" ? (
                        <img
                          src={coverUserImage}
                          alt=""
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <img
                          src={`${baseURL}/storage/coverImages/${userImage.cover}`}
                          alt=""
                          className="w-full h-full object-cover"
                        />
                      )}
                    </>
                  ) : (
                    <div className="w-full h-full">
                      <img
                        src={cover.preview}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                </label>
              </div>
              <div className="relative -top-[60px] left-[100px] flex gap-x-10">
                <div className="logo w-[180px] h-[180px">
                  <div
                    className={`w-[180px] h-[180px] absolute top-[20px] rounded-full left-0 z-[10] ${
                      statusBtn === true ? "" : "hidden"
                    }`}
                  ></div>
                  <label className="mt-5 cursor-pointer flex items-center justify-center  bg-[#2c2c35] w-[180px] h-[180px] rounded-full relative">
                    <input
                      type="file"
                      className="hidden-input"
                      {...register("avatar")}
                      accept="image/*"
                      onChange={handleSelectAvatar}
                    />
                    {!avatar ? (
                      <>
                        {userImage.avatar === "user.jpg" ? (
                          <img
                            src={avatarUserImage}
                            alt=""
                            className="w-[180px] h-[180px] object-cover rounded-full"
                          />
                        ) : (
                          <img
                            src={`${baseURL}/storage/avatarImages/${userImage.avatar}`}
                            alt=""
                            className="w-[180px] h-[180px] object-cover rounded-full"
                          />
                        )}
                      </>
                    ) : (
                      <div className="w-[180px] h-[180px] ">
                        <img
                          src={avatar?.preview}
                          alt=""
                          className="w-full h-full object-cover rounded-full"
                        />
                      </div>
                    )}
                  </label>
                </div>
                <div className="mt-[80px] flex flex-col">
                  <span className="">{displayTokenUser}</span>
                  <div className="flex mt-2 gap-x-2 items-center">
                    <span className="text-[20px] font-bold">{userName}</span>
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
              <button
                type={`${statusBtn === false ? "button" : "submit"}`}
                onClick={() => setStatusBtn(!statusBtn)}
                className={`absolute left-[100px] bottom-[50px] inline-flex items-center justify-center text-[14px] py-2 font-[600] w-[180px]  ${
                  statusBtn === false
                    ? "bg-[#fbff2a] text-[#141418]"
                    : "bg-[#565656] text-white"
                } rounded-lg h-[50px] w-[180px]`}
              >
                {statusBtn === false ? "Choose & save" : "Edit images"}
              </button>
            </form>
            <div className="absolute right-[100px] bottom-[150px] mt-[100px] ml-[200px] flex flex-col items-start">
              <div className="flex gap-x-4 items-center">
                <span className="text-[16px] font-[600] text-[#c68afc]">
                  Account balance:
                </span>
                <span>{accountBalance.balance}</span>
                <span className="font-[500]">ETH</span>
              </div>
              <button
                onClick={() => setShowModal(true)}
                type="button"
                className="mt-4 inline-flex items-center justify-center px-8 py-4 font-sans font-semibold tracking-wide text-white bg-[#c68afc] rounded-lg h-[50px]"
              >
                Add Money
              </button>
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
                          .filter(
                            (item) =>
                              item.owner_id === userId &&
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
                  <Tab.Panel>
                    <div className="grid grid-cols-4 gap-x-[50px] gap-y-[70px]">
                      {nfts?.length > 0 &&
                        nfts
                          .filter((item) => userId === item.creator_id)
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
                    <div className="grid grid-cols-4 gap-x-[50px] gap-y-[70px]">
                      {nfts?.length > 0 &&
                        nfts
                          .filter((item) => item.owner_id !== item.creator_id)
                          .map((category) => (
                            <Card
                              key={category.id}
                              srcTop={`${baseURL}/storage/nftImages/${category.url_image_nft}`}
                              name={category.name}
                              owner={category.owner.name}
                              price={category?.price}
                              remaining={category?.updated_at}
                              crypto={category?.crypto_id}
                              id={category?.id}
                              status={category?.status}
                            />
                          ))}
                    </div>
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
      <ToastContainer
        position="top-center"
        autoClose={800}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </ProfileStyles>
  );
};

export default UserProfile;
