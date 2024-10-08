import "./Button.css";

const Button = ({ children, type, disabled, onClick, loading, className }) => {
  return (
    <button
      // role="test"
      className={className}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {loading ? <>Please wait...</> : <>{children}</>}
    </button>
  );
};
export default Button;
