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
      {loading ? (
        <>Please wait...</>
      ) : (
        <>
          <span>{children}</span>
        </>
      )}
    </button>
  );
};
export default Button;
