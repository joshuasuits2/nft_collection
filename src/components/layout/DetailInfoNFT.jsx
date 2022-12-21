import axios from "axios";
import React, { useEffect, useState } from "react";
import { baseURL } from "../../config/getConfig";

const DetailInfoNFT = ({ CTA, tokenID, nftId, ...props }) => {
  const [transactions, setTransactions] = useState();
  useEffect(() => {
    (async () => {
      const res = await axios.get(
        `${baseURL}/api/transactions?&includeBuyer=1&includeSeller=1`
      );
      const list = res.data.transactions;
      const item = list.filter((item) => item.nft_id === nftId);
      setTransactions(item);
    })();
  }, []);
  return (
    <>
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

      {transactions?.length > 0 && (
        <div className="history mt-10 w-full">
          <span className="text-gradient font-bold">History transactions:</span>
          <div className="mt-5 flex gap-x-5 w-full">
            <span className="flex-[50%] text-[#FBFF2A] text-[16px]">
              Buyer_id
            </span>
            <span className="flex-[50%] text-[#FBFF2A] text-[16px]">
              Seller_id
            </span>
            <span className="flex-[40%] text-[#FBFF2A] text-[16px]">Price</span>
            <span className="flex-[40%] text-[#FBFF2A] text-[16px]">Time</span>
          </div>

          {transactions.map((item) => (
            <div key={item.id} className="mt-5 flex gap-x-5 w-full">
              <span className="flex-[50%] text-[14px]">{item?.buyer.name}</span>
              <span className="flex-[50%] text-[14px]">
                {item?.seller.name}
              </span>
              <span className="flex-[40%] text-[14px]">{item?.price} ETH</span>
              <span className="flex-[40%] text-[14px]">
                {item?.date.slice(0, 10)}
              </span>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default DetailInfoNFT;
