import React from "react";

const Stack = ({ children, direction = "row" }) => {
  return (
    <div
      className={`${
        direction === "row"
          ? `flex flex-row space-x-6`
          : "flex flex-col space-y-6"
      }`}
    >
      {children}
    </div>
  );
};

export default Stack;
