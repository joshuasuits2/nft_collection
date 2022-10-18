import React from "react";
import PageContainer from "../components/layout/PageContainer";
import styled from "styled-components";
import MetaMask from "../assets/wallets/Metamask.png";
import CoinBase from "../assets/wallets/Coinbase.png";
import WalletConnect from "../assets/wallets/WalletConnect.png";

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
];

const WalletsPageStyles = styled.div`
  .linear-blur {
    background: linear-gradient(
      180deg,
      #322d39 0%,
      rgba(49, 45, 55, 0.09) 100%
    );
    backdrop-filter: blur(50px);
    width: 100%;
    border-radius: 8px;
    transition: all 2s ease-in-out 1s;

    &:hover {
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
    <WalletsPageStyles>
      <PageContainer>
        <div className="flex flex-col">
          <span className="text-[16px]">Choose Wallet</span>
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
      </PageContainer>
    </WalletsPageStyles>
  );
};

export default WalletsPage;
