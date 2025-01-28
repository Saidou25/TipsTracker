import React from "react";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc, Timestamp } from "firebase/firestore";
import { useCallback, useEffect, useState } from "react";

import findUser from "../UseFindUser";

import Button from "../components/Button";
import Error from "../components/Error";

import "../components/Card.css";

const SignupCard = ({ cardBodyTemplate }) => {
  const { user, loading: loadingCurrentUser } = findUser();
  const [loading, setLoading] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [success, setSuccess] = useState("");
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const { templateTitle, fields, footer } = cardBodyTemplate;

  const handleChange = (e) => {
    setErrorMessage("");
    setSuccess("");
    const { name, value } = e.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // Creating a collection to store user's tips
  const createNewCollection = useCallback(
    async (user) => {
      try {
        await setDoc(doc(db, "users", user.uid), {
          displayName: "",
          email: formState.email,
          photoURL: "",
          tips: [],
          date: Timestamp.fromDate(new Date()),
        });
        setLoading(false);
        setButtonDisabled(true);
        navigate("/dashboard");
      } catch {
        setErrorMessage("There was an error signing you up.");
        setButtonDisabled(true);
        setLoading(false);
      }
    },
    [user, formState]
  );

  const createNewUser = useCallback(async () => {
    const { email, password } = formState;

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      if (userCredential) {
        setSuccess("Congratulations! Your account has been created...");
        setFormState({ email: "", password: "" });
        setLoading(false);
        setButtonDisabled(true);
      }
      return userCredential.user;
    } catch (error) {
      setErrorMessage("There was an error creating your account.");
      setLoading(false);
      setButtonDisabled(true);
    }
  });

  // Creates a new user
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const newUser = await createNewUser();
      await createNewCollection(newUser);
      // If newUser doesn't exists, proceed with collection creation
      if (newUser) {
        await createNewCollection(newUser);
      } else {
        // If newUser is undefined, show an error message
        setErrorMessage("User already exists.");
      }
    } catch {
      setLoading(false);
      setErrorMessage("There was an error creating your account.");
      setButtonDisabled(true);
    }
  };

  useEffect(() => {
    if (formState.email && formState.password) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [formState]);

  return (
      <form className="tips-form" onSubmit={handleSubmit}>
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
                  data-testid="input"
                  id={field.label}
                  inputMode={field.inputMod}
                  type={field.type}
                  className="signup-input mb-3"
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
          >
            save
          </Button>
          <br />
          {/* {success && <span className="text-success">{success}</span>} */}
        </div>
      </form>
  );
};
export default SignupCard;
