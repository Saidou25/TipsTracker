
import "./Button.css";

const Button = ({ children, type, disabled, onClick, loading, className }) => {
  return (
    // <div className="p-0">
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
    // </div>
  );
};
export default Button;
