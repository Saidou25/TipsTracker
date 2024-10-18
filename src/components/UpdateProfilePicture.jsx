import { useEffect, useState } from "react";
import { storage } from "../firebase";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { CiCamera } from "react-icons/ci";
import findUser from "../UseFindUser"; // Custom hook to retrieve user's data

import emptyAvatar from "../assets/profileicon.png";
import Button from "./Button";
import Error from "./Error";

import "./UpdateProfilePicture.css";

const UpdateProfilePicture = ({ uploadedPhotoUrl }) => {
  const [srcUrl, setSrcUrl] = useState("");
  const [newlyUploadedPhotoURL, setNewlyUplaodedPhotoURL] = useState("");
  const [file, setFile] = useState(null);
  const [showProgress, setShowProgress] = useState("");
  const [loading, setLoading] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [error, setError] = useState("");

  const { user } = findUser();

  // Gets the file's name selected from the user's device and enable Button to be clicked for updating user's profile
  const handleChange = (e) => {
    setError("");
    if (e.target.files[0]) {
      setFile(e.target.files[0]);
      setButtonDisabled(false);
    }
  };

  // Manages the upload user's new picture to be saved
  const handleClick = (e) => {
    e.preventDefault();
    setLoading(true);
    const metadata = {
      contentType: file.name,
    };
    // Upload file and metadata
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
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
            console.log("Nothing running");
        }
      },
      (error) => {
        setLoading(false);
        setButtonDisabled(true)
        // A full list of error codes is available at
        // https://firebase.google.com/docs/storage/web/handle-errors
        switch (error.code) {
          case "storage/unauthorized":
            setError("User doesn't have permission access permission...");
            break;
          case "storage/canceled":
            setError("User canceled the upload...");
            break;
          case "storage/unknown":
            setError("Unknown error occurred, inspect error.serverResponse");
            break;
          default:
            setError("Oops, something happened!");
        }
      },
      () => {
        // Upload completed successfully, now we can get the download URL
        getDownloadURL(uploadTask.snapshot.ref).then((storageRef) => {
          setNewlyUplaodedPhotoURL(storageRef);
          setButtonDisabled(true);
          setLoading(false);
          setSrcUrl(storageRef);
          uploadedPhotoUrl(storageRef); // Sends the new picture url to the update component
        });
      }
    );
  };

  useEffect(() => {
    // Setting src according to different conditions
    // 1. if user already has a profile picturen then we display it
    if (user.photoURL && !newlyUploadedPhotoURL) {
      const prevPhoto = user.photoURL;
      setSrcUrl(prevPhoto);
    } else if (newlyUploadedPhotoURL) {
      // If users uploads a new profile picture we display it and send it to CardBody update
      //so the previous profile picture can be deleted and we also display the newly uploaded picture by setting srcUrl with it
      setSrcUrl(newlyUploadedPhotoURL);
    } else {
      // otherwise it means no profile picture has been set so we display an empty avatar
      setSrcUrl(emptyAvatar);
    }
  }, [user.photoURL, newlyUploadedPhotoURL]);

  return (
    <>
      <div className="container-fluid mt-4">
        <div className="progress">
          {showProgress ? <>{showProgress}</> : <></>}
        </div>
        <div style={{ position: "relative" }}>
          <img className="photo-url" src={srcUrl} alt="avatar" />
          <label htmlFor="choose" style={{ cursor: "pointer" }}>
            <input
              type="file"
              id="choose"
              name="choose"
              autoComplete="off"
              multiple
              onChange={handleChange}
              style={{ display: "none" }} // Hide the default file input
            />
            <CiCamera className="camera img-fluid" alt="camera" />
          </label>
        </div>
      </div>
      <div className="d-flex justify-content-center mt-4">
        <Button
          className="button"
          type="submit"
          error={error}
          loading={loading}
          disabled={buttonDisabled}
          onClick={handleClick}
        >
          save Picture
        </Button>
      </div>
      {error && <Error error={error} />}
    </>
  );
};
export default UpdateProfilePicture;
