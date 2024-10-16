import { useEffect, useRef, useState } from "react";
import { storage } from "../firebase";
import { updateProfile } from "firebase/auth";
import { deleteObject, ref } from "firebase/storage";
import findUser from "../UseFindUser";

import UpdateProfilePicture from "./UpdateProfilePicture";
import Button from "./Button";

import "./Card.css";

const CardBodyUpdate = ({ cardBodyTemplate, showSuccess }) => {
  const { user, loading: loadingCurrentUser } = findUser();
  const [loading, setLoading] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [error, setError] = useState("");
  const [newUrl, setNewUrl] = useState(false);
  const [formState, setFormState] = useState({
    displayName: "",
    photoURL: user.photoURL,
  });

  const form = useRef();

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
      showSuccess("Profile successfully updated...");
      setNewUrl(false);
      resetFormAndStates();
    } catch (error) {
      setButtonDisabled(true);
      setError(error);
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
          setError(error);
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

  if (loadingCurrentUser) {
    return <>Retrieving data...</>;
  }

  return (
    <div>
      <UpdateProfilePicture
        uploadedPhotoUrl={handleUrl}
        cardBodyTemplate={cardBodyTemplate}
      />
      <form
        ref={form}
        // role="form"
        className="form mt-4 px-5"
        onSubmit={handleSubmit}
      >
        <br />
        {cardBodyTemplate.fields &&
          cardBodyTemplate.fields.map((field) => (
            <div className="d-flex justify-content-center" key={field.label}>
              <label
                data-testid={`enterTipsForm-label-${field.label}`}
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
                style={{ fontStyle: "oblique", paddingLeft: "3%" }}
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
            type="submit"
            className="button"
            disabled={buttonDisabled}
            loading={loading}
            error={error}
          >
            update profile
          </Button>
        </div>
        {error && (
          <div
            className="text-primary d-flex align-items-center justify-content-center"
            data-testid="oops something went wrong..."
            style={{
              marginTop: "10%",
              marginBottom: "10%",
              border: "1px solid",
              borderRadius: "10px",
              height: "50px",
              // color: "rgba(210, 35, 241, 0.92)"
            }}
          >
            {error.message}
          </div>
        )}
      </form>
    </div>
  );
};
export default CardBodyUpdate;
