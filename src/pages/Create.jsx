import React from "react";
import { useForm } from "react-hook-form";
import InputHookForm from "../components/input/InputHookForm";
import PageContainer from "../components/layout/PageContainer";
import DropdownHook from "../components/dropdown2/DropdownHook";
import { useState } from "react";
import AuthUser from "../config/AuthUser";
import PageNotFound from "./PageNotFound";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
const data = [
  {
    id: 1,
    value: "John",
    text: "John",
  },
  {
    id: 2,
    value: "Son",
    text: "Son",
  },
];

const Create = () => {
  const [collections, setCollections] = useState([]);

  const [cryptos, setCryptos] = useState([]);
  const [showCol, setShowCol] = useState(false);
  const {
    handleSubmit,
    control,
    reset,
    setValue,
    register,
    setFocus,
    formState: { errors, isValid },
  } = useForm();

  const onSubmit = (values) => {
    console.log(values);
  };
  const { token } = AuthUser();
  const navigate = useNavigate();
  if (!token) return navigate("/error");
  return (
    <div className="body-style">
      <PageContainer>
        <form
          className="flex gap-x-[150px] pb-10"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-[40%] flex-col">
            <span className="text-[20px] font-semibold">Create new item</span>
            <span className="mt-3 font-[400]">Upload file</span>
            <p className="mt-1 text-sm font-[300]">
              Drag or choose your file to upload
            </p>
            <label className="mt-5 cursor-pointer flex items-center justify-center border border-gray-300 bg-[#2c2c35] border-dashed w-[420px] min-h-[480px] rounded-lg relative overflow-hidden flex-col ">
              <input
                type="file"
                className="opacity-0 "
                {...register("image")}
              />
              <p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  fill="#c68afc"
                  className="bi bi-cloud-arrow-up-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 2a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 6.095 0 7.555 0 9.318 0 11.366 1.708 13 3.781 13h8.906C14.502 13 16 11.57 16 9.773c0-1.636-1.242-2.969-2.834-3.194C12.923 3.999 10.69 2 8 2zm2.354 5.146a.5.5 0 0 1-.708.708L8.5 6.707V10.5a.5.5 0 0 1-1 0V6.707L6.354 7.854a.5.5 0 1 1-.708-.708l2-2a.5.5 0 0 1 .708 0l2 2z" />
                </svg>
              </p>
              <span className="mt-3">Select file to upload</span>
            </label>
            <div className="mt-[22px] flex flex-col gap-2">
              <label htmlFor="crypto">Crypto</label>
              <DropdownHook
                className="w-[450px]"
                control={control}
                setValue={setValue}
                name="crypto"
                data={cryptos}
                dropdownLabel="Select crypto"
              ></DropdownHook>
            </div>
          </div>
          <div className="flex flex-[60%] flex-col mt-10">
            <div className="flex flex-col gap-2">
              <label htmlFor="name">Name NFT</label>
              <InputHookForm
                className="w-[550px] bg-[#2c2c35]"
                style={{ color: "white" }}
                name="name"
                control={control}
                placeholder={`e. g. "Crypto Funk"`}
                id="name"
              />
            </div>
            <div className="mt-8 flex flex-col gap-2">
              <label htmlFor="collection">Collection</label>
              <DropdownHook
                control={control}
                setValue={setValue}
                name="collection"
                data={data}
                dropdownLabel="Select name collection"
              ></DropdownHook>
            </div>
            {data.length === 0 && (
              <span className="mt-4 text-sm text-[#c68afc]">
                You must have at least one collection
              </span>
            )}
            <div className="inline-block mt-5">
              <Link to="/create-collection">
                <div className="inline-flex gap-x-2 items-center text-[#fbff2a]">
                  <span className="inline-block">Add new collection</span>
                  <span className="inline-block">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-plus-circle-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
                    </svg>
                  </span>
                </div>
              </Link>
            </div>

            <div className="mt-8 flex flex-col gap-2">
              <label htmlFor="description">Description</label>
              <textarea
                {...register("description")}
                id="description"
                placeholder={`e. g. "This is very limited item"`}
                className="w-[550px] h-[200px] bg-[#2c2c35] p-4 mb-2 border border-soli text-white border-gray-200 rounded-lg transition-all resize-none"
              ></textarea>
            </div>
            <div className="mt-8 flex flex-col gap-2">
              <label htmlFor="price">Price</label>
              <InputHookForm
                className="w-[550px] bg-[#2c2c35]"
                style={{ color: "white" }}
                name="price"
                control={control}
                placeholder={`Enter price for item (ETH)`}
                id="price"
              />
            </div>
            <div className="mt-10 flex items-center justify-start gap-x-10">
              <button className="inline-flex items-center justify-center px-8 py-4 font-sans font-semibold tracking-wide text-[#151415] bg-white rounded-lg h-[53px]">
                Cancel
              </button>
              <button className="inline-flex items-center justify-center px-8 py-4 font-sans font-semibold tracking-wide text-white bg-[#c68afc] rounded-lg h-[53px]">
                Create Item
              </button>
            </div>
          </div>
        </form>
      </PageContainer>
    </div>
  );
};

export default Create;
