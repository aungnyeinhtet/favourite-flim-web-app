import React from "react";

const Grid = ({ children }) => {
  return (
    <div className={`grid lg:grid-cols-16 gap-4 md:grid-cols-14`}>{children}</div>
  );
};

export default Grid;
