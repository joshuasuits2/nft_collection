import React from "react";
import { Tab } from "@headlessui/react";
import styled from "styled-components";
import Input from "../input/Input";
import CardListCollection from "../layout/CardListCollection";

const TabCollectionStyles = styled.div`
  margin-top: 50px;
  .off {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 0.5px solid transparent;
    background-color: #240e38;
    span {
      opacity: 0.7;
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
    background-color: #421f63;
    border: 0.5px solid #bb71fa;
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

const TabCollection = () => {
  return (
    <TabCollectionStyles>
      <Tab.Group>
        <div className="flex justify-between">
          <Tab.List className="flex gap-x-5">
            <Tab>
              {({ selected }) => (
                <div
                  className={`w-[105px]  h-[49px] font-[500] cursor-pointer rounded-lg ${
                    selected ? "on" : "off"
                  }`}
                >
                  <span>Trending</span>
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
                  <span>Top</span>
                </div>
              )}
            </Tab>
            <Tab>
              {({ selected }) => (
                <div
                  className={`px-5 py-3 font-[500] cursor-pointer rounded-lg ${
                    selected ? "on" : "off"
                  }`}
                >
                  <span>Music</span>
                </div>
              )}
            </Tab>
            <Tab>
              {({ selected }) => (
                <div
                  className={`px-5 py-3 font-[500] cursor-pointer rounded-lg ${
                    selected ? "on" : "off"
                  }`}
                >
                  <span>Art</span>
                </div>
              )}
            </Tab>
            <Tab>
              {({ selected }) => (
                <div
                  className={`px-5 py-3 font-[500] cursor-pointer rounded-lg ${
                    selected ? "on" : "off"
                  }`}
                >
                  <span>Photography</span>
                </div>
              )}
            </Tab>
            <Tab>
              {({ selected }) => (
                <div
                  className={`px-5 py-3 font-[500] cursor-pointer rounded-lg ${
                    selected ? "on" : "off"
                  }`}
                >
                  <span>Sport</span>
                </div>
              )}
            </Tab>
            <Tab>
              {({ selected }) => (
                <div
                  className={`px-5 py-3 font-[500] cursor-pointer rounded-lg ${
                    selected ? "on" : "off"
                  }`}
                >
                  <span>Virtual Worlds</span>
                </div>
              )}
            </Tab>
            <Tab>
              {({ selected }) => (
                <div
                  className={`px-5 py-3 font-[500] cursor-pointer rounded-lg ${
                    selected ? "on" : "off"
                  }`}
                >
                  <span>More</span>
                </div>
              )}
            </Tab>
          </Tab.List>
          <Input
            width="200px"
            kind="search"
            placeholder="Search here ..."
          ></Input>
        </div>
        <Tab.Panels className="mt-[80px]">
          <Tab.Panel>
            <CardListCollection></CardListCollection>
          </Tab.Panel>
          <Tab.Panel>
            <CardListCollection></CardListCollection>
          </Tab.Panel>
          <Tab.Panel>
            <CardListCollection></CardListCollection>
          </Tab.Panel>
          <Tab.Panel>
            <CardListCollection></CardListCollection>
          </Tab.Panel>
          <Tab.Panel>
            <CardListCollection></CardListCollection>
          </Tab.Panel>
          <Tab.Panel>
            <CardListCollection></CardListCollection>
          </Tab.Panel>
          <Tab.Panel>
            <CardListCollection></CardListCollection>
          </Tab.Panel>
          <Tab.Panel>
            <CardListCollection></CardListCollection>
          </Tab.Panel>
          <Tab.Panel>
            <CardListCollection></CardListCollection>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </TabCollectionStyles>
  );
};

export default TabCollection;
