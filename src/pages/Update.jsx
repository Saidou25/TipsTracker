import { useState } from "react";
import { deleteUser } from "firebase/auth";
import { db } from "../firebase";
import { deleteDoc, doc } from "firebase/firestore";
import { updateData } from "../data";

import Navbar from "../components/Navbar";
import Card from "../components/Card";
import Button from "../components/Button";
import findUser from "../UseFindUser";

const Update = () => {
  const { user, loading } = findUser();

  const deleteFirestoreUser = async () => {
    try {
      await deleteDoc(doc(db, "users", user.uid));
    } catch (e) {
      console.log(e.message);
    } finally {
      console.log("success deleting firestore user");
    }
  };

  const deleteCurrentUser = () => {
    console.log(user.uid);

    deleteUser(user)
      .then(() => {
        console.log("User deleted.");
      })
      .catch((error) => {
        console.log("An error ocurred.", error.message);
      });
  };

  // Only show loading message until the timeout completes
  // if (loading) {
  //   return <p>Loading user data...</p>; // Show loading message
  // }

  return (
    <div className="grad1">
      <Navbar />
      <div className="container-fluid g-0">
        <Card
          role="card"
          title={new Date().toString()}
          footer="You can delete your account here"
          cardBodyTemplate={{
            title: updateData.templateTitle,
            fields: updateData.fields,
            footer: "footer",
            loggedinUser: user,
            usingSince: "",
          }}
          data-testid="card-component"
        />
      </div>
      <Button
        type="button"
        onClick={(e) => {
          deleteCurrentUser(e);
          deleteFirestoreUser(e);
        }}
      >
        delete your account here.
      </Button>
    </div>
  );
};

export default Update;
