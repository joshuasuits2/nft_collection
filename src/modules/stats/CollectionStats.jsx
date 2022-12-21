import React from "react";
import Dropdown from "../../components/dropdown/Dropdown";
import Heading from "../../components/layout/Heading";
import StatsCollection from "../../components/layout/StatsCollection";
import styled from "styled-components";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { baseURL } from "../../config/getConfig";
import { useNavigate } from "react-router-dom";
import slugify from "slugify";

const categories = [
  { id: 1, name: "All categories" },
  { id: 2, name: "Music" },
  { id: 3, name: "Art" },
  { id: 4, name: "Photography" },
  { id: 5, name: "Sport" },
  { id: 6, name: "Virtual Worlds" },
  { id: 7, name: "More" },
];

const chains = [
  { id: 1, name: "All chain" },
  { id: 2, name: "Ethereum" },
  { id: 3, name: "Solana" },
  { id: 4, name: "Polygon" },
  { id: 5, name: "Klaytn" },
];

const CollectionStatsStyles = styled.div`
  .stats-item:nth-child(odd) {
    background-color: #1d1922;
  }
`;

const CollectionStats = () => {
  const [collections, setCollections] = useState([]);
  useEffect(() => {
    (async () => {
      const res = await axios.get(`${baseURL}/api/collections/top`);
      console.log(res?.data?.collections);
      setCollections(res?.data?.collections);
    })();
  }, []);
  return (
    <CollectionStatsStyles>
      <Heading alignItems="start">COLLECTION STATS</Heading>
      <div className="mt-[25px] mb-[101px] flex gap-x-10 relative">
        <Dropdown
          className="w-[180px] absolute top-0 left-0"
          listArr={categories}
        ></Dropdown>
        <Dropdown
          className="w-[150px] absolute left-[220px]"
          listArr={chains}
        ></Dropdown>
      </div>
      <div className="mt-[45px] font-[600] text-[14px]">
        <div className="header flex opacity-70">
          <div className="flex-1 flex items-center justify-center">Rank</div>
          <div className="flex-[3]">Collection</div>
          <div className="flex-1 flex items-center justify-center">Volume</div>
          <div className="flex-1 flex items-center justify-center">
            % Change
          </div>
          <div className="flex-1 flex items-center justify-center">
            Floor Price
          </div>
          <div className="flex-1 flex items-center justify-center">Sales</div>
        </div>
        {/* Data Collection */}
        <div className="body mt-10 list">
          {collections.length > 0 &&
            collections.map((item, index) => (
              <StatsCollection
                index={index + 1}
                logo={`${baseURL}/storage/logoImages/${item?.url_image_logo}`}
                key={item.id}
                id={item.id}
                volume={item.volume}
                className="stats-item"
                name={item.name}
              />
            ))}
        </div>
      </div>
    </CollectionStatsStyles>
  );
};

export default CollectionStats;
