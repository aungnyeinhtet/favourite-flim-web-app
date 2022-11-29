import React from "react";

const Container = ({ children, className }) => {
  return (
    <div className={`px-6 mx-auto max-w-7xl ${className}`}>{children}</div>
  );
};

export default Container;
