import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { profileData } from "../data";
import findUser from "../UseFindUser";

import CardBodyProfile from "../components/CardBodyProfile";

import Navbar from "../components/Navbar";

import "./Profile.css";

const Profile = () => {
  const [creationTime, setCreationTime] = useState();
  const { user, loading } = findUser(); // Finds the loggedinUser

  useEffect(() => {
    if (user.creationTime) {
      // Removing the time from the creationTime metadata
      const creationTimeArr = user.metadata.creationTime.split(" ").slice(0, 4);
      const removedDay = creationTimeArr.shift().replace(",", "");
      creationTimeArr.unshift(removedDay);

      // Setting the creationTime with new array (creationTimeArr)
      setCreationTime(creationTimeArr.join().replaceAll(",", " "));
    }
  }, [user]);

  // Only show loading message until the timeout completes
  if (loading) {
    return <p>Loading user data...</p>; // Show loading message
  }

  return (
    <div className="grad1">
      <Navbar />
      <div className="container-fluid g-0">
        <CardBodyProfile
          cardBodyTemplate={{
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
            loggedinUser: user,
            usingSince: creationTime,
          }}
        />
      </div>
    </div>
  );
};

export default Profile;
