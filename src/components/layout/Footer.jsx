import React from "react";
import styled from "styled-components";
import Button from "../button/Button";
import Input from "../input/Input";

const FooterStyles = styled.div`
  margin-top: 150px;
  .line {
    background-image: linear-gradient(180deg, #b444ff 0%, #f582ff 100%);
  }
  .subtitle {
    background: linear-gradient(180deg, #ddb9ff 0%, #a749f8 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

const Footer = () => {
  return (
    <FooterStyles>
      <div className="line h-[1px] w-full bg-purple-500"></div>
      <div className="wrapper flex mt-[45px]">
        <div className="flex-[4]">
          <img srcSet="./logo.png 2x" alt="" className="inline-block" />
          <p className="mt-[35px] font-[300] text-[15px] leading-[30px]">
            The digital marketplace for crypto collectibles and non- <br></br>
            fungible tokens (NFTs). Buy, sell, and discover exclusive <br></br>
            digital items.
          </p>
          <span className="subtitle mt-[55px] inline-block">
            Stay updated, join our mailing list.
          </span>
          <div className="flex gap-x-4 items-start mt-5">
            <Input placeholder="Enter your email"></Input>
            <Button height="55px" width="100px" kind="small">
              Send
            </Button>
          </div>
        </div>
        <div className="flex flex-[6] mt-10 ml-[100px]">
          <div className="flex-[25%]">
            <span className="subtitle font-[500]">Marketplace</span>
            <ul className="mt-[25px] flex flex-col gap-y-4 text-[14px] font-[300]">
              <li>All NFTs</li>
              <li>Solana NFTs</li>
              <li>Art</li>
              <li>Collectibles</li>
              <li>Domain Names</li>
              <li>Music</li>
              <li>Photography</li>
              <li>Sports</li>
              <li>Trading Cards</li>
              <li>Utility</li>
              <li>Virtual Worlds</li>
            </ul>
          </div>
          <div className="flex-[25%]">
            <div className="">
              <span className="subtitle font-[500]">My Account</span>
              <ul className="mt-[25px] flex flex-col gap-y-4 text-[14px] font-[300]">
                <li>Profile</li>
                <li>Favorites</li>
                <li>Watchlist</li>
                <li>My Collections</li>
                <li>Settings</li>
              </ul>
            </div>
            <div className="mt-[70px]">
              <span className="subtitle font-[500]">Stats</span>
              <ul className="mt-[25px] flex flex-col gap-y-4 text-[14px] font-[300]">
                <li>Rankings</li>
                <li>Activity</li>
              </ul>
            </div>
          </div>
          <div className="flex-[25%]">
            <span className="subtitle font-[500]">Resources</span>
            <ul className="mt-[25px] flex flex-col gap-y-4 text-[14px] font-[300]">
              <li>Help Center</li>
              <li>Platform Status</li>
              <li>Partners</li>
              <li>Gas-Free Marketplace</li>
              <li>Taxes</li>
              <li>Blog</li>
              <li>Docs</li>
              <li>Newsletter</li>
            </ul>
          </div>
          <div className="flex-1">
            <span className="subtitle font-[500]">Company</span>
            <ul className="mt-[25px] flex flex-col gap-y-4 text-[14px] font-[300]">
              <li>About</li>
              <li>Careers</li>
              <li>Ventures</li>
              <li>Grants</li>
            </ul>
          </div>
        </div>
      </div>
    </FooterStyles>
  );
};

export default Footer;
