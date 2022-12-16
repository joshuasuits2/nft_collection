import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import logo from "../../../assets/logo.png";
import { MdTopic } from "react-icons/md";

const Dashboard = () => {
  return (
    <div className="flex h-screen w-screen bg-[#30373f] font-[400]">
      <div className="h-screen w-[320px] bg-[#0d1520]">
        <div className="w-[185px] h-[59px] mt-8 ml-5">
          <img src={logo} alt="" className="w-full h-full object-cover" />
        </div>
        <ul className="mt-10  w-full  flex flex-col ">
          <NavLink
            to="/dashboard/topics"
            className="px-7 py-5 flex items-center gap-x-5 cursor-pointer hover:bg-[#222836] hover:border-gray-300 hover:border-r-[2px]"
          >
            <div className="w-3 h-3 rounded-full  bg-[#4df6a1] "></div>
            <span>Topics</span>
          </NavLink>
          <NavLink
            to="/dashboard/cryptos"
            className="px-7 py-5 flex items-center gap-x-5 cursor-pointer hover:bg-[#222836] hover:border-gray-300 hover:border-r-[2px]"
          >
            <div className="w-3 h-3 rounded-full bg-[#3a6dd5]"></div>
            <span>Cryptos</span>
          </NavLink>
          {/* <NavLink
            to="/dashboard/collections"
            className="px-7 py-5 flex items-center gap-x-5 cursor-pointer hover:bg-[#222836] hover:border-gray-300 hover:border-r-[2px]"
          >
            <div className="w-3 h-3 rounded-full bg-[#906be7]"></div>
            <span>Collection</span>
          </NavLink>
          <NavLink
            to="/dashboard/nfts"
            className="px-7 py-5 flex items-center gap-x-5 cursor-pointer hover:bg-[#222836] hover:border-gray-300 hover:border-r-[2px]"
          >
            <div className="w-3 h-3 rounded-full bg-[#e74aba]"></div>
            <span>NFTs</span>
          </NavLink> */}
        </ul>
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default Dashboard;
