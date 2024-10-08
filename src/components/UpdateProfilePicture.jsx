import { useEffect, useState } from "react";
import { storage } from "../firebase";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import findUser from "../UseFindUser";

import emptyAvatar from "../assets/profileicon.png";
import Button from "./Button";

const UpdateProfilePicture = ({ uploadedPhotoUrl }) => {
  const [srcUrl, setSrcUrl] = useState("");
  const [newlyUploadedPhotoURL, setNewlyUplaodedPhotoURL] = useState("");
  const [file, setFile] = useState(null);
  const [showProgress, setShowProgress] = useState("");

  const { user } = findUser();

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
          setNewlyUplaodedPhotoURL(storageRef);
          setSrcUrl(storageRef);
        });
      }
    );
  };
  useEffect(() => {
    // Setting src according to different conditions
    // 1. if user already has a profile picturen then we display it
    if (user.photoURL && !newlyUploadedPhotoURL) {
      // console.log("case 1");
      const prevPhoto = user.photoURL;
      setSrcUrl(prevPhoto);
    } else if (newlyUploadedPhotoURL) {
      // If users uploads a new profile picture we display it and send it to CardBody update
      //so the previous profile picture can be deleted and we also display the newly uploaded picture by setting srcUrl with it
      // console.log("case 2");
      setSrcUrl(newlyUploadedPhotoURL);
      uploadedPhotoUrl(newlyUploadedPhotoURL);
    } else {
      // otherwise it means no profile picture has been set so we display an empty avatar
      // console.log("case 3");
      setSrcUrl(emptyAvatar);
    }
  }, [user.photoURL, newlyUploadedPhotoURL]);

  return (
    <>
      <div className="container-fluid">
        <div className="progress">
          {showProgress ? <>{showProgress}</> : <></>}
        </div>
        <img className="photo-url" src={srcUrl} alt="avatar" />
      </div>
      <div className="row justify-content-center g-0 mt-4">
        <div className="col-lg-12 col-sm-8 d-flex justify-content-center">
          <input
            type="file"
            id="choose"
            name="choose"
            autoComplete="off"
            multiple
            onChange={handleChange}
          />
        </div>
        <br />
        <br />
        <div className="col-12 d-flex justify-content-center">
          <Button className="button" type="submit" onClick={handleClick}>
            save
          </Button>
        </div>
      </div>
    </>
  );
};
export default UpdateProfilePicture;
