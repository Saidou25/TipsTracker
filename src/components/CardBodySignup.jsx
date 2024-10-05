import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";

import Button from "./Button";

import "./Card.css";

const CardBodySignup = ({ cardBodyTemplate }) => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setError("");
    setSuccess("");
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formState.email || !formState.password) {
      setError("All fields are required...");
      return;
    }
    const email = formState.email;
    const password = formState.password;

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log(user);
        setSuccess("Congratulation Your account has been created...");
        setFormState({ email: "", password: "" });
        navigate("/login");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage, errorCode);
      });
  };

  return (
    <form className="signup-form" onSubmit={handleSubmit}>
      <div className="row my-5 g-0">
        <br />
        {cardBodyTemplate?.fields &&
          cardBodyTemplate.fields.map((field) => (
            <div className="div-label" key={field.label}>
              <label
                data-testid={`enterTipsForm-label-${field.label}`}
                htmlFor={field.label}
                className="col-lg-6 col-sm-6 mb-3 label-end"
                name={field.label}
              >
                {field.label}:
              </label>
              <input
                data-testid="input"
                role="spinbutton"
                id={field.label}
                inputMode="numeric"
                type={field.type}
                className="col-lg-4 col-sm-6 signup-input mb-3 input-start"
                placeholder={field.placeholder}
                style={{
                  fontStyle: "oblique",
                  paddingLeft: "3%",
                  color: "black",
                }}
                autoComplete="on"
                name={field.label}
                value={formState.field?.label}
                onChange={handleChange}
              />
            </div>
          ))}
        <Button
          type="submit"
          className="button"
          disabled={false}
          //   loading={loading}
        >
          save
        </Button>
        {success && <span className="text-success">{success}</span>}
        {error && (
          <span className="text-danger" data-testid="oops">
            {error}
          </span>
        )}
      </div>
    </form>
  );
};
export default CardBodySignup;
