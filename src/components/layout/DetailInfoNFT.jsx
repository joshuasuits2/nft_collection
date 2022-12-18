import React from "react";

const DetailInfoNFT = ({ CTA, tokenID, ...props }) => {
  return (
    <div className="details flex gap-x-[130px] mt-5">
      <div>
        <ul className="flex flex-col gap-y-4">
          <li className="text-gradient">Contract Address</li>
          <li className="text-gradient">Token ID</li>
          <li className="text-gradient">Blockchain</li>
          <li className="text-gradient">Last Updated</li>
        </ul>
      </div>
      <div>
        <ul className="flex flex-col gap-y-4">
          <li className="text-[#FBFF2A]">0x1263...5df5</li>
          <li className="text-[#FBFF2A]">602</li>
          <li className="text-[#FBFF2A]">Ethereum</li>
          <li>2 days ago</li>
        </ul>
      </div>
    </div>
  );
};

export default DetailInfoNFT;
