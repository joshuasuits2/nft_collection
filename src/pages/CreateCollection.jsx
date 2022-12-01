import React from "react";
import { useForm } from "react-hook-form";
import InputHookForm from "../components/input/InputHookForm";
import PageContainer from "../components/layout/PageContainer";
import DropdownHook from "../components/dropdown2/DropdownHook";
import { useState } from "react";
import AuthUser from "../config/AuthUser";
import PageNotFound from "./PageNotFound";
import { useNavigate } from "react-router-dom";
import addImage from "../assets/add-image.png";
const CreateCollection = () => {
  const [collections, setCollections] = useState([]);
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
          className="flex pb-10 gap-x-[100px]"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-[40%] flex-col">
            <span className="text-[20px] font-semibold">
              Create a collection
            </span>
            <div>
              <p className="mt-1 text-sm font-[300]">Logo image</p>
              <label className="mt-5 cursor-pointer flex items-center justify-center border border-gray-300 bg-[#2c2c35] border-dashed w-[200px] min-h-[200px] rounded-full relative overflow-hidden flex-col ">
                <input
                  type="file"
                  className="opacity-0 "
                  {...register("logo")}
                />
                <div className="upload absolute w-[60px] h-[60px]">
                  <img src={addImage} alt="" className="w-full h-full" />
                </div>
              </label>
            </div>

            <div className="mt-[150px] w-[470px]">
              <div className="mt-4 flex flex-col gap-2">
                <label htmlFor="name-collection">Name Collection</label>
                <InputHookForm
                  className="bg-[#2c2c35]"
                  style={{ color: "white" }}
                  name="name-collection"
                  control={control}
                  placeholder={`e. g. "Clone X"`}
                  id="name-collection"
                />
              </div>
            </div>
            <div className="mt-10 flex items-center justify-start gap-x-10">
              <button className="inline-flex items-center justify-center px-8 py-4 font-sans font-semibold tracking-wide text-[#151415] bg-white rounded-lg h-[53px]">
                Cancel
              </button>
              <button className="inline-flex items-center justify-center px-8 py-4 font-sans font-semibold tracking-wide text-white bg-[#c68afc] rounded-lg h-[53px]">
                Create
              </button>
            </div>
          </div>
          <div className="flex flex-[60%] flex-col mt-[30px]">
            <div>
              <p className="text-sm font-[300]">Banner image</p>
              <div>
                <label className="mt-5 cursor-pointer flex items-center justify-center border border-gray-300 bg-[#2c2c35] border-dashed w-[550px] min-h-[300px] rounded-lg relative overflow-hidden flex-col ">
                  <input
                    type="file"
                    className="opacity-0 "
                    {...register("banner")}
                  />
                  <div className="upload absolute w-[60px] h-[60px]">
                    <img src={addImage} alt="" className="w-full h-full" />
                  </div>
                </label>
              </div>
              <div className="mt-[70px] flex flex-col gap-2">
                <label htmlFor="topic">Topic</label>
                <DropdownHook
                  className="w-[470px] h-[56px]"
                  control={control}
                  setValue={setValue}
                  name="topic"
                  data={collections}
                  dropdownLabel="Select topic"
                ></DropdownHook>
              </div>
            </div>
          </div>
        </form>
      </PageContainer>
    </div>
  );
};

export default CreateCollection;
