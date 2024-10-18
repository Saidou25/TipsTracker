import { useNavigate } from "react-router-dom";
import { auth, db } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc, Timestamp } from "firebase/firestore";
import { useCallback, useEffect, useState } from "react";

import findUser from "../UseFindUser";

import Button from "./Button";
import Error from "./Error";

import "./Card.css";

const CardBodySignup = ({ cardBodyTemplate }) => {
  const { user, loading: loadingCurrentUser } = findUser();
  const [loading, setLoading] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setError("");
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
      } catch (error) {
        setError(error.message);
        setButtonDisabled(true);
        setLoading(false);
      }
    },
    [user, formState]
  );

  const createNewUser = useCallback(async (user) => {
    const { email, password } = formState;

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      if (userCredential) {
        setSuccess("Congratulations! Your account has been created.");
        setFormState({ email: "", password: "" });
        setLoading(false);
        setButtonDisabled(true);
      }
      return userCredential.user;
    } catch (error) {
      setError(error.message);
      setLoading(false);
      setButtonDisabled(true);
    }
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // Creates a new user
    try {
      const newUser = await createNewUser();await createNewCollection(newUser);
      // If newUser exists, proceed with collection creation
    if (newUser) {
      await createNewCollection(newUser);
    } else {
      // If newUser is undefined, show an error message
      setError("User already exists.");
    }
    } catch (error) {
      setLoading(false);
      setError(error.message);
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
    <form className="signup-form" onSubmit={handleSubmit}>
      <div className="row my-5 g-0">
        <br />
        {cardBodyTemplate?.fields &&
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
                data-testid="input"
                id={field.label}
                inputMode={field.inputMod}
                type={field.type}
                className="col-12 signup-input mb-3"
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
          className="button mb-5"
          disabled={buttonDisabled}
          loading={loading}
          error={error}
        >
          save
        </Button>
        {success && <span className="text-success">{success}</span>}
        {error && <Error error={error} />}
      </div>
    </form>
  );
};
export default CardBodySignup;
