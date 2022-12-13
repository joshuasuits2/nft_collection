import axios from "axios";
import React from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthUser from "../../config/AuthUser";
import { baseURL } from "../../config/getConfig";

const BuyNow = ({ open = false, handleClose = () => {} }) => {
  const { token } = AuthUser();
  const {
    handleSubmit,
    register,
    reset,
    formState: { error, isValid },
  } = useForm();

  const onSubmit = (values) => {
    axios
      .put(
        `${baseURL}/api/account_balances/`,
        {},
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        console.log(res);
        toast.success("Successfully!");
        if (isValid) {
          reset({});
        }
      })
      .catch((err) => console.log(err));
  };

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
      <div className="relative w-full max-w-[482px] bg-white z-10 p-10 rounded-lg shadow-2xl text-[#141418]">
        <span
          className="absolute top-3 right-3 cursor-pointer"
          onClick={handleClose}
        ></span>
      </div>
      <ToastContainer autoClose={800} />
    </div>,
    document.querySelector("body")
  );
};

export default BuyNow;
