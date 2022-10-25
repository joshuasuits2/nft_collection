import React from "react";
import PageContainer from "../components/layout/PageContainer";
import styled from "styled-components";
import MetaMask from "../assets/wallets/Metamask.png";
import CoinBase from "../assets/wallets/Coinbase.png";
import WalletConnect from "../assets/wallets/WalletConnect.png";
import Phantom from "../assets/wallets/phantom.png";
import Glow from "../assets/wallets/glow.png";
import Footer from "../components/layout/Footer";

const ListWallet = [
  {
    id: 1,
    title: "Metamask",
    img: MetaMask,
  },

  {
    id: 2,
    title: "Coinbase",
    img: CoinBase,
  },

  {
    id: 3,
    title: "Wallet Connect",
    img: WalletConnect,
  },
  {
    id: 4,
    title: "Phantom",
    img: Phantom,
  },
  {
    id: 5,
    title: "Glow",
    img: Glow,
  },
  {
    id: 6,
    title: "Glow",
    img: Glow,
  },
  {
    id: 7,
    title: "Glow",
    img: Glow,
  },
  {
    id: 8,
    title: "Glow",
    img: Glow,
  },
  {
    id: 9,
    title: "Glow",
    img: Glow,
  },
  {
    id: 10,
    title: "Glow",
    img: Glow,
  },
];

const WalletsPageStyles = styled.div`
  .text-gradient {
    background: linear-gradient(180deg, #ddb9ff 0%, #a749f8 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  .linear-blur {
    background: linear-gradient(
      180deg,
      #322d39 0%,
      rgba(49, 45, 55, 0.09) 100%
    );
    backdrop-filter: blur(50px);
    width: 100%;
    border-radius: 8px;
    transition: color 0.25s linear;
    &:hover {
      transition: all 0.25s linear;
      background: linear-gradient(
        180deg,
        rgba(99, 99, 99, 0.68) 0%,
        rgba(49, 45, 55, 0.09) 100%
      );
      backdrop-filter: blur(50px);
    }
  }
`;

const WalletsPage = () => {
  return (
    <WalletsPageStyles className="body">
      <PageContainer>
        <div className="flex flex-col">
          <span className="text-[16px] text-gradient ">Choose Wallet</span>
          <span className="text-[14px] leading-[21px] mt-4 font-[300]">
            You need a crypto wallet to use ZenoNFTs. <br></br> If you don't
            have a wallet yet, you can select a provider and create one now.
          </span>
        </div>
        <div className="grid grid-rows-2 gap-x-[60px] gap-y-[60px] grid-cols-5 mt-[60px]">
          {ListWallet.map((item) => (
            <div
              key={item.id}
              className="linear-blur flex items-center justify-center flex-col py-[15px]"
            >
              <img
                src={item.img}
                alt=""
                className="w-[100px] h-[100px] object-cover mb-[10px]"
              />
              <span>{item.title}</span>
            </div>
          ))}
        </div>
        <Footer></Footer>
      </PageContainer>
    </WalletsPageStyles>
  );
};

export default WalletsPage;
