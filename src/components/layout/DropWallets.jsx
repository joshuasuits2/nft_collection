import React, { useEffect } from "react";
import styled from "styled-components";
import ReactDOM from "react-dom";
import Metamask from "../../assets/wallets/Metamask.png";
import Coinbase from "../../assets/wallets/Coinbase.png";
import Wallet_Connect from "../../assets/wallets/Wallet_Connect.png";
import Phantom from "../../assets/wallets/phantom.png";
import { Link } from "react-router-dom";

const SmallWallets = [
  {
    id: 1,
    name: "Metamask",
    img: Metamask,
  },
  {
    id: 2,
    name: "Coinbase",
    img: Coinbase,
  },
  {
    id: 3,
    name: "WalletConnect",
    img: Wallet_Connect,
  },
  {
    id: 4,
    name: " Phantom",
    img: Phantom,
  },
];

const DropWalletsStyles = styled.div`
  transition: all 0.5s ease-in-out;
  .open-modal {
    transition: all 0.5s ease-in-out;
  }
  .show-more {
    width: 199px;
    height: 51px;

    background: linear-gradient(
      88.5deg,
      rgba(235, 235, 235, 0.32) -9.43%,
      rgba(235, 235, 235, 0.5) 46.39%,
      rgba(219, 219, 219, 0.18) 107.59%
    );
    backdrop-filter: blur(50px);

    border-radius: 8px;
  }
  span.connect {
    background: linear-gradient(180deg, #ddb9ff 0%, #a749f8 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .boxed {
    background: linear-gradient(
      180deg,
      rgba(52, 51, 53, 0.5) 0%,
      rgba(64, 59, 69, 0.5) 100%
    );

    backdrop-filter: blur(50px);
    border-radius: 8px;
    transition: all 0.5s ease-in-out;
    z-index: 100;
  }
`;

const DropWallets = ({
  coords,
  open,
  className = "",
  handleClose = () => {},
}) => {
  console.log(coords);
  useEffect(() => {
    if (open === true) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [open]);
  if (typeof document === "undefined") return <div className="modal"></div>;
  return ReactDOM.createPortal(
    <DropWalletsStyles className={`z-[60] duration-500 ${className}`}>
      <button
        className="fixed top-[10px] z-[200] right-[146px] h-[53px]  px-5 py-4 flex items-center justify-center font-semibold tracking-[0.02em] border border-solid border-purple-400 rounded-lg "
        onClick={handleClose}
      >
        <span className="connect duration-500">
          {open === false ? "Connect Wallet" : "Close Option"}
        </span>
      </button>
      {open === true ? (
        <div
          className={
            "z-[90] fixed inset-0 right-0 top-[63px] rounded-lg open-modal"
          }
        >
          <div
            className="z-[100] absolute -top-[63px] w-full h-[100vh] opacity bg-black bg-opacity-60 cursor-pointer "
            onClick={handleClose}
          ></div>
          <div
            className={`z-[2000] relative boxed flex items-center flex-col font-[700] w-[352px] h-[436px] p-5 ${
              open === true ? "show-wallets" : ""
            }`}
            style={{
              top: coords?.top + 5,
              right: -coords?.right + 352,
            }}
          >
            <span>Select a wallet</span>
            <p className="mt-3 font-[300] text-center text-[13px] tracking-[0.02rem] leading-6">
              By connecting your wallet, you agree to our{" "}
              <span className="font-[700]">Terms of Service</span> and our{" "}
              <span className="font-[700]">Privacy Policy</span>
            </p>
            <ul className="flex flex-col mt-[18px] gap-y-[5px] font-[500] text-[14px] w-full">
              {SmallWallets.map((item) => (
                <Link to="/Metamask">
                  <li className="h-[55px] w-full p-4 gap-x-5 flex items-center hover:bg-slate-200 hover:bg-opacity-10 transition-all cursor-pointer rounded-lg">
                    <img src={item.img} alt="" className="w-10 object-cover" />{" "}
                    <span>{item.name}</span>
                  </li>
                </Link>
              ))}
            </ul>
            <Link to="/wallets">
              <button
                onClick={handleClose}
                className="show-more px-7 py-4 text-[14px] font-[500] mt-3"
              >
                Show more option
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <></>
      )}
    </DropWalletsStyles>,
    document.querySelector("body")
  );
};

export default DropWallets;
