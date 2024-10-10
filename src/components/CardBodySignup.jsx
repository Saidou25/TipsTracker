import { useNavigate } from "react-router-dom";
import { auth, db } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc, Timestamp } from "firebase/firestore";
import { useCallback, useState } from "react";

import findUser from "../UseFindUser";

import Button from "./Button";

import "./Card.css";

const CardBodySignup = ({ cardBodyTemplate }) => {
  const { user, loading } = findUser();
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
    try {
      const newUser = await createNewUser();
      await createNewCollection(newUser);
      navigate("/dashboard");
    } catch (e) {
      console.log(error);
    }
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
                id={field.label}
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
                value={formState[field.label]}
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
