import React from "react";

const LoadingSkeleton = ({ className, ...props }) => {
  return (
    <div
      className={`skeleton ${className}`}
      style={{
        height: props.height,
        width: props.width || "100%",
        borderRadius: props.radius,
      }}
    ></div>
  );
};

export default LoadingSkeleton;
