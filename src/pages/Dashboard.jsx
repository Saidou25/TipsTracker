import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { collection, getDocs } from "firebase/firestore";
import { auth, db } from "../firebase";
import { dashboardData } from "../data";
import findUser from "../UseFindUser";

import Navbar from "../components/Navbar";
import Card from "../components/Card";

import "./Dashboard.css";

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [userTipsData, setUserTipsData] = useState([]);

  const { user, loading } = findUser();

  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      // console.log(`User with the uid ${uid} is loggedin`);
    } else {
      // console.log("No user loggedin");
    }
  });

  useEffect(() => {
    // Getting all users collections from firebase
    const inconue = async () => {
      const querySnapshot = await getDocs(collection(db, "users"));
      const dataArray = []; // Initialize an array to store the stringified objects
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        // console.log(`${doc.id} => ${JSON.stringify(data)}`);
        dataArray.push(data); // Push the data object into the dataArray
      });

      setUsers(dataArray); // list of users and their collection
    };
    inconue();
  }, []);

  useEffect(() => {
   // filtering all collections to find the one belonging to the loggedinUser
    if (users.length) {
      const loggedinUser = users.filter((user) => user.email === user.email);

      if (!loggedinUser[0].tips) {
        // console.log("there are no tips yet for this user");
      }
      if (loggedinUser[0].tips) {
        // console.log("there are tips for this user");
        const currentUserTips = loggedinUser[0].tips;
        setUserTipsData(currentUserTips); // Getting tips of the loggedinUser
      }
    }
  }, [users, user]);

  return (
    <div className="grad1">
      <Navbar />
      <div className="container-fluid g-0">
        <Card
          className="p-0 m-0 g-0"
          cardBodyTemplate={{
            title: dashboardData.templateTitle,
            fields: userTipsData,
            loggedinUser: user,
            footer: dashboardData.footer,
          }}
        />
      </div>
    </div>
  );
};

export default Dashboard;
