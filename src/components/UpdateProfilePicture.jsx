import { useState } from "react";
import { storage } from "../firebase";
import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytesResumable,
} from "firebase/storage";

import emptyAvatar from "../assets/profileicon.png";
import Button from "./Button";

const UpdateProfilePicture = ({ handleUrl }) => {
  const [file, setFile] = useState(null);
  const [photoURL, setPhotoURL] = useState(emptyAvatar);
  const [showProgress, setShowProgress] = useState("");

  const handleDelete = () => {
    // Create a reference to the file to delete
    const desertRef = ref(storage, "images/star-icon-13.jpg");

    // Delete the file
    deleteObject(desertRef)
      .then(() => {
        console.log("File deleted successfully");
      })
      .catch((error) => {
        console.log("Uh-oh, an error occurred!", error.message);
      });
  };

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleClick = (e) => {
    e.preventDefault();

    const metadata = {
      contentType: file.name,
    };
    // Upload file and metadata to the object 'images/mountains.jpg'
    const storageRef = ref(storage, "images/" + file.name);
    const uploadTask = uploadBytesResumable(storageRef, file, metadata);

    // Listen for state changes, errors, and completion of the upload.
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        // console.log("Upload is " + progress + "% done");
        setShowProgress("Upload is " + progress + "% done");
        if (progress === 100) {
          console.log("done done");
          setTimeout(() => {
            setShowProgress("");
          }, 4000);
        }
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          // case "running":
          //   console.log("Upload is running");
          //   break;
          default:
            console.log("Nothing running");
        }
      },
      (error) => {
        console.log("Big error my friend...", error.message);
        // A full list of error codes is available at
        // https://firebase.google.com/docs/storage/web/handle-errors
        switch (error.code) {
          case "storage/unauthorized":
            console.log(
              "User doesn't have permission access permission...",
              error.message
            );
            break;
          case "storage/canceled":
            console.log("User canceled the upload...", error.message);
            break;
          case "storage/unknown":
            console.log(
              "Unknown error occurred, inspect error.serverResponse",
              error.message
            );
            break;
          default:
            console.log("Oops, something happened!");
        }
      },
      () => {
        // Upload completed successfully, now we can get the download URL
        getDownloadURL(uploadTask.snapshot.ref).then((storageRef) => {
          console.log("File available at", storageRef);
          setPhotoURL(storageRef);
          handleUrl(storageRef, file);
        });
      }
    );
  };

  return (
    <>
      <div className="container-fluid">
        <div className="progress">
          {showProgress ? <>{showProgress}</> : <></>}
        </div>
        <img
          className="photo-url"
          src={photoURL ? photoURL : emptyAvatar}
          alt="avatar"
        />
      </div>
      <div className="row mt-4">
        <span className="col-6 d-flex justify-content-end">Select files: </span>
        <input
        className="col-6 d-flex justify-content-start"
          type="file"
          id="choose"
          name="choose"
          autoComplete="off"
          multiple
          onChange={handleChange}
          // style={{ backgroundColor: "blue" }}
        />
        <br />
        <br />
        <div className="col-12 d-flex justify-content-center">
          <Button
          className="button btn me-2"
          type="submit"
          onClick={handleClick}
          >
            save
          </Button>
          <Button
            className="button btn ms-2"
            type="button"
            onClick={handleDelete}
          >
            delete
          </Button>
        </div>
      </div>
    </>
  );
};
export default UpdateProfilePicture;
