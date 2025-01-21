import { React, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UpdateProfilePicture from "./UpdateProfilePicture";
import Success from "../components/Success";
import UpdateName from "./UpdateName";

import "../components/Card.css";

const UpdateCard = ({ cardBodyTemplate }) => {
  const [success, setSuccess] = useState("");

  const navigate = useNavigate();

  const { templateTitle, footer } = cardBodyTemplate;

  const showSuccessComp = (successMessage) => {
    setSuccess(successMessage);
    setTimeout(() => {
      setSuccess("");
      navigate("/Profile");
    }, 3000);
  };

  return (
    <div className="card main-card" data-testid="main-card">
      <div className="card-title p-5">{templateTitle}</div>
      {success ? (
        <Success success={success} />
      ) : (
        <div className="card-body">
          <UpdateProfilePicture
            showSuccess={showSuccessComp}
            data-testid="mock-update-profile-picture"
          />
          <UpdateName
            cardBodyTemplate={cardBodyTemplate}
            showSuccess={showSuccessComp}
          />
        </div>
      )}
      <div className="card-footer p-5">{footer}</div>
    </div>
  );
};
export default UpdateCard;
