import { useEffect, useState } from "react";
import { auth } from "../firebase";
import { NavLink } from "react-router-dom";
import { profileData } from "../data";

import Card from "../components/Card";
import Navbar from "../components/Navbar";

import "./Profile.css";

const Profile = () => {
  const [cardBodyTemplate, setCardBodyTemplate] = useState({
    title: profileData.templateTitle,
    fields: profileData.fields,
    footer: (
      <div className="profile-footer">
        <span>You can update your profile </span>
        <NavLink className="update" to="/update">
          <span>here</span>
        </NavLink>
      </div>
    ),
    loggedinUser: {},
    usingSince: "",
  });

  const [loading, setLoading] = useState(true); // State for loading

  useEffect(() => {
    // Start the loading timeout
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 500); // Set minimum loading duration to 5000 milliseconds

    // Listen for authentication state changes
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      if (currentUser) {
        // Removing the time from the creationTime metadata
        const creationTimeArr = currentUser.metadata.creationTime
          .split(" ")
          .slice(0, 4);
        const removedDay = creationTimeArr.shift().replace(",", "");
        creationTimeArr.unshift(removedDay);

        // Making sure we are keeping the previous data from cardbodytemplate
        setCardBodyTemplate((prevTemplate) => ({
          ...prevTemplate,
          loggedinUser: currentUser,
          usingSince: creationTimeArr.join().replaceAll(",", " "),
        }));

        // After setting user data, ensure loading persists until timeout
        setLoading(true); // Keep loading true while data is being fetched
      } else {
        // If no user is logged in, we can set loading to false immediately
        setLoading(false);
      }
    });

    return () => {
      clearTimeout(timeout); // Clear timeout on unmount
      unsubscribe();
    };
  }, []);

  // Only show loading message until the timeout completes
  if (loading) {
    return <p>Loading user data...</p>; // Show loading message
  }

  return (
    <div className="grad1">
      <Navbar />
      <div className="container-fluid g-0">
        <Card cardBodyTemplate={cardBodyTemplate} />
      </div>
    </div>
  );
};

export default Profile;
