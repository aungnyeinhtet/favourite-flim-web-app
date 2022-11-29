import React from "react";

const Button = ({
  children,
  disabled,
  type = "button",
  className,
  onClick,
}) => {
  return (
    <button
      disabled={disabled}
      type={type}
      className={` ${className} ${
        disabled ? "disabled:bg-slate-500 cursor-not-allowed" : ""
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
