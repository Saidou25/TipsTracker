import React from "react";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { dashboardData } from "../data";
import findUser from "../UseFindUser";

import Navbar from "../components/Navbar";
import DashboardCard from "./DashboardCard";
import Users from "./Users";

import "./Dashboard.css";

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [userTipsData, setUserTipsData] = useState("");

  const { user: currentUser, loading } = findUser();

  useEffect(() => {
    // Getting all users collections from firebase
    const inconue = async () => {
      const querySnapshot = await getDocs(collection(db, "users"));
      const dataArray = []; // Initialize an array to store the stringified objects
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        dataArray.push(data); // Push the data object into the dataArray
      });

      setUsers(dataArray); // list of users and their collection
    };
    inconue();
  }, []);

  useEffect(() => {
    // filtering all collections to find the one belonging to the loggedinUser
    if (users.length) {
      const loggedinUser = users.filter(
        (user) => user.email === currentUser.email
      );

      if (!loggedinUser[0]?.tips) {
        setUserTipsData([]);
      }
      if (loggedinUser[0]?.tips) {
        setUserTipsData(loggedinUser[0].tips); // Getting tips of the loggedinUser
      }
    }
  }, [users, currentUser]);

  return (
    <div className="grad1">
      <Navbar />
      <div className="container-fluid g-0">
        <div
          className="card main-card"
          // role="test-card"
        >
          <div className="card-title p-5">{dashboardData.templateTitle}</div>
          <DashboardCard
            className="p-0 m-0 g-0"
            cardBodyTemplate={{
              fields: dashboardData.fields,
              tips: userTipsData,
              loggedinUser: currentUser,
            }}
          />
          <div className="card-footer p-5">{dashboardData.footer}</div>
        </div>
      </div>
      <h4 className="users-title">Others using Tips Tracker</h4>
      <div className="users-container g-0">
        <div className="card users-card">
          <Users />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
