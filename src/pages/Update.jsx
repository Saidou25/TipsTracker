import { useState } from "react";
import { deleteUser } from "firebase/auth";
import { db } from "../firebase";
import { deleteDoc, doc } from "firebase/firestore";
import { updateData } from "../data";

import Navbar from "../components/Navbar";
import Card from "../components/Card";
import findUser from "../UseFindUser";
import ModalWindow from "../components/ModalWindow";

// import "./Card.css"

const Update = () => {
  const { user, loading } = findUser();
  const [showModalWindow, setShowModalWindow] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [error, setError] = useState(""); // State for error messages

  const handleClick = () => {
    setShowModalWindow(true);
  };

  const handleClose = () => {
    setShowModalWindow(false);
    setError(""); // Reset error state on close
  };

  // Function to delete Firestore user
  const deleteFirestoreUser = async (userId) => {
    await deleteDoc(doc(db, "users", userId));
    console.log("Firestore user deleted");
  };

  // Function to delete Firebase Auth user
  const deleteAuthUser = async (user) => {
    await deleteUser(user);
    console.log("User deleted.");
  };

  const handleConfirm = async () => {
    setIsDeleting(true);
    setError(""); // Reset error state before deletion
    try {
      // Call both deletion functions
      await Promise.all([deleteFirestoreUser(user.uid), deleteAuthUser(user)]);
    } catch (e) {
      setError(e.message); // Set error message
      console.log(e.message);
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
        <Card
          role="card"
          title={new Date().toString()}
          cardBodyTemplate={{
            title: updateData.templateTitle,
            fields: updateData.fields,
            footer: (
              <div>
                <span>You can delete your account </span>
                <span className="here-text" onClick={handleClick}>
                  here
                </span>
              </div>
            ),
            loggedinUser: user,
            usingSince: "",
          }}
          data-testid="card-component"
        />
      </div>
      {showModalWindow && (
        <ModalWindow onConfirm={handleConfirm} onClose={handleClose} />
      )}
      {isDeleting && <p>Deleting your account...</p>}
      {error && <p className="error-message">{error}</p>}{" "}
      {/* Display error message */}
    </div>
  );
};

export default Update;
