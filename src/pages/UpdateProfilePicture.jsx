import { useEffect, useRef, useState } from "react";
import { db, storage } from "../firebase";
import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { doc, updateDoc } from "firebase/firestore";
import { updateProfile } from "firebase/auth";
import { CiCamera } from "react-icons/ci";
import findUser from "../UseFindUser"; // Custom hook to retrieve user's data

import emptyAvatar from "../assets/profileicon.png";
import Button from "../components/Button";
import Error from "../components/Error";

import "./UpdateProfilePicture.css";

const UpdateProfilePicture = ({ showSuccess }) => {
  const [srcUrl, setSrcUrl] = useState("");
  const [newlyUploadedPhotoURL, setNewlyUplaodedPhotoURL] = useState("");
  const [file, setFile] = useState(null);
  const [showProgress, setShowProgress] = useState("");
  const [loading, setLoading] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const { user } = findUser();

  const form = useRef();

  // Adding new profile picture to the collection for the loggedin user.
  const fireFunc = async (storageRef) => {
    try {
      await updateDoc(doc(db, "users", user.uid), {
        photoURL: storageRef,
      });
    } catch {
      setErrorMessage(
        "Failed to uplaod to the collection. Please try again later."
      );
    }
  };

  // Gets the file's name selected from the user's device and enable Button to be clicked for updating user's profile
  const handleChange = (e) => {
    setErrorMessage("");
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setButtonDisabled(false);
    }
  };

  // If user already has a profile picture and just uploaded a new one we delete the old one from database
  const deleteOldPicture = async (storageRef) => {
    setErrorMessage("");
    if (storageRef && user.photoURL) {
      try {
        const imageRef = ref(storage, user.photoURL);
        await deleteObject(imageRef);
      } catch {
        setErrorMessage("Failed to delete old profile picture.");
      }
    }
  };

  // Add user's new profile picture
  const addNewPicture = async (storageRef) => {
    if (!storageRef) {
      return;
    }
    try {
      await updateProfile(user, {
        photoURL: storageRef,
      });
      setTimeout(() => {
        showSuccess("Profile Picture successfully updated.");
      }, 2000);
    } catch (error) {
      console.log(error.message);
    }
  };

  // Manages the upload user's new picture to be saved
  const handleClick = (e) => {
    e.preventDefault();
    setLoading(true);
    const metadata = {
      contentType: file.name,
    };
    // Upload file and metadata from firebase
    const storageRef = ref(storage, "images/" + file.name);
    const uploadTask = uploadBytesResumable(storageRef, file, metadata);

    // Listen for state changes, errors, and completion of the upload.
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setShowProgress("Upload is " + Math.floor(progress) + "% done");
        if (progress === 100) {
          setTimeout(() => {
            setShowProgress("");
          }, 4000);
        }
      },
      (error) => {
        setLoading(false);
        setButtonDisabled(true);
        switch (error.code) {
          case "storage/unauthorized":
            setErrorMessage(
              "User doesn't have permission access permission..."
            );
            break;
          case "storage/canceled":
            setErrorMessage("User canceled the upload...");
            break;
          case "storage/unknown":
            setErrorMessage(
              "Unknown error occurred, inspect error.serverResponse"
            );
            break;
          default:
            setErrorMessage("Oops, something happened!");
        }
      },
      () => {
        // Upload completed successfully, now we can get the download URL of the stored picture in firebase storage
        getDownloadURL(uploadTask.snapshot.ref).then((storageRef) => {
          setNewlyUplaodedPhotoURL(storageRef);
          setButtonDisabled(true);
          setSrcUrl(storageRef);
          deleteOldPicture(storageRef);
          addNewPicture(storageRef);
          fireFunc(storageRef);
        });
      }
    );
  };

  // Setting srcUrl to display the profile picture in ui according to different conditions
  useEffect(() => {
    // 1. if user already has a profile picturen then we display it
    if (user.photoURL && !newlyUploadedPhotoURL) {
      const prevPhoto = user.photoURL;
      setSrcUrl(prevPhoto);
      setLoading(false);
    } else if (newlyUploadedPhotoURL) {
      // If users uploads a new profile picture we display it and send it to CardBody update
      //so the previous profile picture can be deleted and we also display the newly uploaded picture by setting srcUrl with it
      setSrcUrl(newlyUploadedPhotoURL);
      setLoading(false);
    } else {
      // otherwise it means no profile picture has been set so we display an empty avatar
      setSrcUrl(emptyAvatar);
      setLoading(false);
    }
  }, [user.photoURL, newlyUploadedPhotoURL]);

  return (
    <form ref={form}>
      <div className="container-fluid mt-4">
        <div className="progress">
          {showProgress ? (
            <>{showProgress}</>
          ) : (
            <span style={{ visibility: "hidden" }}>showProgress</span>
          )}
        </div>
        <div className="image-camera">
          <img className="photo-update" src={srcUrl} alt="avatar" />
          <label htmlFor="choose" style={{ cursor: "pointer" }}>
            <input
              type="file"
              id="choose"
              name="choose"
              autoComplete="off"
              onChange={handleChange}
              style={{ display: "none" }} // Hide the default file input
            />
            <CiCamera className="camera img-fluid" alt="camera" />
          </label>
        </div>
      </div>
      <br />
      {errorMessage && <Error message={errorMessage} />}
      <Button
        className="button"
        type="submit"
        error={errorMessage}
        loading={loading}
        disabled={buttonDisabled}
        onClick={handleClick}
      >
        save
      </Button>
    </form>
  );
};
export default UpdateProfilePicture;
