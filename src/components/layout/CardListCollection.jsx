import React from "react";
import CardCollection from "./CardCollection";

const CardListCollection = () => {
  return (
    <div className="grid grid-cols-3 grid-rows-3 gap-x-[40px] gap-y-[80px]">
      <CardCollection></CardCollection>
      <CardCollection></CardCollection>
      <CardCollection></CardCollection>
      <CardCollection></CardCollection>
      <CardCollection></CardCollection>
      <CardCollection></CardCollection>
      <CardCollection></CardCollection>
      <CardCollection></CardCollection>
      <CardCollection></CardCollection>
    </div>
  );
};

export default CardListCollection;
