import React from "react";
import logo from "../../../assets/logo.png";

const Dashboard = () => {
  return (
    <div className="flex h-screen w-screen bg-[#30373f]">
      <div className="h-screen w-[320px] bg-[#0d1520]">
        <div className="w-[185px] h-[59px] mt-8 ml-5">
          <img src={logo} alt="" className="w-full h-full object-cover" />
        </div>
        <ul className="mt-5  w-full  flex flex-col ">
          <li className="px-7 py-4">Topics</li>
          <li className="px-7 py-4">Cryptos</li>
          <li className="px-7 py-4">Collection</li>
          <li className="px-7 py-4">NFTs</li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
