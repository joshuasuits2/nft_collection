import React, { useState } from "react";
import { useWatch } from "react-hook-form";
import useClickOutSide from "../../hooks/useClickOutSide";

const DropdownHook = ({
  control,
  setValue,
  name,
  data,
  dropdownLabel,
  className,
}) => {
  const { show, setShow, nodeRef } = useClickOutSide();
  useWatch({
    control,
    name: "job",
    defaultValue: "",
  });

  const handleClickDropdownItem = (e) => {
    setValue(name, e.target.dataset.value);
    setShow(false);
    setLabel(e.target.textContent);
  };
  const [label, setLabel] = useState(dropdownLabel);
  return (
    <div className="relative mb-2 " ref={nodeRef}>
      <div
        onClick={() => setShow(!show)}
        className={`p-5 rounded-lg  w-[550px] bg-[#2c2c35] flex items-center cursor-pointer ${className}`}
      >
        <span className="text-[#9ca3af]">{label}</span>
      </div>
      <div
        className={`absolute top-[110%] left-0 w-[550px] rounded-lg border bg-[#fff] ${
          show ? "" : "opacity-0 invisible"
        }`}
      >
        {data.map((item) => (
          <div
            key={item.id}
            className="p-5 cursor-pointer hover:bg-gray-200 hover:rounded-lg"
            onClick={handleClickDropdownItem}
            data-value={item.value}
          >
            <span className="text-[#141418]">{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DropdownHook;
