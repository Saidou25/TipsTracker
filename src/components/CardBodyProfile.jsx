import React from "react";

import "./Card.css";

const CardBodyProfile = ({ cardBodyTemplate }) => {
  const { loggedinUser, usingSince, imageSrc } = cardBodyTemplate;

  return (
    <div data-testid="main-card">
      <div className="container-fluid">
        <img className="photo-url mb-4" src={imageSrc} alt="Profile" />
      </div>
      <div style={{ textAlign: "center" }}>
        <p>username: {loggedinUser.displayName}</p>
        <p>email: {loggedinUser.email}</p>
        <p>Using Since: {usingSince}</p>
      </div>
    </div>
  );
};
export default CardBodyProfile;
