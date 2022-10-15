import React, { useState } from "react";
import Heading from "../../components/layout/Heading";
import TabCollection from "../../components/tab/TabCollection";

const ExploreCollection = () => {
  return (
    <div className="mt-[140px]">
      <Heading alignItems="left">EXPLORE COLLECTION</Heading>
      <TabCollection></TabCollection>
    </div>
  );
};

export default ExploreCollection;
