import React from "react";
import { useController } from "react-hook-form";

const InputHook = ({ control, ...props }) => {
  const { field } = useController({
    control,
    name: props.name,
    defaultValue: "",
  });
  return (
    <input
      className="p-4 mb-2 border border-soli text-[#141418] border-gray-200 rounded-lg focus:border-blue-500 transition-all"
      {...field}
      {...props}
    />
  );
};

export default InputHook;
