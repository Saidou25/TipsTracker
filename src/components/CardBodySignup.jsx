import { useNavigate } from "react-router-dom";
import { auth, db } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc, Timestamp } from "firebase/firestore";
import { useCallback, useEffect, useState } from "react";

import findUser from "../UseFindUser";

import Button from "./Button";

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
        console.log("Congratulation your collection has been created");
      } catch (error) {
        console.log("error", error.message);
      }
    },
    [user, formState]
  );

  const createNewUser = useCallback(async () => {
    if (!formState.email || !formState.password) {
      setError("All fields are required...");
      return;
    }
    const { email, password } = formState;

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      setSuccess("Congratulations! Your account has been created.");
      setFormState({ email: "", password: "" });
      return userCredential.user;
    } catch (error) {
      setError(`${error.message} (${error.code})`);
      throw error;
    }
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const newUser = await createNewUser();
      await createNewCollection(newUser);
      // navigate("/dashboard");
    } catch (e) {
      setLoading(false)
      console.log(error);
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
          className="button"
          disabled={buttonDisabled}
          loading={loading}
          error={error}
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
