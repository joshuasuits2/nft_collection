import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import TimingNFT from "./TimingNFT";
import { baseURL } from "../../config/getConfig";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import Listing from "../modal/Listing";
import DeleteNft from "../modal/DeleteNft";
import Canceling from "../modal/Canceling";

const HandleBtnNft = ({
  nft,
  userId,
  userName,
  token,
  handelUpdate = () => {},
  handleShowBuyNow = () => {},
  ...props
}) => {
  const [statusListing, setStatusListing] = useState(!!nft.status);
  const [showModalListing, setShowModalListing] = useState(false);
  const [showModalDeleting, setShowModalDeleting] = useState(false);
  const [showModalCanceling, setShowModalCanceling] = useState(false);

  return (
    <>
      {nft?.owner?.id === userId && (
        <div className="deal mt-5 flex gap-x-8">
          {statusListing === true && (
            <button
              type="submit"
              onClick={() => {
                setShowModalCanceling(true);
              }}
              className="translate-y-5 w-[150px] h-[55px] font-[500] bg-[#e9e9e9] rounded-lg text-[#141418] active:bg-opacity-80 transition-all"
            >
              Cancel listing
            </button>
          )}

          {statusListing === false && (
            <button
              type="submit"
              onClick={() => {
                setShowModalListing(true);
              }}
              className="translate-y-5 w-[150px] h-[55px] font-[500] bg-[#c084fc] rounded-lg text-[#fff] active:bg-opacity-80 transition-all"
            >
              Listing
            </button>
          )}

          <button
            onClick={() => {
              setShowModalDeleting(true);
            }}
            className="translate-y-5 w-[150px] h-[55px] font-[500] bg-[#d6454c] rounded-lg text-[#fff]"
          >
            Delete
          </button>
        </div>
      )}

      {nft?.owner?.id !== userId && (
        <div>
          {nft.status === 1 ? (
            <div className="action flex gap-x-[180px] mt-[30px] justify-between">
              <TimingNFT></TimingNFT>
              <div className="deal  flex flex-col gap-y-5">
                <button
                  onClick={handleShowBuyNow}
                  disabled={nft?.status === 0}
                  className={`w-[150px] h-[55px] font-[500]  bg-[#FBFF2A] rounded-lg text-[#141418] ${
                    nft?.status === 0
                      ? "pointer-events-none: bg-opacity-20"
                      : ""
                  }`}
                >
                  Buy Now
                </button>
                <button className="w-[150px] h-[55px] font-[500] rounded-lg border border-solid border-white">
                  Make Offer
                </button>
              </div>
            </div>
          ) : (
            <div className="action flex gap-x-[180px] mt-[30px] justify-between">
              <TimingNFT
                priDay={0}
                priHour={0}
                priMinute={0}
                secDay={0}
                secHour={0}
                secMinute={0}
              ></TimingNFT>
              <div className="deal flex flex-col gap-y-5">
                <button
                  onClick={handleShowBuyNow}
                  disabled={nft?.status === 0}
                  className={`w-[150px] h-[55px] font-[500]  bg-[#FBFF2A] rounded-lg text-[#141418] ${
                    nft?.status === 0
                      ? "pointer-events-none: bg-opacity-40"
                      : ""
                  }`}
                >
                  Buy Now
                </button>
                <button className="w-[150px] h-[55px] font-[500] rounded-lg border border-solid border-white">
                  Make Offer
                </button>
              </div>
            </div>
          )}
        </div>
      )}
      <Listing
        openListing={showModalListing}
        nft={nft}
        handelUpdate={handelUpdate}
        token={token}
        handleCloseListing={() => setShowModalListing(false)}
        handleSetStatusListing={() => {
          setStatusListing(true);
        }}
      />
      <DeleteNft
        openDeleting={showModalDeleting}
        nft={nft}
        token={token}
        handleCloseDeleting={() => setShowModalDeleting(false)}
      />
      <Canceling
        openCanceling={showModalCanceling}
        nft={nft}
        token={token}
        handleCloseCanceling={() => setShowModalCanceling(false)}
        handleSetStatusListing={() => {
          setStatusListing(false);
        }}
      />
      <ToastContainer autoClose={800} />
    </>
  );
};

export default HandleBtnNft;
