import React from "react";
import { useState } from "react";

const LoadingSpin = () => {
  return (
    <div className="w-5 h-5 rounded-full border-solid transition-all border-r-transparent animate-spin border-white border-[4px]"></div>
  );
};

export default LoadingSpin;
