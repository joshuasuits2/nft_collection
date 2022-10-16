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

const Dropdown = ({ listArr = { listArr } }) => {
  const [selectedPerson, setSelectedPerson] = useState(listArr[0]);
  const [selectArrow, setSelectArrow] = useState(true);
  return (
    <DropdownStyles>
      <div className="w-[180px] text-[15px] font-[500]">
        <Listbox value={selectedPerson} onChange={setSelectedPerson}>
          <Listbox.Button
            className="relative border border-solid border-purple-400 rounded-lg w-full py-4 pl-5 pr-4 itemText text-start flex justify-between items-center"
            onClick={() => setSelectArrow(false)}
          >
            {selectedPerson.name}
            {selectArrow ? (
              <ArrowUpDown state={true}></ArrowUpDown>
            ) : (
              <ArrowUpDown state={false}></ArrowUpDown>
            )}
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="themeColor mt-[15px] border border-solid border-purple-400 px-2 pb-[10px] pt-[10px]">
              {listArr.map((person) => (
                <Listbox.Option className="" key={person.id} value={person}>
                  {({ active }) => (
                    <li className="w-full relative h-[50px] flex items-center ">
                      <div
                        className={`
                  absolute
                  option
                  w-full h-full flex items-center 
                 ${active ? "on" : "off"}`}
                      ></div>
                      <span className="itemText absolute pl-[13px]">
                        {person.name}
                      </span>
                    </li>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </Listbox>
      </div>
    </DropdownStyles>
  );
};

export default Dropdown;
