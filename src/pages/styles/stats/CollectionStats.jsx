import React from "react";
import Dropdown from "../../../components/dropdown/Dropdown";
import Heading from "../../../components/layout/Heading";
import Blood_bat from "../../../assets/collection/Blood_bat.png";
import verify from "../../../assets/outside/verify.png";

const categories = [
  { id: 1, name: "All categories" },
  { id: 2, name: "Music" },
  { id: 3, name: "Art" },
  { id: 4, name: "Photography" },
  { id: 5, name: "Sport" },
  { id: 6, name: "Virtual Worlds" },
  { id: 7, name: "More" },
];

const chains = [
  { id: 1, name: "All chain" },
  { id: 2, name: "Ethereum" },
  { id: 3, name: "Solana" },
  { id: 4, name: "Polygon" },
  { id: 5, name: "Klaytn" },
];

const CollectionStats = () => {
  return (
    <>
      <Heading alignItems="start">COLLECTION STATS</Heading>
      <div className="mt-[25px] flex gap-x-10">
        <Dropdown className="w-[180px]" listArr={categories}></Dropdown>
        <Dropdown className="w-[150px]" listArr={chains}></Dropdown>
      </div>
      <div className="mt-[45px] font-[600] text-[14px]">
        <div className="header flex opacity-70">
          <div className="flex-1 flex items-center justify-center">Rank</div>
          <div className="flex-[3]">Collection</div>
          <div className="flex-1 flex items-center justify-center">Volume</div>
          <div className="flex-1 flex items-center justify-center">
            % Change
          </div>
          <div className="flex-1 flex items-center justify-center">
            Floor Price
          </div>
          <div className="flex-1 flex items-center justify-center">Sales</div>
        </div>
        <div className="body flex mt-10 rounded-lg items-center justify-center bg-[#1D1922] h-20">
          <div className="flex-1 flex items-center justify-center">1</div>
          <div className="flex-[3] flex items-center">
            <img
              src={Blood_bat}
              alt=""
              className="w-[60px] h-[60px] object-cover rounded-[4px] mr-9"
            />
            <span className="mr-[10px]">Blood bats</span>
            <img src={verify} alt="" className="w-4 h-4 object-cover" />
          </div>
          <div className="flex-1 flex items-center justify-center">
            <span className="">691 ETH</span>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <span className=" text-[#1CFD76]">+124%</span>
          </div>
          <div className="flex-1 flex items-center justify-center text-[#FF910F]">
            15.10 ETH
          </div>
          <div className="flex-1 flex items-center justify-center text-[#c88efe]">
            43
          </div>
        </div>
      </div>
    </>
  );
};

export default CollectionStats;
