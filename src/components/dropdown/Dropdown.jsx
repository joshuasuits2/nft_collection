import React, { Fragment } from "react";
import styled from "styled-components";
import { Listbox, Transition } from "@headlessui/react";
import { useState } from "react";
import { ArrowUpDown } from "../icon";

const DropdownStyles = styled.div`
  .itemText {
    background: linear-gradient(180deg, #ddb9ff 0%, #a749f8 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    opacity: 1 !important;
  }
  .list-border {
    position: relative;
    &:after {
      z-index: 0;
      content: "";
      position: absolute;
      inset: 0;
      border: 1px solid transparent;
      border-radius: 12px;
      background: linear-gradient(
          93deg,
          rgba(235, 235, 235, 0) -6.21%,
          rgba(235, 235, 235, 0.33) -6.2%,
          rgba(219, 219, 219, 0.14) 118.18%
        )
        border-box;
      -webkit-mask: linear-gradient(#fff 0 0) padding-box,
        linear-gradient(#fff 0 0);
      -webkit-mask-composite: xor;
      mask-composite: exclude;
    }
  }
  .themeColor {
    background: linear-gradient(
      180deg,
      rgba(52, 51, 53, 0.5) 0%,
      rgba(64, 59, 69, 0.5) 100%
    );
    backdrop-filter: blur(50px);
    border-radius: 8px;
  }
  .on {
    color: red;
    background: linear-gradient(
      91.03deg,
      #ffffff -6.88%,
      rgba(255, 255, 255, 0.72) 109.82%
    );
    border-radius: 8px;
    opacity: 0.1;
  }
`;

const Dropdown = ({ listArr, className = "" }) => {
  const [selected, setSelected] = useState(listArr[0]);
  return (
    <DropdownStyles>
      <div className={`text-[15px] font-[500] ${className}`}>
        <Listbox value={selected} onChange={setSelected}>
          {({ open }) => (
            <>
              {open && (
                <div>
                  <Listbox.Button className="relative border border-solid border-purple-400 rounded-lg w-full py-4 pl-5 pr-4 itemText text-start flex justify-between items-center">
                    {selected.name}
                    <ArrowUpDown state={false}></ArrowUpDown>
                  </Listbox.Button>
                  <Transition
                    as={Fragment}
                    leave="transition ease-in duration-250"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Listbox.Options className="themeColor mt-[15px] list-border px-2 pb-[10px] pt-[10px]">
                      {listArr.map((item) => (
                        <Listbox.Option key={item.id} value={item}>
                          {({ active }) => (
                            <div className="w-full relative h-[50px] flex items-center ">
                              <div
                                className={`
                      absolute
                      option
                      z-10
                      w-full h-full flex items-center
                     ${active ? "on" : "off"}`}
                              ></div>
                              <span className="itemText absolute pl-[13px]">
                                {item.name}
                              </span>
                            </div>
                          )}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Transition>
                </div>
              )}
              {!open && (
                <Listbox.Button className="relative border border-solid border-purple-400 rounded-lg w-full py-4 pl-5 pr-4 itemText text-start flex justify-between items-center ">
                  {selected.name}
                  <ArrowUpDown state={true}></ArrowUpDown>
                </Listbox.Button>
              )}
            </>
          )}
        </Listbox>
      </div>
    </DropdownStyles>
  );
};

export default Dropdown;
