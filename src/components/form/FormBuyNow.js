import React from "react";
import { baseURL } from "../../config/getConfig";

const FormBuyNow = ({
  nftInfoDetail,
  handleChangeState = () => {},
  ...props
}) => {
  const royalties = 0.1;
  return (
    <div className="flex flex-col">
      <span className="font-[700] tracking-normal text-[18px] text-center">
        Complete Checkout
      </span>
      <div className="h-[1px] mt-3 w-full bg-gray-200"></div>
      <div className="mt-3 flex text-left">
        <table style={{ width: "100%" }}>
          <thead>
            <tr>
              <th>Item</th>
              <th>Price</th>
              <th>Quantify</th>
              <th>SubTotal</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className="mt-5 flex gap-3 text-[15px] tracking-normal">
                  <div className="w-[70px] h-[70px]">
                    <img
                      src={`${baseURL}/storage/nftImages/${nftInfoDetail?.url_image_nft}`}
                      alt=""
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-[600] text-gradient">
                      Collection: {nftInfoDetail.collection.name}
                    </span>
                    <span>
                      <span className="font-[600]"> Owner:</span>{" "}
                      {nftInfoDetail.owner.name}
                    </span>
                    <span className="text-[13px] text-[#aaa]">
                      Royalties: {royalties * 100}%
                    </span>
                  </div>
                </div>
              </td>
              <td>
                <div className="flex flex-col">
                  <span>{nftInfoDetail.price}</span>
                  <span className="text-[13px] text-[#aaa]">
                    {(nftInfoDetail.price * royalties).toFixed(2)} ETH
                  </span>
                </div>
              </td>
              <td>
                <div className="border border-solid border-slate-200 rounded-lg py-3 px-4 outline-none bg-transparent w-[85px] cursor-pointer">
                  1
                </div>
              </td>
              <td>
                <div className="flex flex-col">
                  <span>{nftInfoDetail.price}</span>
                  <span className="text-[13px] text-[#aaa]">
                    {(nftInfoDetail.price * royalties).toFixed(2)} ETH
                  </span>
                </div>
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td>
                <div className="mt-3 font-bold">Total</div>
              </td>
              <td></td>
              <td></td>
              <td>
                <div className="mt-3 font-bold">
                  {(nftInfoDetail.price * (royalties + 1)).toFixed(2)} ETH
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="h-[1px] mt-3 w-full bg-gray-200"></div>
      <button
        onClick={handleChangeState}
        className="inline-flex mt-6 mx-auto w-[300px] items-center justify-center px-8 py-4 font-sans font-semibold tracking-wide text-white bg-[#c084fc] rounded-lg h-[53px] active:bg-purple-300"
      >
        Confirm Checkout
      </button>
    </div>
  );
};

export default FormBuyNow;
