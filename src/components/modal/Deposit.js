import React from "react";
import ReactDOM from "react-dom";
import CurrencyInput from "react-currency-input-field";
import { useState } from "react";
import transfer from "../../assets/transfer.png";
import AuthUser from "../../config/AuthUser";
import { baseURL } from "../../config/getConfig";
import axios from "axios";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//createPortal
const Deposit = ({
  open = false,
  accountBalance,
  handleAccountBalanceChange = () => {},
  handleClose = () => {},
}) => {
  const [exchange, setExchange] = useState("");
  const { token, http } = AuthUser();
  const [isSubmit, setIsSubmit] = useState(false);

  const {
    handleSubmit,
    register,
    reset,
    formState: { error, isValid },
  } = useForm();

  const onSubmit = (values) => {
    setIsSubmit(true);
    axios
      .put(
        `${baseURL}/api/account_balances/${accountBalance.id}`,
        {
          balance: parseFloat(exchange),
        },
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
        handleAccountBalanceChange(parseFloat(exchange));
        toast.success("Successfully!");
        if (isValid) {
          reset({
            balance: "",
          });
        }
      })
      .catch((err) => console.log(err));
  };

  if (typeof document === "undefined") return <div className="modal"></div>;

  return ReactDOM.createPortal(
    <div
      className={`modal fixed inset-0 transition-all flex items-center justify-center p-5 z-50 ${
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
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="#c084fc"
            className="bi bi-x-circle-fill"
            viewBox="0 0 16 16"
          >
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
          </svg>
        </span>
        <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
          <span className="mt-4 font-bold text-[18px] tracking-normal">
            You are sending
          </span>
          <div className="mt-4 flex gap-x-3 items-center">
            <CurrencyInput
              id="input-example"
              {...register("balance")}
              name="input-name"
              placeholder="Please enter a number"
              decimalsLimit={2}
              onValueChange={(value, name) =>
                setExchange((value * 0.0008).toFixed(4))
              }
              className="border border-solid w-[300px] border-slate-200 rounded-lg py-3 px-5 outline-none  bg-transparent"
            />
            <span className="font-[500]">USD</span>
          </div>
          <div className="mt-4 flex gap-x-3 items-center">
            <img src={transfer} alt="" className="w-4 h-4 object-cover" />
            {!exchange || exchange === "NaN" ? null : (
              <span className="text-[20px] text-[#c084fc]">{exchange}</span>
            )}
            <span className="font-[500]">ETH</span>
          </div>
          <button
            type="submit"
            className={`mt-8 inline-flex items-center justify-center px-8 py-4 font-sans font-semibold tracking-wide text-white bg-[#c084fc] rounded-lg h-[53px] active:bg-[#cc9dfb] ${
              isSubmit ? "disabled:opacity-50" : ""
            }`}
          >
            A
          </button>
        </form>
      </div>
      <ToastContainer autoClose={800} />
    </div>,
    document.querySelector("body")
  );
};

export default Deposit;
