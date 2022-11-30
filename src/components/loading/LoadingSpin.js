import React from "react";
import { useState } from "react";

const LoadingSpin = () => {
  const [loadingSpin, setLoadingSpin] = useState(false);
  return (
    <div>
      {loadingSpin ? (
        <div className="w-5 h-5 rounded-lg border-solid border-purple-500 border-[4px]"></div>
      ) : null}
    </div>
  );
};

export default LoadingSpin;
