import React from "react";
import CardList from "../../components/layout/CardList";
import Heading from "../../components/layout/Heading";
import { ListCategory } from "../../fakeAPI/Categories";

const AllNFTs = ({ pageRefs }) => {
  return (
    <div
      className="mt-[90px]"
      ref={(e) => (pageRefs.current = { ...pageRefs.current, allNFT: e })}
    >
      <Heading alignItems={"start"}>ALL NFTs</Heading>
      <CardList data={ListCategory}></CardList>
      <CardList data={ListCategory}></CardList>
      <CardList data={ListCategory}></CardList>
    </div>
  );
};

export default AllNFTs;
