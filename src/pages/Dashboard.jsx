import { useEffect, useState } from "react";
// import { signOut, onAuthStateChanged } from "firebase/auth";
// import { collection, getDocs } from "firebase/firestore";
import { auth, db } from "../firebase";
// import { IoPower } from "react-icons/io5";
import { tipsDataFeed } from "../data";

// import Button from "../components/Button";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import TitleBox from "../components/TitleBox";

import "./Dashboard.css";

const Dashboard = () => {
  // const [users, setUsers] = useState([]);
  const [userTipsData, setUserTipsData] = useState([]);

  // const currentUser = auth.currentUser;

  // onAuthStateChanged(auth, (user) => {
  //   if (user) {
  //     const uid = user.uid;
  //     // console.log(`User with the uid ${uid} is loggedin`);
  //   } else {
  //     // console.log("No user loggedin");
  //   }
  // });

  // const logout = () => {
  //   signOut(auth)
  //     .then(() => {
  //       console.log("Sign-out successful");
  //     })
  //     .catch((error) => {
  //       console.log("An error happened.", error.message);
  //     });
  // };

  // useEffect(() => {
  //   const inconue = async () => {
  //     const querySnapshot = await getDocs(collection(db, "users"));
  //     const dataArray = []; // Initialize an array to store the stringified objects
  //     querySnapshot.forEach((doc) => {
  //       const data = doc.data();
  //       // console.log(`${doc.id} => ${JSON.stringify(data)}`);
  //       dataArray.push(data); // Push the data object into the dataArray
  //     });

  //     setUsers(dataArray); // list of users and their collection
  //   };
  //   inconue();
  // }, []);

  // useEffect(() => {
  //   if (users.length) {
  //     const loggedinUser = users.filter(
  //       (user) => user.email === currentUser.email
  //     );

  //     if (!loggedinUser[0].tips) {
  //       console.log("there are no tips yet for this user");
  //     }
  //     if (loggedinUser[0].tips) {
  //       console.log("there are tips for this user");
  //       // setUpdateCurrentUserCollection(true);
  //       const currentUserTips = loggedinUser[0].tips
  //       setUserTipsData(currentUserTips); // pulling the tips list of the current loggedin user
  //     }
  //   }
  // }, [users, currentUser]);

  useEffect(() => {
    if (tipsDataFeed) {
      // console.log("tipsDataFeed", tipsDataFeed);
      setUserTipsData(tipsDataFeed);
    }
  }, [tipsDataFeed]);

  return (
    <div className="grad1">
      <Navbar />
      <div className="container-fluid g-0">
        <TitleBox firstname="Sy" />
        <Card
          className="p-0 m-0 g-0"
          title="Dashboard title"
          footer="Dashboard footer"
          cardBodyTemplate={userTipsData}
        />
      </div>
      {/* <Button type="button" onClick={inconue}>
        inconue
      </Button> */}
    </div>
  );
};

export default Dashboard;
