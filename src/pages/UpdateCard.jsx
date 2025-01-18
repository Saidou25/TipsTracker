import { React, useEffect, useRef, useState } from "react";
import { storage } from "../firebase";
import { updateProfile } from "firebase/auth";
import { deleteObject, ref } from "firebase/storage";
import { Navigate, useNavigate } from "react-router-dom";

import findUser from "../UseFindUser";

import Error from "../components/Error";
import UpdateProfilePicture from "./UpdateProfilePicture";
import Button from "../components/Button";
import Success from "../components/Success";

import "../components/Card.css";

const UpdateCard = ({ cardBodyTemplate, showSuccess }) => {
  const { user, loading: loadingCurrentUser } = findUser();
  const [loading, setLoading] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [newUrl, setNewUrl] = useState(false);
  const [formState, setFormState] = useState({
    displayName: "",
    photoURL: user.photoURL,
  });
  const form = useRef();
  const navigate = useNavigate();

  const { templateTitle, fields, footer } = cardBodyTemplate;

  // Handling only the displayName change
  const handleChange = (e) => {
    setError(""); // Clearing eventual previous error
    const { name, value } = e.target;

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
      displayName: "",
      photoURL: user.photoURL,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Showing user that is login request is working
    try {
      await updateProfile(user, {
        displayName: formState.displayName
          ? formState.displayName
          : user.displayName,
        photoURL: formState.photoURL ? formState.photoURL : user.photoURL,
      });
      setSuccess("Profile successfully updated...");
      setTimeout(() => {
        setSuccess("");
        navigate("/profile");
      }, 3000);
      setNewUrl(false);
      resetFormAndStates();
    } catch (error) {
      setButtonDisabled(true);
      setError("There was an error updating your profile!");
      setLoading(false);
    }
  };

  // Setting the url for the uploaded profile picture
  const handleUrl = async (storageRef) => {
    setError("");
    if (storageRef && user.photoURL) {
      // If user already has a profile picture and just uploaded a new one
      // we delete the old one from database
      if (user.photoURL) {
        const imageRef = ref(storage, user.photoURL);
        try {
          await deleteObject(imageRef);

          //  And add the new profile picture to the user's profile
          setFormState({
            ...formState,
            photoURL: storageRef,
          });
          setLoading(false);
          setNewUrl(true);
        } catch (error) {
          setError(error.message);
          setLoading(false);
          setButtonDisabled(true);
        }
      }
    } else {
      // If no previous profile picture we set the form with new one
      setFormState({
        ...formState,
        photoURL: storageRef,
      });
      setButtonDisabled(false);
    }
  };

  useEffect(() => {
    if (formState.displayName || newUrl) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [formState, newUrl]);

  useEffect(() => {
    showSuccess("");
  }, []);

  return (
    <div className="card main-card" data-testid="main-card">
      <div className="card-title p-5">{templateTitle}</div>
      {success ? (
        <Success success={success} />
      ) : (
        <div className="card-body">
          <UpdateProfilePicture
            uploadedPhotoUrl={handleUrl}
            cardBodyTemplate={cardBodyTemplate}
            data-testid="mock-update-profile-picture"
          />
          <form ref={form} className="form mt-4 px-5" onSubmit={handleSubmit}>
            <br />
            {fields &&
              fields.map((field) => (
                <div
                  className="d-flex justify-content-center"
                  key={field.label}
                >
                  <label
                    data-testid={`updateCard-label-${field.label}`}
                    htmlFor={field.label}
                    className="form-label here mb-3"
                    name={field.label}
                  >
                    {field.label}:
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
                    value={formState.displayName}
                    onChange={handleChange}
                    autoComplete="on"
                  />
                </div>
              ))}
            <br />
            <div className="d-flex justify-content-center mb-4">
              <Button
                role="button"
                type="submit"
                className="button"
                disabled={buttonDisabled}
                loading={loading}
                error={error}
              >
                submit
              </Button>
            </div>
            {error && <Error error={error} />}
          </form>
        </div>
      )}
      <div className="card-footer p-5">{footer}</div>
    </div>
  );
};
export default UpdateCard;
