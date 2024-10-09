import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "./Button";

import "./Card.css";

const CardBodyLogin = ({ cardBodyTemplate }) => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [formState, setFormState] = useState("");

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
      setError("All fields are required");
      return;
    }
    const email = formState.email;
    const password = formState.password;

    signInWithEmailAndPassword(auth, email, password) // Firebase login function
      .then((userCredential) => {
        const user = userCredential.user;

        setSuccess("You are now Loggedin");
        setFormState({ email: "", password: "" });
        navigate("/dashboard");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage, errorCode);
      });
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <div className="row my-5 g-0">
        <br />
        {cardBodyTemplate.fields &&
          cardBodyTemplate.fields.map((field) => (
            <div className="div-label" key={field.label}>
              <label
                data-testid={`enterTipsForm-label-${field.label}`}
                htmlFor={field.label}
                className="col-lg-3 col-sm-6 mb-3"
                name={field.label}
              >
                {field.label}:
              </label>
              <input
                data-testid="input"
                role="spinbutton"
                id={field.label}
                type={field.type}
                className="col-lg-6 col-sm-6 login-input mb-3"
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
        <Button type="submit" className="button" disabled={false}>
          login
        </Button>
      </div>
      {error && (
        <span className="text-danger" data-testid="oops">
          Oops, something went wrong...
        </span>
      )}
    </form>
  );
};
export default CardBodyLogin;
