import React from "react";
import { AiOutlineStop } from "react-icons/ai";
import ButtonSpinner from "./ButtonSpinner";

import "./Button.css"; // To comment out for testing

const Button = ({
  children,
  type,
  onClick,
  loading,
  disabled,
  error,
  className,
}) => {
  return (
    <button
      role="button"
      className={className}
      type={type}
      disabled={disabled || loading || error ? true : false}
      onClick={onClick}
    >
      {loading && <ButtonSpinner />}
      {(disabled || error) && <AiOutlineStop className="line-stop"/>}
      {!loading && !disabled && !error && <>{children}</>}
    </button>
  );
};
export default Button;
