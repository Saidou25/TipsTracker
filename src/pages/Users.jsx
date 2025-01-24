import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import defaultPhoto from "../assets/profileicon.png";

import "./Users.css";

export default function Users() {
  const [usersData, setUsersData] = useState("");
  const [rotate, setRotate] = useState("");
  const [divIndex, setDivIndex] = useState("");
  const [showingImage, setShowingImage] = useState(true);

  const rotateFunc = (index) => {
    setDivIndex(index);
    setRotate("rotate-image");
  };

//  PhotoUrl disappear at 180 degrees. need a state managment in src which will trigger a class for css
// Username appears at 180 degrees. need a state managment in usrname div which will trigger a class in css. Then the text will need to be rotated.




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
          usersData.map((userData, index) => (
            <div className="col-2 picture-column g-0" key={userData.email}>
              <div
                className={index === divIndex ? `picture-div ${rotate}` : "picture-div"}
                // onClick={() => rotateFunc(index)}
              >
                {showingImage ? <img
                  className="dashboard-picture"
                  src={userData.photoURL ? userData.photoURL : defaultPhoto}
                  alt="profile-picture"
                /> : <>username div</>}
              
              </div>
              <span className="username">{userData.displayName}</span>
            </div>
          ))}
      </div>
    </>
  );
}
