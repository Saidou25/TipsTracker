import { useRef, useState } from "react";
import { storage } from "../firebase";
import { updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { deleteObject, ref } from "firebase/storage";
import findUser from "../UseFindUser";

import UpdateProfilePicture from "./UpdateProfilePicture";
import Button from "./Button";

import "./Card.css";

const CardBodyUpdate = ({ cardBodyTemplate }) => {
  const { user, loading } = findUser();
  const [error, setError] = useState(false);
  const [formState, setFormState] = useState({
    displayName: user.displayName ? user.displayName : "",
    photoURL: user.photoURL,
  });

  const form = useRef();

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };
  // Setting the url for the uploaded profile picture

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await updateProfile(user, {
        displayName: formState.displayName
          ? formState.displayName
          : user.displayName,
        photoURL: formState.photoURL ? formState.photoURL : user.PhotoURL,
      });
    } catch (error) {
      // console.log("An error occurred", error.message);
      setError("Oops, something went wrong.");
    } finally {
      // console.log("profile updated!");
      navigate("/profile");
    }
  };

  const handleUrl = (newlyUploadedPhotoURL) => {
    // console.log("in hadle url: ", newlyUploadedPhotoURL);

    if (newlyUploadedPhotoURL && user.photoURL) {
      // console.log(
      //   " case 2: deleting and setting with new photo",
      //   newlyUploadedPhotoURL
      // );

      // If user already has a profile picture and just uploaded a new one
      // we delete the old one from database
      if (user.photoURL) {
        const imageRef = ref(storage, user.photoURL);
        deleteObject(imageRef)
          .then(() => {
            console.log("File deleted successfully");
            //  And add the new profile picture to the user's profile
            setFormState({
              ...formState,
              photoURL: newlyUploadedPhotoURL,
            });
          })
          .catch((error) => {
            // console.log("image ref", imageRef);
            console.log("Uh-oh, an error occurred!", error.message);
          });
      }
    } else {
      // If no previous profile picture we set the form with new one
      // console.log("case 1: no previous picture", newlyUploadedPhotoURL);
      setFormState({
        ...formState,
        photoURL: newlyUploadedPhotoURL,
      });
    }
  };

  return (
    <div className="row g-0">
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
            <div
              className="col-12 d-flex justify-content-center"
              key={field.label}
            >
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
                autoComplete="off"
              />
            </div>
          ))}
        <br />
        <div className="col-12 d-flex justify-content-center mb-4">
          <Button
            type="submit"
            className="button no-wrap"
            disabled={false}
            loading={loading}
          >
            update profile
          </Button>
        </div>
        {error && (
          <span
            className="text-danger"
            data-testid="oops something went wrong..."
          >
            {error}
          </span>
        )}
      </form>
    </div>
  );
};
export default CardBodyUpdate;
