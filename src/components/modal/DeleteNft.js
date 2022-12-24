import axios from "axios";
import React from "react";
import ReactDOM from "react-dom";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CloseIcon from "../../assets/icons/CloseIcon";
import { baseURL } from "../../config/getConfig";

const DeleteNft = ({
  openDeleting = false,
  token,
  nft,
  handleCloseDeleting = () => {},
}) => {
  const navigate = useNavigate();
  const handleDeleting = async () => {
    try {
      await axios.delete(`${baseURL}/api/nfts/${nft?.id}`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
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

  if (typeof document === "undefined") return <div className="buy-now"></div>;

  return ReactDOM.createPortal(
    <div
      className={`buy-now fixed inset-0 transition-all flex items-center justify-center p-5 z-50 ${
        openDeleting ? "" : "opacity-0 invisible"
      }`}
    >
      <div
        className="overlay absolute inset-0 bg-zinc-800 bg-opacity-80"
        onClick={handleCloseDeleting}
      ></div>

      <div className="relative w-[450px] rounded-lg bg-white flex flex-col items-center justify-center">
        <div
          className={`transition-all duration-500 w-full flex flex-col bg-white z-10 p-10 rounded-lg shadow-2xl text-[#141418]`}
        >
          <span
            className="absolute top-3 right-3 cursor-pointer"
            onClick={handleCloseDeleting}
          >
            <CloseIcon color="#141418"></CloseIcon>
          </span>
          <div className="mt-5">
            <div className="flex flex-col">
              <div className="flex items-center justify-center gap-x-2">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="#d6454c"
                    className="bi bi-exclamation-triangle-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                  </svg>
                </span>
                <span className="font-semibold text-center text-[18px]">
                  Delete Item!
                </span>
              </div>
              <span className="mt-5 font-regular text-center">
                Are you sure you want to delete this item?
              </span>
            </div>
          </div>
          <div className="w-full grid grid-cols-2 gap-x-8">
            <button
              onClick={handleCloseDeleting}
              className="mt-8 inline-flex items-center justify-center px-8 py-4 font-sans font-semibold tracking-wide text-[#141418] bg-[#e9e9e9] rounded-lg h-[53px]"
            >
              Cancel
            </button>
            <button
              onClick={() => {
                handleDeleting();
              }}
              className="mt-8 inline-flex items-center justify-center px-8 py-4 font-sans font-semibold tracking-wide text-white bg-[#d6454c] rounded-lg h-[53px]"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.querySelector("body")
  );
};

export default DeleteNft;
