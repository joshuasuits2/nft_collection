import React from "react";
import Blood_bat from "../../assets/collection/Blood_bat.png";
import verify from "../../assets/outside/verify.png";

const StatsCollection = ({
  className,
  index,
  logo = "",
  collection,
  volume,
  change,
  floor_price,
  sales,
  img,
  ...props
}) => {
  return (
    <div
      className={`flex rounded-lg items-center justify-center ${className} h-20`}
    >
      <div className="flex-1 flex items-center justify-center">{index}</div>
      <div className="flex-[3] flex items-center">
        <img
          src={logo}
          alt=""
          className="w-[60px] h-[60px] object-cover rounded-[4px] mr-9"
        />
        <span className="mr-[10px]">Blood bats</span>
        <img src={verify} alt="" className="w-4 h-4 object-cover" />
      </div>
      <div className="flex-1 flex items-center justify-center">
        <span className="">{volume} ETH</span>
      </div>
      <div className="flex-1 flex items-center justify-center">
        <span className=" text-[#1CFD76]">+124%</span>
      </div>
      <div className="flex-1 flex items-center justify-center text-[#FF910F]">
        0.02 ETH
      </div>
      <div className="flex-1 flex items-center justify-center text-[#c88efe]">
        43
      </div>
    </div>
  );
};

export default StatsCollection;
