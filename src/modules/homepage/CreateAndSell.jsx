import React from "react";
import Button from "../../components/button/Button";
import Heading from "../../components/layout/Heading";
import crystal_purple from "../../assets/step/crystal_purple.png";
import crystal_green from "../../assets/step/crystal_green.png";
import crystal_blue from "../../assets/step/crystal_blue.png";
import styled from "styled-components";

const CreateAndSellStyles = styled.div`
  margin-top: 100px;
  .step {
    position: relative;
  }
  .crystal-purple-blur {
    position: absolute;
    left: 0%;
    right: 75%;
    top: 49.17%;
    bottom: -18.33%;

    /* test1 */

    background: linear-gradient(
      91.56deg,
      rgba(100, 49, 149, 0.55) -5.81%,
      rgba(99, 42, 152, 0.64) 108.58%
    );
    filter: blur(30px);
    border-radius: 1000px;
  }

  .crystal-green-blur {
    position: absolute;
    left: 0%;
    right: 75%;
    top: 49.17%;
    bottom: -18.33%;
    background: linear-gradient(
      91.56deg,
      rgba(207, 255, 130, 0.38) -5.81%,
      rgba(207, 255, 130, 0.43) 108.58%
    );
    filter: blur(20px);
    border-radius: 1000px;
  }

  .crystal-blue-blur {
    position: absolute;
    left: 0%;
    right: 75%;
    top: 49.17%;
    bottom: -18.33%;
    background: linear-gradient(
      91.56deg,
      rgba(77, 115, 197, 0.55) -5.81%,
      rgba(53, 97, 214, 0.64) 108.58%
    );
    filter: blur(20px);
    border-radius: 1000px;
  }
`;

const CreateAndSell = () => {
  return (
    <CreateAndSellStyles>
      <Heading>CREATE & SELL YOUR NFTs</Heading>
      <div className="flex mt-[75px] gap-x-[125px]">
        <div className="flex flex-[55%] flex-col">
          <h3 className="text-[20px] font-bold">
            Should You Invest In Non Fungible Tokens (NFT)?
          </h3>
          <p className="text-[14px] leading-[40px] font-[300] mt-[20px] font-['Montserrat']">
            After gaining momentum in 2017, NFTs (Non-Fungible Tokens) have been
            proved instrumental in the development and growth of the virtual
            world. This enabled land ownership in the virtual realm. The
            potential of virtual land economically is significant as it allows
            investors to construct a secure and solid business for online sales
            or advertising in the digital space. <br></br> With no sign of
            slowing down, NFTs are the next big thing that you as an investor
            should consider investing in. Keep reading
          </p>
          <Button className="mt-[58px]">Connect Wallet</Button>
        </div>
        <div className="flex flex-col gap-y-[35px] flex-[45%]">
          <div className="step flex gap-[15px] items-center">
            <img src={crystal_purple} alt="" className="w-[120px]" />
            <div className="crystal-purple-blur"></div>
            <div className="flex flex-col gap-[10px]">
              <h3 className="text-[16px] font-bold">Set up your wallet</h3>
              <p className="font-[300] font-['Montserrat'] text-[14px]">
                Once you've set up your wallet of choice, <br></br>connect it to
                OpenSea by clicking the wallet <br></br>icon in the top right
                corner .
              </p>
            </div>
          </div>

          <div className="step ml-[70px] flex gap-[15px] items-center">
            <img src={crystal_green} alt="" className="w-[120px]" />
            <div className="crystal-green-blur"></div>
            <div className="flex flex-col gap-[10px]">
              <h3 className="text-[16px] font-bold">
                Upload & Create collection
              </h3>
              <p className="font-[300] font-['Montserrat'] text-[14px]">
                Upload a your work and then click my collections set up your
                collection Add social links, a description.
              </p>
            </div>
          </div>

          <div className="step flex gap-[15px] items-center">
            <img src={crystal_blue} alt="" className="w-[120px]" />
            <div className="crystal-blue-blur"></div>
            <div className="flex flex-col gap-[10px]">
              <h3 className="text-[16px] font-bold">List them for sale</h3>
              <p className="font-[300] font-['Montserrat'] text-[14px]">
                Chose between auctions, fixed-price <br></br> listings, and
                declining - price listings. you <br></br> chose how you want.
              </p>
            </div>
          </div>
        </div>
      </div>
    </CreateAndSellStyles>
  );
};

export default CreateAndSell;
