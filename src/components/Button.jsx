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
    <div className="button-div">
      <button
        role="button"
        className={className}
        type={type}
        disabled={disabled || loading || error ? true : false}
        onClick={onClick}
      >
        {loading && <ButtonSpinner />}
        {(disabled || error) && <AiOutlineStop className="line-stop" />}
        {!loading && !disabled && !error && (
          <div className="class-children g-0 m-0">{children}</div>
        )}
      </button>
    </div>
  );
};
export default Button;
