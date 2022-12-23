import axios from "axios";
import React, { useState } from "react";
import { baseURL } from "../../config/getConfig";
import useAccountBalance from "../../hooks/useAccountBalance";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const CheckStyles = styled.div`
  label {
    position: relative;
    height: 36px;
    width: 36px;
    display: inline-block;
    border: 4px solid rgba(255, 255, 255, 0.2);
    border-left-color: #4df6a1;
    border-radius: 50%;
    animation: rotate 1s linear infinite;
  }
  .checked-label-active {
    animation: none;
    border-color: #4df6a1;
    transition: border 0.5s ease-out;
  }

  label .check-icon {
    position: relative;
  }
  .checked-icon-label-active {
    animation: none;
    border-color: #4df6a1;
    transition: border 0.5s ease-out;
  }

  label .check-icon:after {
    content: "";
    height: 16px;
    width: 10px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-130%, -22%) scaleX(-1) rotate(135deg);
    border-top: 3.5px solid #4df6a1;
    border-right: 3.5px solid #4df6a1;
    transform-origin: left top;
    animation: check-icon 1s ease;
  }
  @keyframes rotate {
    50% {
      border-left-color: #6d82f8;
    }
    75% {
      border-left-color: #fd8bd2;
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes check-icon {
    0% {
      height: 0;
      width: 0;
      opacity: 1;
    }
    20% {
      height: 0;
      width: 10px;
      opacity: 1;
    }
    40% {
      height: 16px;
      width: 10px;
      opacity: 1;
    }
    100% {
      height: 16px;
      width: 10px;
      opacity: 1;
    }
  }
`;

const FormSign = ({
  token,
  nftInfoDetail,
  handleSetConfirmBtn = () => {},
  ...props
}) => {
  const [signBtn, setSignBtn] = useState(false);
  const [disableBtn, setDisableBtn] = useState(false);
  const { accountBalance, userId } = useAccountBalance();
  const [checkSign, setCheckSign] = useState(false);
  const navigate = useNavigate();
  let remainBalance = (
    accountBalance?.balance - parseFloat(nftInfoDetail?.price)
  ).toFixed(4);

  const handleComplete = (e) => {
    e.preventDefault();
    axios
      .post(
        `${baseURL}/api/transactions`,
        {
          buyer_id: userId,
          seller_id: nftInfoDetail.owner_id,
          nft_id: nftInfoDetail.id,
          date: new Date().toISOString().slice(0, 10),
          crypto_id: nftInfoDetail.crypto_id,
          price: parseFloat(nftInfoDetail.price),
        },
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        toast("🦄 Successful transaction!", {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setTimeout(() => {
          navigate("/profile");
        }, 2000);
      })
      .catch((error) => console.log(error));
  };
  const handleDisableBtn = () => {
    setDisableBtn(true);
  };
  return (
    <div>
      {signBtn === false ? (
        <div className="flex flex-col transition-all duration-500">
          <span
            className="top-5 left-5 absolute cursor-pointer"
            onClick={() => {
              setCheckSign(false);
              handleSetConfirmBtn();
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              className="bi bi-chevron-left"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
              />
            </svg>
          </span>
          <span className="font-[700] tracking-normal text-[18px] text-center">
            Complete Checkout
          </span>
          <div className="h-[1px] mt-3 w-full bg-gray-200"></div>
          <div className="mt-5 text-[16px] flex flex-col text-left">
            <span>To complete your purchase, follow these step:</span>
            <CheckStyles className="flex gap-x-4 items-center mt-5 w-full font-[600] text-[16px] px-5 py-4 border border-solid  border-gray-200 cursor-pointer ">
              <label
                className={`${
                  checkSign === true ? "checked-label-active block" : "hidden"
                }`}
              >
                <div
                  className={`w-9 h-9 rounded-full check-icon ${
                    checkSign === true
                      ? "checked-icon-label-active block"
                      : "hidden"
                  }`}
                ></div>
              </label>
              <span>Sign message</span>
            </CheckStyles>
            <div className="w-full font-[600] text-[14px] p-5 border border-solid  border-gray-200 text-gray-500 border-t-transparent ">
              <span>Sign a message using your wallet to continue</span>
            </div>
          </div>
          <button
            onClick={() => {
              setCheckSign(true);
              setTimeout(() => {
                setSignBtn(true);
              }, 1200);
            }}
            className="mt-5 inline-flex items-center justify-center px-8 py-4 font-sans font-semibold tracking-wide text-white bg-[#c084fc] rounded-lg mx-auto w-[300px] [h-[53px] active:bg-purple-300"
          >
            Sign
          </button>
        </div>
      ) : (
        <form
          className="flex flex-col transition-all duration-500"
          onSubmit={handleComplete}
        >
          <span
            className="top-5 left-5 absolute cursor-pointer"
            onClick={() => {
              setCheckSign(false);
              setSignBtn(false);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              className="bi bi-chevron-left"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
              />
            </svg>
          </span>
          <span className="font-[700] tracking-normal text-[18px] text-center">
            Complete Checkout
          </span>
          <div className="h-[1px] mt-3 w-full bg-gray-200"></div>
          <div className="flex flex-col items-end justify-center py-3 border-b-[1px] border-dashed">
            <div className="w-full flex justify-between items-center">
              <span className="font-[600] text-[18px]">My balance:</span>
              <span className="font-[600] text-[20px] text-[#5f6368]">
                {accountBalance?.balance} ETH
              </span>
            </div>

            <div className="mt-5 flex w-full justify-between">
              <div className="flex gap-3 text-[15px] tracking-normal">
                <div className="w-[70px] h-[70px]">
                  <img
                    src={`${baseURL}/storage/nftImages/${nftInfoDetail?.url_image_nft}`}
                    alt=""
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-[600] text-gradient">
                    Collection: {nftInfoDetail?.collection.name}
                  </span>
                  <span className="mt-2">
                    <span className="font-[600]"> Owner:</span>{" "}
                    {nftInfoDetail?.owner.name}
                  </span>
                </div>
              </div>
              <span className="text-end">{nftInfoDetail?.price} ETH</span>
            </div>
          </div>
          <div className="mt-5 flex w-full justify-between items-center">
            <span className="font-[500]">New balance</span>
            {remainBalance < 0 && (
              <span className="font-[400] text-[14px] text-red-500">
                Can not buy!
              </span>
            )}
            <span className="text-end">{remainBalance} ETH</span>
          </div>

          <button
            type="submit"
            onClick={handleDisableBtn}
            className={`mt-5 inline-flex items-center justify-center px-8 py-4 font-sans font-semibold tracking-wide text-white bg-[#c084fc] rounded-lg mx-auto w-[300px] h-[53px] active:bg-purple-300 ${
              disableBtn === true || parseFloat(remainBalance) < 0
                ? "pointer-events-none bg-purple-300"
                : ""
            }`}
          >
            Complete
          </button>
        </form>
      )}
    </div>
  );
};

export default FormSign;
