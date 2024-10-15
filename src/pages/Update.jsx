import { useState } from "react";
import { auth, db, storage } from "../firebase";
import { deleteUser, signOut } from "firebase/auth";
import { deleteObject, ref } from "firebase/storage";
import { deleteDoc, doc } from "firebase/firestore";
import { updateData } from "../data";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import Card from "../components/Card";
import findUser from "../UseFindUser";
import ModalWindow from "../components/ModalWindow";
import CardBodyUpdate from "../components/CardBodyUpdate";

const Update = () => {
  const { user, loading } = findUser();
  const [showModalWindow, setShowModalWindow] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [error, setError] = useState(""); // State for error messages

  const navigate = useNavigate();

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
      console.log("User deleted.");
    } catch (e) {
      setError(e.message); // Set error message
    }
  };

  // Function to delete Firestore user
  const deleteFirestoreUser = async (userId) => {
    try {
      await deleteDoc(doc(db, "users", userId));
      console.log("Firestore user deleted");
    } catch (e) {
      setError(e.message); // Set error message
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
        console.log("Image deleted successfully");
      } catch (e) {
        setError(e.message); // Set error message
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
      console.log("Error during deletion:", error.message);
    } finally {
      setIsDeleting(false);
      setShowModalWindow(false);
    }
  };

  if (loading) {
    return <p>Loading user data...</p>; // Show loading message
  }

  return (
    <div className="grad1">
      <Navbar />
      <div className="container-fluid g-0">
        <div
          className="card main-card"
          // role="test-card"
        >
          <div className="card-title p-5">{updateData.templateTitle}</div>
          <CardBodyUpdate
            role="card"
            title={new Date().toString()}
            cardBodyTemplate={{
              fields: updateData.fields,
              gedinUser: user,
              usingSince: "",
            }}
            data-testid="card-component"
          />
          <div className="card-footer p-5">
            <div>
              <span>You can delete your account </span>
              <span className="here-text" onClick={handleClick}>
                here
              </span>
            </div>
          </div>
        </div>
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
