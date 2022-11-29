import React from "react";
import { useController, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useEffect } from "react";
import InputHook from "../input/InputForm";
import { Link } from "react-router-dom";

const schema = Yup.object({
  username: Yup.string().required("Please enter your username"),
  password: Yup.string()
    .min(8, "Your password must be at least 8 characters")
    .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, {
      message: "Must have at least 1 letter, 1 number and 1 special character",
    })
    .required("Please enter your password"),
}).required();

const LoginHookForm = () => {
  const {
    handleSubmit,
    control,
    reset,
    setFocus,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitHandler = async (data) => {
    console.log(data);
    if (isValid) {
      reset({
        username: "",
        password: "",
      });
    }
  };
  useEffect(() => {
    setFocus("username");
  }, [setFocus]);

  return (
    <div className="w-full max-w-[450px] mx-auto shadow-lg text-[14px]">
      <form
        onSubmit={handleSubmit(onSubmitHandler)}
        autoComplete="off"
        className="flex flex-col gap-4"
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="username">Username</label>
          <InputHook
            name="username"
            control={control}
            placeholder="Enter your user name"
            id="username"
          />
          {errors?.username && (
            <p className="text-sm text-red-500">{errors?.username?.message}</p>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="password">Password</label>
          <InputHook
            type="password"
            name="password"
            control={control}
            placeholder="Enter your password"
            id="password"
          />
          {errors?.password && (
            <p className="text-sm text-red-500">{errors?.password?.message}</p>
          )}
        </div>
        <p>
          Don't have an account?{" "}
          <Link to="/signup">
            <strong className="cursor-pointer text-[#c68afc]">Sign up</strong>
          </Link>
        </p>
        <button
          type="submit"
          className="mt-6 w-full p-4 bg-[#c68afc] text-white font-semibold rounded-lg active:bg-opacity-90"
        >
          Sign In
        </button>
      </form>
    </div>
  );
};
export default LoginHookForm;
