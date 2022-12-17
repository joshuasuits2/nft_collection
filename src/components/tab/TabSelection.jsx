import React from "react";
import { Tab } from "@headlessui/react";
import Collection from "../layout/Collection";
import styled from "styled-components";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { baseURL } from "../../config/getConfig";

const ListData = [
  {
    id: "1",
    tab: "24h",
  },
  {
    id: "2",
    tab: "A week",
  },
  {
    id: "3",
    tab: "A month",
  },
];

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
  const [collections, setCollections] = useState([]);
  useEffect(() => {
    (async () => {
      const res = await axios.get(`${baseURL}/api/collections/top`);
      setCollections(res?.data.collections);
    })();
  }, []);
  return (
    <TabSelectionStyles>
      <Tab.Group>
        <Tab.List className="flex gap-[40px] mt-[25px]">
          {ListData.length > 0 &&
            ListData.map((item) => (
              <Tab key={item.id}>
                {({ selected }) => (
                  <div
                    className={`w-[105px] h-[49px] font-[500] cursor-pointer rounded-lg ${
                      selected ? "on" : "off"
                    }`}
                  >
                    <span>{item?.tab}</span>
                  </div>
                )}
              </Tab>
            ))}
        </Tab.List>
        <Tab.Panels className="mt-[45px]">
          <Tab.Panel>
            <div className="grid grid-cols-3 grid-rows-4 gap-y-[25px] gap-x-[35px]">
              {collections.length > 0 &&
                collections
                  .filter((item, index) => index <= 8)
                  .map((item) => (
                    <Collection
                      key={item.id}
                      name={item.name}
                      logo={`${baseURL}/storage/logoImages/${item.url_image_logo}`}
                      volume={item.volume}
                    />
                  ))}
            </div>
          </Tab.Panel>
          <Tab.Panel>
            <div className="grid grid-cols-3 grid-rows-4 gap-y-[25px] gap-x-[35px]"></div>
          </Tab.Panel>
          <Tab.Panel>
            <div className="grid grid-cols-3 grid-rows-4 gap-y-[25px] gap-x-[35px]"></div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </TabSelectionStyles>
  );
};

export default TabSelection;
