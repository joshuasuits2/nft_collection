import React from "react";
import Dropdown from "../../../components/dropdown/Dropdown";
import Heading from "../../../components/layout/Heading";

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

const CollectionStats = () => {
  return (
    <>
      <Heading alignItems="start">COLLECTION STATS</Heading>
      <div className="mt-[25px] flex gap-x-10">
        <Dropdown className="w-[180px]" listArr={categories}></Dropdown>
        <Dropdown className="w-[150px]" listArr={chains}></Dropdown>
      </div>
    </>
  );
};

export default CollectionStats;
