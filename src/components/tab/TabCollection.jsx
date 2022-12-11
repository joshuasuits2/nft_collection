import React from "react";
import { Tab } from "@headlessui/react";
import styled from "styled-components";
import Input from "../input/Input";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { baseURL } from "../../config/getConfig";
import CardCollection from "../layout/CardCollection";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

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

const TabCollection = ({ topics, loadingTopics, ...props }) => {
  const [tabQuery, setTabQuery] = useState("Music");
  const [collections, setCollections] = useState([]);
  const [loadingCollection, setLoadingCollection] = useState(true);
  useEffect(() => {
    setLoadingCollection(true);
    (async () => {
      const res = await axios.get(
        `${baseURL}/api/collections?topicName=${tabQuery}`
      );
      setCollections(res?.data.collections);
      setLoadingCollection(false);
    })();
  }, [tabQuery]);

  return (
    <TabCollectionStyles>
      <Tab.Group>
        <div className="flex justify-between">
          <Tab.List className="flex gap-x-5">
            {topics?.length > 0 &&
              !loadingTopics &&
              topics?.map((item) => (
                <Tab key={item.id} onClick={() => setTabQuery(item.name)}>
                  {({ selected }) => {
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
            {loadingTopics &&
              Array(8)
                .fill(0)
                .map((item, index) => (
                  <div key={index}>
                    <SkeletonTheme baseColor="#202020" highlightColor="#444">
                      <Skeleton width={100} height={40} />
                    </SkeletonTheme>
                  </div>
                ))}
          </Tab.List>
          {!loadingTopics ? (
            <Input width="200px" kind="search" placeholder="Search here ..." />
          ) : (
            <SkeletonTheme baseColor="#202020" highlightColor="#444">
              <Skeleton width={200} height={40} />
            </SkeletonTheme>
          )}
        </div>

        <Tab.Panels className="mt-[80px]">
          {topics?.length > 0 &&
            topics.map((item) => (
              <Tab.Panel key={item.id}>
                <div className="grid grid-cols-3 gap-x-[40px] gap-y-[80px]">
                  {collections?.length > 0 &&
                    !loadingCollection &&
                    collections?.map((card) => (
                      <CardCollection
                        loading={loadingCollection}
                        key={card.id}
                        logo={card.url_image_logo}
                        banner={card.url_image_banner}
                        name={card.name}
                      />
                    ))}
                  {loadingCollection &&
                    Array(6)
                      .fill(0)
                      .map((item, index) => (
                        <div
                          key={index}
                          style={{
                            position: "relative",
                            display: "flex",
                            flexDirection: " column",
                            height: "360px",
                          }}
                        >
                          <div className="collection-image h-[310px] w-full z-0  absolute">
                            <SkeletonTheme
                              baseColor="#202020"
                              highlightColor="#444"
                            >
                              <Skeleton
                                width={"100%"}
                                height={"100%"}
                                style={{ borderRadius: "8px" }}
                              />
                            </SkeletonTheme>
                          </div>
                          <div className="ml-5 mt-auto flex items-end w-full">
                            <div className="rounded-full h-[100px] w-[100px] flex items-end relative z-[2] cursor-pointer">
                              <SkeletonTheme
                                baseColor="#202020"
                                highlightColor="#444"
                              >
                                <Skeleton width={100} height={100} circle />
                              </SkeletonTheme>
                            </div>
                            <div className="relative z-[2] mb-2 ml-3 font-bold flex gap-x-[10px] items-center ">
                              <span>
                                <SkeletonTheme
                                  baseColor="#202020"
                                  highlightColor="#444"
                                >
                                  <Skeleton width={200} height={20} />
                                </SkeletonTheme>
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                </div>
              </Tab.Panel>
            ))}
        </Tab.Panels>
      </Tab.Group>
    </TabCollectionStyles>
  );
};

export default TabCollection;
