import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../firebase";

import "./Users.css";

export default function Users() {
  const [usersData, setUsersData] = useState("");

  // Getting all users collections from firebase
  useEffect(() => {
    const dataArray = []; // Initialize an array to store the stringified objects
    const inconue = async () => {
      const querySnapshot = await getDocs(collection(db, "users"));
      querySnapshot.forEach((doc) => {
        // console.log(`${doc.id} => ${doc.data()}`);
        const data = doc.data();
        dataArray.push(data); // Push the data object into the dataArray
      });
      setUsersData(dataArray);
    };
    inconue();
  }, []);

  return (
    <>
      <div className="row users-row g-0">
        {usersData &&
          usersData.map((userData) => (
            <div className="col-2 picture-column g-0" key={userData.email}>
              <div className="picture-div">
                <img
                  className="dashboard-picture img-fluid"
                  src={userData.photoURL}
                  alt="profile-picture"
                />
              </div>
              <span className="username">{userData.displayName}</span>
            </div>
          ))}
      </div>
    </>
  );
}
