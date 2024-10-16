import { AiOutlineStop } from "react-icons/ai";
import ButtonSpinner from "./ButtonSpinner";

import "./Button.css";

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
      // role="test"
      className={className}
      type={type}
      disabled={disabled || loading || error ? true : false}
      onClick={onClick}
    >
      {loading && <ButtonSpinner />}
      {(disabled || error) && <AiOutlineStop />}
      {!loading && !disabled && <>{children}</>}
    </button>
  );
};
export default Button;
