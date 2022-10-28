import React from "react";
import styled from "styled-components";
import ReactDOM from "react-dom";

const DropWalletsStyles = styled.div`
  background: linear-gradient(
    180deg,
    rgba(52, 51, 53, 0.5) 0%,
    rgba(64, 59, 69, 0.5) 100%
  );
  backdrop-filter: blur(50px);
  border-radius: 8px;
`;

const DropWallets = ({ coords }) => {
  return (
    <DropWalletsStyles className="absolute z-[10002] right-0 top-[63px] rounded-lg w-[352px] h-[425px] p-5 transition-all flex  items-center flex-col font-[700]">
      <span>Select a wallet</span>
      <p className="mt-3 font-[300] text-center text-[13px] tracking-[0.02rem] leading-6">
        By connecting your wallet, you agree to our{" "}
        <span className="font-[700]">Terms of Service</span> and our{" "}
        <span className="font-[700]">Privacy Policy</span>
      </p>
    </DropWalletsStyles>
  );
};

export default DropWallets;
