import React from "react";
import styled from "styled-components";
import { useState, useRef } from "react";

const InputStyle = styled.div`
  position: relative;
  .search-input {
    width: ${(props) => props.width || "300px"};
  }
`;

const InputEmail = ({
  searchValue = "",
  className = "",
  placeholder = "",
  type = "text",
  kind = "",
  ...props
}) => {
  const [icon, setIcon] = useState(false);
  const ref = useRef(null);

  return (
    <InputStyle className={className} {...props}>
      <input
        type="text"
        defaultValue={""}
        ref={ref}
        id="input-text"
        kind={kind}
        placeholder={placeholder}
        className={`search-input h-[53px] border border-[#9b9b9bce] border-solid rounded-lg py-[10px] px-5 pr-[55px] outline-none bg-transparent font-light text-[14px] text-white tracking-[0.02em] 
focus:border-purple-400 transition-all 
         `}
      />
    </InputStyle>
  );
};

export default InputEmail;
