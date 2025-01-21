import React, { useEffect, useRef, useState } from "react";
import { updateProfile } from "firebase/auth";
import findUser from "../UseFindUser";
import Button from "../components/Button";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";

export default function UpdateName({ cardBodyTemplate, showSuccess }) {
  const [loading, setLoading] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [newDisplayName, setNewDisplayName] = useState("");

  const { user, loading: loadingCurrentUser } = findUser();

  const form = useRef();

  const { fields } = cardBodyTemplate;

  const handleChange = (e) => {
    setErrorMessage("");
    const username = e.target.value;
    setNewDisplayName(username);
    if (username.length >= 3) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  };

  // Adding new username to the collection for the loggedin user.
  const userNameFunc = async (newDisplayName) => {
    console.log(newDisplayName)
    try {
      await updateDoc(doc(db, "users", user.uid), {
        displayName: newDisplayName,
      });
    } catch {
      setErrorMessage(
        "Failed to uplaod to the collection. Please try again later."
      );
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await updateProfile(user, {
        displayName: newDisplayName,
      });
      userNameFunc();
      showSuccess("Username successfully updated.");
      setLoading(false);
    } catch {
      setErrorMessage("Something went wrong.");
    } finally {
      userNameFunc(newDisplayName);
    }
  };

  useEffect(() => {
    if (user.displayName) {
      setNewDisplayName(user.displayName);
    }
  }, [user?.displayName]);

  return (
    <form ref={form}>
      <br />
      <br />
      {fields &&
        fields.map((field) => (
          <div className="d-flex justify-content-center" key={field.label}>
            <label
              data-testid={`updateCard-label-${field.label}`}
              htmlFor={field.label}
              className="form-label here mb-3"
              name={field.label}
            >
              username:
            </label>
            <br />
            <br />
            <input
              data-testid="input"
              role="spinbutton"
              id={field.label}
              inputMode={field.inputMod}
              type={field.type}
              className="tips-input mb-3 mx-2 text-black"
              placeholder={
                user?.displayName ? user?.displayName : field.placeholder
              }
              style={{
                fontStyle: "oblique",
                paddingLeft: "3%",
                width: "40%",
              }}
              name={field.label}
              value={newDisplayName}
              onChange={handleChange}
              autoComplete="on"
            />
          </div>
        ))}
      <br />
      {errorMessage && <Error message={errorMessage} />}
      <Button
        role="button"
        type="submit"
        className="button"
        disabled={buttonDisabled}
        loading={loading}
        error={errorMessage}
        onClick={handleSubmit}
      >
        submit
      </Button>
      <br />
    </form>
  );
}
