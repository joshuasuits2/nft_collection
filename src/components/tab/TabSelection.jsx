import React from "react";
import { Tab } from "@headlessui/react";
import Collection from "../layout/Collection";
import styled from "styled-components";

const TabSelectionStyles = styled.div`
  .off {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 0.5px solid #bb71fa;
    span {
      background: linear-gradient(180deg, #ddb9ff 0%, #a749f8 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
  }
  .on {
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(180deg, #ddb9ff 0%, #a749f8 100%);
    span {
      background: linear-gradient(
        91.03deg,
        #ffffff -6.88%,
        rgba(255, 255, 255, 0.72) 109.82%
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
  }
`;

const TabSelection = () => {
  return (
    <TabSelectionStyles>
      <Tab.Group>
        <Tab.List className="flex gap-[40px] mt-[25px]">
          <Tab>
            {({ selected }) => (
              <div
                className={`w-[105px] h-[49px] font-[500] cursor-pointer rounded-lg ${
                  selected ? "on" : "off"
                }`}
              >
                <span>24h</span>
              </div>
            )}
          </Tab>

          <Tab>
            {({ selected }) => (
              <div
                className={`w-[105px] h-[49px] font-[500] cursor-pointer rounded-lg ${
                  selected ? "on" : "off"
                }`}
              >
                <span>A week</span>
              </div>
            )}
          </Tab>

          <Tab>
            {({ selected }) => (
              <div
                className={`w-[105px] h-[49px] font-[500] cursor-pointer rounded-lg ${
                  selected ? "on" : "off"
                }`}
              >
                <span>A month</span>
              </div>
            )}
          </Tab>
        </Tab.List>
        <Tab.Panels className="mt-[45px]">
          <Tab.Panel>
            <div className="grid grid-cols-3 grid-rows-4 gap-y-[25px] gap-x-[35px]">
              <Collection></Collection>
              <Collection></Collection>
              <Collection></Collection>
              <Collection></Collection>
              <Collection></Collection>
              <Collection></Collection>
              <Collection></Collection>
              <Collection></Collection>
              <Collection></Collection>
              <Collection></Collection>
              <Collection></Collection>
              <Collection></Collection>
            </div>
          </Tab.Panel>
          <Tab.Panel>
            <div className="grid grid-cols-3 grid-rows-4 gap-y-[25px] gap-x-[35px]">
              <Collection></Collection>
              <Collection></Collection>
              <Collection></Collection>
              <Collection></Collection>
              <Collection></Collection>
              <Collection></Collection>
              <Collection></Collection>
              <Collection></Collection>
              <Collection></Collection>
              <Collection></Collection>
              <Collection></Collection>
              <Collection></Collection>
            </div>
          </Tab.Panel>
          <Tab.Panel>
            <div className="grid grid-cols-3 grid-rows-4 gap-y-[25px] gap-x-[35px]">
              <Collection></Collection>
              <Collection></Collection>
              <Collection></Collection>
              <Collection></Collection>
              <Collection></Collection>
              <Collection></Collection>
              <Collection></Collection>
              <Collection></Collection>
              <Collection></Collection>
              <Collection></Collection>
              <Collection></Collection>
              <Collection></Collection>
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </TabSelectionStyles>
  );
};

export default TabSelection;
