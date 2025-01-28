import React from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useEffect, useState } from "react";

import Error from "../components/Error";
import Button from "../components/Button";

import "../components/Card.css";

const CardBodyLogin = ({ cardBodyTemplate, showSuccess }) => {
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });

  const { fields, templateTitle, footer } = cardBodyTemplate;
  // Setting the form with user inputs
  const handleChange = (e) => {
    const { name, value } = e.target;

    setErrorMessage(""); // Clearing eventual previous error
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // Reset formState and all other states
  const resetFormAndStates = () => {
    setLoading(false);
    setButtonDisabled(true);
    setErrorMessage("");
    setFormState({
      email: "",
      password: "",
    });
  };

  // Loging the user
  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true); // Showing user that is login request is working
    const email = formState.email;
    const password = formState.password;
    if (!email || !password) {
      setErrorMessage("All fields are required!");
      setLoading(false);
      setButtonDisabled(true);
      return;
    }
    signInWithEmailAndPassword(auth, email, password) // Firebase login function
      .then((userCredential) => {
        const user = userCredential.user;
        if (user) {
          showSuccess("You are logged in");
          resetFormAndStates(); // Self explanatory
        }
      })
      .catch(() => {
        setErrorMessage("There is no user with these credentials!");
        setLoading(false);
        setButtonDisabled(true);
      });
  };

  useEffect(() => {
    // When the form is completely filled (even if autocomplete fills it) we enable the submit button
    if (formState.email && formState.password) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [formState]);

  return (
      <form className="tips-form">
        <div className="my-2 g-0">
          <br />
          {fields &&
            cardBodyTemplate.fields.map((field) => (
              <div className="login-signup" key={field.label}>
                <label
                  data-testid={`enterTipsForm-label-${field.label}`}
                  htmlFor={field.label}
                  className="mb-3"
                  name={field.label}
                >
                  {field.label}:
                </label>
                <input
                  data-testid="login"
                  id={field.label}
                  inputMode={field.inputMod}
                  type={field.type}
                  className="login-input mb-3"
                  placeholder={field.placeholder}
                  autoComplete="on"
                  name={field.label}
                  value={formState.label}
                  onChange={handleChange}
                />
              </div>
            ))}
          {errorMessage ? <Error message={errorMessage} /> : null}
          <br />
          <Button
            type="submit"
            className="button"
            disabled={buttonDisabled}
            loading={loading}
            error={errorMessage}
            onClick={handleSubmit}
          >
            login
          </Button>
          <br />
        </div>
      </form>
  );
};
export default CardBodyLogin;
