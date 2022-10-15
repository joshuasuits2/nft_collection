import React from "react";
import CardList from "../../components/layout/CardList";
import Heading from "../../components/layout/Heading";

const AllNFTs = ({ pageRefs }) => {
  return (
    <div
      className="mt-[90px]"
      ref={(e) => (pageRefs.current = { ...pageRefs.current, allNFT: e })}
    >
      <Heading alignItems={"start"}>ALL NFTs</Heading>
      <CardList></CardList>
      <CardList></CardList>
      <CardList></CardList>
    </div>
  );
};

export default AllNFTs;
