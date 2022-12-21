import axios from "axios";
import React, { useEffect, useState } from "react";
import TimingNFT from "./TimingNFT";
import { baseURL } from "../../config/getConfig";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import Listing from "../modal/Listing";

const HandleBtnNft = ({
  nft,
  userId,
  userName,
  token,
  handleShowBuyNow = () => {},
  ...props
}) => {
  const [statusListing, setStatusListing] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const handleCancel = async () => {
    try {
      await axios.put(
        `${baseURL}/api/nfts/${nft?.id}`,
        {
          name: nft.name,
          description: nft.description,
          reaction: nft.reaction,
          price: nft.price,
          crypto_id: nft.crypto_id,
          owner_id: nft.owner.id,
          creator_id: nft.creator.id,
          collection_id: nft.collection.id,
          status: 0,
        },
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success("Canceled");
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`${baseURL}/api/nfts/${nft?.id}`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          // "Content-Type": "multipart/form-data",
          authorization: `Bearer ${token}`,
        },
      });
      toast.success("Deleted!");
      setTimeout(() => {
        navigate("/profile");
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      {nft?.owner?.id === userId && (
        <div className="deal mt-5 flex gap-x-8">
          {nft.status === 1 && statusListing === true && (
            <button
              onClick={() => {
                setShowModal(true);
              }}
              className="translate-y-5 w-[150px] h-[55px] font-[500] bg-[#c084fc] rounded-lg text-[#fff] active:bg-opacity-80 transition-all"
            >
              Listing
            </button>
          )}
          {nft.status === 1 && statusListing === false && (
            <button
              onClick={() => {
                handleCancel();
                setTimeout(() => {
                  setStatusListing(true);
                }, 2000);
              }}
              className="translate-y-5 w-[150px] h-[55px] font-[500] bg-[#e9e9e9] rounded-lg text-[#141418] active:bg-opacity-80 transition-all"
            >
              Cancel listing
            </button>
          )}
          {nft.status === 0 && statusListing === false && (
            <button
              onClick={() => {
                setShowModal(true);
              }}
              className="translate-y-5 w-[150px] h-[55px] font-[500] bg-[#c084fc] rounded-lg text-[#fff] active:bg-opacity-80 transition-all"
            >
              Listing
            </button>
          )}

          {nft.status === 0 && statusListing === true && (
            <button
              onClick={() => {
                handleCancel();
                setTimeout(() => {
                  setStatusListing(false);
                }, 2000);
              }}
              className="translate-y-5 w-[150px] h-[55px] font-[500] bg-[#e9e9e9] rounded-lg text-[#141418] active:bg-opacity-80 transition-all"
            >
              Cancel listing
            </button>
          )}

          <button
            onClick={handleDelete}
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
        open={showModal}
        nft={nft}
        token={token}
        handleClose={() => setShowModal(false)}
        handleSetStatusListing={() => {
          setStatusListing(false);
        }}
      />
      <ToastContainer autoClose={800} />
    </>
  );
};

export default HandleBtnNft;
