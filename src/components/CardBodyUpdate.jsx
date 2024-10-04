import { useRef, useState } from "react";
import { storage } from "../firebase";
import { updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { deleteObject, ref } from "firebase/storage";
import findUser from "../UseFindUser";
import emptyAvatar from "../assets/profileicon.png";

import UpdateProfilePicture from "./UpdateProfilePicture";
import Button from "./Button";

import "./Card.css";

const CardBodyUpdate = ({ cardBodyTemplate }) => {
  const { user, loading } = findUser();
  const [error, setError] = useState(false);
  // const [loading, setLoading] = useState(false);
  const [formState, setFormState] = useState({
    displayName: user.displayName ? user.displayName : "",
    photoURL: "",
  });

  // console.log("user hook", user);

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
    let photo;
    if (user.photoURL) {
      photo = user.photoURL;
    } else if (formState.photoURL) {
      photo = formState.photoURL;
    } else {
      photo = emptyAvatar;
    }

    try {
      await updateProfile(user, {
        displayName: formState.displayName || user.displayName,
        photoURL: photo,
        // createdAt: currentUser.metadata.creationTime,
      });
    } catch (error) {
      console.log("An error occurred", error.message);
      setError("Oops, something went wrong.");
    } finally {
      console.log("profile updated!");
      navigate("/profile");
    }
  };
  // Getting the url for user's profile picture from UpdateProfilePicture and updating user's profile thru formState

  const handleUrl = (storageRef, file) => {
    if (user.photoURL) {
      // If user already has a profile picture we delete it
      const imageRef = ref(storage, user.photoURL);
      deleteObject(imageRef)
        .then(() => {
          console.log("File deleted successfully");
        })
        .catch((error) => {
          console.log("Uh-oh, an error occurred!", error.message);
        });
    }
    if (storageRef) {
      const name = "photoURL";
      const value = storageRef;
      // add the new profile picture to the user's profile
      setFormState({
        ...formState,
        [name]: value,
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
                inputMode="numeric"
                type={field.type}
                className="tips-input mb-3 mx-2 text-black"
                placeholder={
                  user?.displayName ? user?.displayName : field.placeholder
                }
                style={{ fontStyle: "oblique", paddingLeft: "3%" }}
                name={field.label}
                value={formState.field}
                onChange={handleChange}
                autoComplete="off"
              />
              <br />
              <br />
            </div>
          ))}
        <div className="col-12 d-flex justify-content-center mb-4">
          <Button
            type="submit"
            className="button"
            disabled={false}
            loading={loading}
          >
            update
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
