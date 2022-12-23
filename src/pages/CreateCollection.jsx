import React from "react";
import { useForm } from "react-hook-form";
import InputHookForm from "../components/input/InputHookForm";
import PageContainer from "../components/layout/PageContainer";
import DropdownHook from "../components/dropdown2/DropdownHook";
import { useState } from "react";
import AuthUser from "../config/AuthUser";
import { useNavigate } from "react-router-dom";
import addImage from "../assets/add-image.png";
import useImageUpload from "../hooks/useImageUpload";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import useAuth from "../hooks/useAuth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const schema = Yup.object({
  name: Yup.string().required("Please enter your name collection"),
  topic_id: Yup.string().required("Please select a topic"),
}).required();

const CreateCollection = () => {
  const [topics, setTopics] = useState([]);
  const { http } = AuthUser();
  const { userId } = useAuth();
  const {
    image: logo,
    setImage: setLogo,
    handleSelectImage: handleSelectLogo,
  } = useImageUpload();
  const {
    image: banner,
    setImage: setBanner,
    handleSelectImage: handleSelectBanner,
  } = useImageUpload();

  useEffect(() => {
    (async () => {
      const res = await http.get("/topics");
      setTopics(res.data.topics);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const {
    handleSubmit,
    control,
    reset,
    setValue,
    register,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const { token } = AuthUser();
  const navigate = useNavigate();
  if (!token) return navigate("/error");
  const onSubmit = (values) => {
    console.log("values: ", values);
    http
      .post("/collections", {
        ...values,
        url_image_logo: logo,
        url_image_banner: banner,
        creator_id: userId,
        owner_id: userId,
        reaction: 0,
        status: 1,
        price: 0,
      })
      .then((res) => {
        toast.success("Create Successfully!");
        setTimeout(() => {
          navigate("/create");
        }, 1500);
        if (!isValid) {
          setLogo(null);
          setBanner(null);
          reset({
            url_image_logo: "",
            url_image_banner: "",
            name: "",
            topic_id: "",
            description: "",
          });
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error("Please fill out all required fields");
      });
  };
  const handleResetValue = () => {
    console.log("Cancel");
    toast("Not done yet");
  };

  return (
    <div className="body-style">
      <PageContainer>
        <form className="flex gap-x-[100px]" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-[40%] flex-col">
            <span className="text-[20px] font-semibold">
              Create a collection
            </span>
            <p className="mt-1 text-sm font-[300]">Logo image</p>
            <div className="flex flex-col items-center -ml-[235px]">
              <label className="mt-5 cursor-pointer flex items-center justify-center border border-gray-300 bg-[#2c2c35] border-dashed w-[200px] h-[200px] rounded-full relative overflow-hidden flex-col ">
                <input
                  type="file"
                  className="hidden-input"
                  {...register("url_image_logo")}
                  accept="image/*"
                  defaultValue=""
                  onChange={handleSelectLogo}
                />
                {!logo ? (
                  <div className="flex flex-col items-center justify-center">
                    <img
                      src={addImage}
                      alt=""
                      className="w-[70px] h-[70px] object-cover"
                    />
                  </div>
                ) : (
                  <div className="w-full h-full">
                    <img
                      src={logo?.preview}
                      alt=""
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                )}
              </label>
              {errors?.url_image_logo && (
                <span className="mt-8 text-sm text-red-500 ">Please</span>
              )}
            </div>
            <div className="mt-[146px] flex flex-col gap-2 ">
              <label htmlFor="name">Name Collection</label>
              <InputHookForm
                className="bg-[#2c2c35]"
                style={{ color: "white" }}
                name="name"
                control={control}
                placeholder={`e. g. "Clone X"`}
                id="name"
              />
              {errors?.name && (
                <span className="mt-2 text-sm text-red-500 ">
                  {errors?.name?.message}
                </span>
              )}
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
          </div>
          <div className="flex flex-[60%] flex-col mt-[30px]">
            <div>
              <p className="text-sm font-[300]">Banner image</p>
              <div>
                <label className="mt-5 cursor-pointer flex items-center justify-center border border-gray-300 bg-[#2c2c35] border-dashed w-[550px] h-[300px] rounded-lg relative overflow-hidden flex-col ">
                  <input
                    type="file"
                    className="hidden-input"
                    accept="image/*"
                    {...register("url_image_banner")}
                    onChange={handleSelectBanner}
                  />
                  {!banner ? (
                    <div className="flex flex-col items-center justify-center">
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
                      <span className="mt-3">Select a image to upload</span>
                    </div>
                  ) : (
                    <div className="w-full h-full">
                      <img
                        src={banner?.preview}
                        alt=""
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                  )}
                </label>
                {errors?.url_image_banner && !banner && (
                  <span className="mt-8 text-sm text-red-500 ">
                    {errors?.url_image_banner?.message}
                  </span>
                )}
              </div>
            </div>
            <div className="mt-[50px] w-[470px]">
              <div className="flex flex-col gap-2">
                <label htmlFor="topic">Topic</label>
                <DropdownHook
                  className="w-[470px] h-[56px]"
                  control={control}
                  name="topic_id"
                  data={topics}
                  dropdownLabel="Select a topic"
                  setValue={setValue}
                />
                {errors?.topic_id && (
                  <span className="mt-2 text-sm text-red-500 ">
                    {errors?.topic_id?.message}
                  </span>
                )}
              </div>
            </div>
            <div className="mt-10 flex items-center justify-start gap-x-10">
              <button
                type="button"
                onClick={handleResetValue}
                className="inline-flex items-center justify-center px-8 py-4 font-medium  tracking-wide text-[#151415] bg-white rounded-lg h-[53px]"
              >
                Cancel
              </button>
              <button className="inline-flex items-center justify-center px-8 py-4 font-medium tracking-wide text-white bg-[#c68afc] rounded-lg h-[53px]">
                Create
              </button>
            </div>
          </div>
        </form>
        <div className="h-[200px] w-full"></div>
      </PageContainer>
      <ToastContainer autoClose={800} />
    </div>
  );
};

export default CreateCollection;
