import React from "react";
import { useEffect, useState } from "react";
import { auth, db, storage } from "../firebase";
import { deleteUser, signOut } from "firebase/auth";
import { deleteObject, ref } from "firebase/storage";
import { deleteDoc, doc } from "firebase/firestore";
import { updateData } from "../data";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import findUser from "../UseFindUser";
import ModalWindow from "../components/ModalWindow";
import UpdateCard from "./UpdateCard";
import Success from "../components/Success";

import "./EnterTips.css";

const Update = () => {
  const { user, loading } = findUser();
  const [showModalWindow, setShowModalWindow] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [error, setError] = useState(""); // State for error
  const [success, setSuccess] = useState("");

  const navigate = useNavigate();

  // Showing success message when update completed
  const showSuccessCard = (data) => {
    if (data === "Profile successfully updated...") {
      setSuccess(data);
      setTimeout(() => {
        setSuccess("");
        navigate("/profile");
      }, 4000);
    } else if (data === "Your account has been deleted. GoodBye...") {
      // Showing success message when user's account deletion is completed
      setSuccess(data);
      setTimeout(() => {
        setSuccess("");
        navigate("/");
      }, 4000);
    } else {
      setSuccess("");
    }
  };

  // Manages if modal window should be closed or opened
  const handleClick = () => {
    setShowModalWindow(true);
  };

  const handleClose = () => {
    setShowModalWindow(false);
    setError(""); // Reset error state on close
  };

  // Function to delete Firebase Auth user
  const deleteAuthUser = async (user) => {
    try {
      await deleteUser(user);
    } catch (error) {
      setError(error.message); // Set error message
    }
  };

  // Function to delete Firestore user
  const deleteFirestoreUser = async (userId) => {
    try {
      await deleteDoc(doc(db, "users", userId));
    } catch (error) {
      setError(error.message); // Set error message
    } finally {
      deleteAuthUser(user);
    }
  };

  // Function to delete user's profile picture in Firebase storage
  const deleteProfilePicture = async (user) => {
    if (user.photoURL) {
      const imageRef = ref(storage, user.photoURL);
      try {
        await deleteObject(imageRef);
      } catch (error) {
        setError(error.message); // Set error message
      }
    }
  };

  const handleConfirm = async () => {
    setIsDeleting(true);
    setError(""); // Reset error state before deletion
    const userId = user.uid;
    try {
      // Wait for storage deletion to complete
      await deleteProfilePicture(user);
      // Wait for Firestore deletion to complete
      await deleteFirestoreUser(userId);
      // Wait for Auth deletion to complete
      await deleteAuthUser(user);
      // If all deletions were successful, sign out and navigate
      await signOut(auth);
      navigate("/");
    } catch (error) {
      setError("Error during deletion");
    } finally {
      setIsDeleting(false);
      setShowModalWindow(false);
      setSuccess("Your account has been deleted. GoodBye...");
    }
  };

  useEffect(() => {
    // Clears the success state when the component mounts
    setSuccess("");
  }, []);

  return (
    <div className="grad1">
      <Navbar />
      <div className="container-fluid g-0">
        {success ? (
          <div className="card card-success">
            <div className="card-body">
              <Success success={success} />
            </div>
          </div>
        ) : (
          <UpdateCard
            // cardBodyTemplate={{
            //   templateTitle: updateData.templateTitle,
            //   fields: updateData.fields,
            //   footer: (
            //     <div className="card-footer p-5">
            //       <span>You can delete your account </span>
            //       <span className="here-text" onClick={handleClick}>
            //         here
            //       </span>
            //     </div>
            //   ),
            // }}
            // showSuccess={showSuccessCard}
            cardBodyTemplate={updateData} 
            showSuccess={() => {}}
          
          />
        )}
        {showModalWindow && (
          <ModalWindow onConfirm={handleConfirm} onClose={handleClose} />
        )}
        {isDeleting && <p>Deleting your account...</p>}
        {error && <p className="error-message">{error}</p>}
      </div>
    </div>
  );
};

export default Update;
