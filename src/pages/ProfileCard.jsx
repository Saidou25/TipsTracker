import React from "react";

import "../components/Card.css";

const ProfileCard = ({ cardBodyTemplate }) => {
  const { loggedinUser, usingSince, imageSrc } = cardBodyTemplate;

  return (
    <div data-testid="main-card">
      <div className="progress">
        <span style={{ visibility: "hidden" }}>showProgress</span>
      </div>
      <div className="container-fluid">
        <img className="photo-url mb-4" src={imageSrc} alt="Profile" />
      </div>
      <div style={{ textAlign: "center" }}>
        {loggedinUser.displayName && (
          <p>username: {loggedinUser.displayName}</p>
        )}
        <p>email: {loggedinUser.email}</p>
        <p>using Since: {usingSince}</p>
      </div>
    </div>
  );
};
export default ProfileCard;
