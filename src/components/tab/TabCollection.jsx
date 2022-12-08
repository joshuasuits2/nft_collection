import React from "react";
import { Tab } from "@headlessui/react";
import styled from "styled-components";
import Input from "../input/Input";
import CardListCollection from "../layout/CardListCollection";
import { ListTabs } from "../../fakeAPI/Tabs.js";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { baseURL } from "../../config/getConfig";
import CardCollection from "../layout/CardCollection";

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

const TabCollection = ({ topics }) => {
  const [tabQuery, setTabQuery] = useState("");
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await axios.get(
        `${baseURL}/api/collections?name=${tabQuery}`
      );
      setCollections(res.data.collections);
    })();
  }, []);

  return (
    <TabCollectionStyles>
      <Tab.Group>
        <div className="flex justify-between">
          <Tab.List className="flex gap-x-5">
            {topics.length > 0 &&
              topics.map((item) => (
                <Tab key={item.id}>
                  {({ selected }) => {
                    setTabQuery(item.name);
                    return (
                      <div
                        className={`px-5  h-[49px] font-[500] cursor-pointer rounded-lg ${
                          selected ? "on" : "off"
                        }`}
                      >
                        <span>{item.name}</span>
                      </div>
                    );
                  }}
                </Tab>
              ))}
          </Tab.List>
          <Input width="200px" kind="search" placeholder="Search here ..." />
        </div>
        <Tab.Panels className="mt-[80px]">
          <Tab.Panel>
            <div className="grid grid-cols-3 grid-rows-3 gap-x-[40px] gap-y-[80px]">
              {collections.length > 0 &&
                collections.map((item) => (
                  <CardCollection
                    key={item.id}
                    logo={item.url_image_logo}
                    banner={item.url_image_banner}
                    name={item.name}
                  ></CardCollection>
                ))}
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </TabCollectionStyles>
  );
};

export default TabCollection;
