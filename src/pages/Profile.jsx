import { useEffect, useState } from "react";
import { auth } from "../firebase";
import { NavLink } from "react-router-dom";
import { profileData } from "../data";

import Card from "../components/Card";
import emptyAvatar from "../assets/profileicon.png";
import Navbar from "../components/Navbar";
import TitleBox from "../components/TitleBox";

import "./Profile.css";

const Profile = () => {
  const [user, setUser] = useState({});
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
    src: user?.photoURL ? user.photoURL : emptyAvatar,
    loggedinUser: {},
    usingSince: "",
  });

  const currentUser = auth.currentUser;

  useEffect(() => {
    if (currentUser) {
      // Removing the time from the creationTime metadata
      const creationTimeArr = currentUser.metadata.creationTime
        .split(" ")
        .slice(0, 4);
      const removedDay = creationTimeArr.shift().replace(",", "");
      creationTimeArr.unshift(removedDay);

      setUser(currentUser);
      setCardBodyTemplate({
        ...cardBodyTemplate,
        loggedinUser: currentUser,
        usingSince: creationTimeArr.join().replaceAll(",", " "),
      });
    }
  }, [currentUser]);

  return (
    <div className="grad1">
      <Navbar />
      <div className="container-fluid g-0">
        <TitleBox
          firstname={
            cardBodyTemplate.displayName ? cardBodyTemplate.displayName : ""
          }
        />
        <Card cardBodyTemplate={cardBodyTemplate} />
      </div>
    </div>
  );
};
export default Profile;
