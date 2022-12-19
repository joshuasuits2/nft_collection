import axios from "axios";
import React from "react";
import { useEffect } from "react";
import Blood_bat from "../../assets/collection/Blood_bat.png";
import verify from "../../assets/outside/verify.png";
import { baseURL } from "../../config/getConfig";

const StatsCollection = ({
  className,
  index,
  collection,
  volume,
  change,
  floor_price,
  sales,
  img,
}) => {
  useEffect(() => {
    (async () => {
      const res = await axios.get(`${baseURL}/api/`);
    })();
  }, []);
  return (
    <div
      className={`flex rounded-lg items-center justify-center ${className} h-20`}
    >
      <div className="flex-1 flex items-center justify-center">{index}</div>
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
  );
};

export default StatsCollection;
