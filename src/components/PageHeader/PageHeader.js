import React from "react";

const PageHeader = ({ category }) => {
  return (
    <div className="w-full flex flex-row justify-center items-center">
      <h1 className="font-bold text-5xl uppercase text-TYPOGRAPHY">
        {category}
      </h1>
    </div>
  );
};

export default PageHeader;
