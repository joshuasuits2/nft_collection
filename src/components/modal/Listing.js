import axios from "axios";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CloseIcon from "../../assets/icons/CloseIcon";
import { baseURL } from "../../config/getConfig";

const Listing = ({
  openListing = false,
  token,
  nft,
  handelUpdate = () => {},
  handleSetStatusListing = () => {},
  handleCloseListing = () => {},
}) => {
  const [priceInput, setPriceInput] = useState(0);
  const handleListing = async () => {
    try {
      await axios.put(
        `${baseURL}/api/nfts/${nft?.id}`,
        {
          name: nft.name,
          description: nft.description,
          reaction: nft.reaction,
          price: parseFloat(priceInput),
          crypto_id: nft.crypto_id,
          owner_id: nft.owner.id,
          creator_id: nft.creator.id,
          collection_id: nft.collection.id,
          status: 1,
        },
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success("Listed!");
      handelUpdate();
    } catch (error) {
      console.log(error);
    }
  };

  if (typeof document === "undefined") return <div className="buy-now"></div>;

  return ReactDOM.createPortal(
    <div
      className={`buy-now fixed inset-0 transition-all flex items-center justify-center p-5 z-50 ${
        openListing ? "" : "opacity-0 invisible"
      }`}
    >
      <div
        className="overlay absolute inset-0 bg-zinc-800 bg-opacity-80"
        onClick={handleCloseListing}
      ></div>

      <div className="relative w-[450px] rounded-lg bg-white flex flex-col items-center justify-center">
        <div
          className={`transition-all duration-500 w-full flex flex-col bg-white z-10 p-10 rounded-lg shadow-2xl text-[#141418]`}
        >
          <span
            className="absolute top-3 right-3 cursor-pointer"
            onClick={handleCloseListing}
          >
            <CloseIcon></CloseIcon>
          </span>
          <div className="mt-5">
            <div className="flex flex-col">
              <span className="font-semibold">Now Price</span>
              <div className="w-full h-[50px] mt-2 border border-solid border-slate-200 rounded-lg py-3 px-5 outline-none bg-transparent">
                {nft.price} ETH
              </div>
            </div>
            <div className="mt-5 flex flex-col">
              <span className="font-semibold">New Price</span>
              <input
                type="text"
                className="mt-2 border border-solid border-slate-200 rounded-lg py-3 px-5 outline-none bg-transparent"
                placeholder={`${(parseFloat(nft.price) + 0.01).toFixed(3)} ETH`}
                onChange={(e) => setPriceInput(e.target.value)}
              />
              {!isNaN(+priceInput) === false && (
                <span className="mt-3 text-red-500">Please enter a number</span>
              )}
            </div>
          </div>
          <button
            onClick={() => {
              handleSetStatusListing();
              handleListing();
              setTimeout(() => {
                handleCloseListing();
              }, 500);
            }}
            className={`mt-8 inline-flex items-center justify-center px-8 py-4 font-sans font-semibold tracking-wide text-white bg-[#c084fc] rounded-lg h-[53px] ${
              priceInput.length === 0 || !isNaN(+priceInput) === false
                ? "opacity-60 pointer-events-none"
                : ""
            }`}
          >
            Accept
          </button>
        </div>
      </div>
    </div>,
    document.querySelector("body")
  );
};

export default Listing;
