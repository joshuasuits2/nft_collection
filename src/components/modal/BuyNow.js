import React, { useState } from "react";
import ReactDOM from "react-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CloseIcon from "../../assets/icons/CloseIcon";
import FormBuyNow from "../form/FormBuyNow";
import FormSign from "../form/FormSign";

const BuyNow = ({
  token,
  open = false,
  nftInfoDetail,
  handleClose = () => {},
}) => {
  const [confirmBtn, setConfirmBtn] = useState(true);

  if (typeof document === "undefined") return <div className="buy-now"></div>;

  return ReactDOM.createPortal(
    <div
      className={`buy-now fixed inset-0 transition-all flex items-center justify-center p-5 z-50 ${
        open ? "" : "opacity-0 invisible"
      }`}
    >
      <div
        className="overlay absolute inset-0 bg-zinc-800 bg-opacity-80"
        onClick={handleClose}
      ></div>

      <div className="relative w-[700px] rounded-lg bg-white flex flex-col items-center justify-center">
        <div
          className={`transition-all duration-500 w-full h-[370px] flex flex-col bg-white z-10 p-10 rounded-lg shadow-2xl text-[#141418] ${
            confirmBtn === false ? "opacity-0 invisible" : ""
          }`}
        >
          <span
            className="absolute top-3 right-3 cursor-pointer"
            onClick={handleClose}
          >
            <CloseIcon></CloseIcon>
          </span>
          <FormBuyNow
            token={token}
            nftInfoDetail={nftInfoDetail}
            handleChangeState={() => setConfirmBtn(false)}
          ></FormBuyNow>
        </div>

        <div
          className={`transition-all duration-500 absolute w-full h-[370px] flex flex-col bg-white z-10 p-10 rounded-lg shadow-2xl text-[#141418] ${
            confirmBtn === false
              ? "translate-x-0"
              : "opacity-0 invisible translate-x-1/2"
          }`}
        >
          <span
            className="absolute top-3 right-3 cursor-pointer"
            onClick={handleClose}
          >
            <CloseIcon></CloseIcon>
          </span>
          <FormSign
            token={token}
            handleSetConfirmBtn={() => setConfirmBtn(true)}
            nftInfoDetail={nftInfoDetail}
          ></FormSign>
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={800}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>,
    document.querySelector("body")
  );
};

export default BuyNow;
