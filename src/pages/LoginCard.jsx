import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useEffect, useState } from "react";

import Error from "../components/Error";
import Button from "../components/Button";

import "../components/Card.css";

const CardBodyLogin = ({ cardBodyTemplate, showSuccess }) => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });

  // Setting the form with user inputs
  const handleChange = (e) => {
    const { name, value } = e.target;

    setError(""); // Clearing eventual previous error
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // Reset formState and all other states
  const resetFormAndStates = () => {
    setLoading(false);
    setButtonDisabled(true);
    setError("");
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

    signInWithEmailAndPassword(auth, email, password) // Firebase login function
      .then((userCredential) => {
        const user = userCredential.user;
        if (user) {
          showSuccess("You are logged in");
          resetFormAndStates(); // Self explanatory
        }
      })
      .catch((error) => {
        setError(error.message);
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
    <>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="row my-5 g-0">
          <br />
          {cardBodyTemplate.fields &&
            cardBodyTemplate.fields.map((field) => (
              <div className="login-signup" key={field.label}>
                <label
                  data-testid={`enterTipsForm-label-${field.label}`}
                  htmlFor={field.label}
                  className="col-12 mb-3"
                  name={field.label}
                >
                  {field.label}:
                </label>
                <input
                  data-testid="login"
                  id={field.label}
                  inputMode={field.inputMod}
                  type={field.type}
                  className="col-12 login-input mb-3"
                  placeholder={field.placeholder}
                  style={{
                    fontStyle: "oblique",
                    paddingLeft: "3%",
                    color: "black",
                  }}
                  autoComplete="on"
                  name={field.label}
                  value={formState.label}
                  onChange={handleChange}
                />
              </div>
            ))}
          <Button
            type="submit"
            className="button"
            disabled={buttonDisabled}
            loading={loading}
            error={error}
          >
            login
          </Button>
        </div>
      </form>
      {error && (
        <Error error={error} />
      )}
    </>
  );
};
export default CardBodyLogin;
