import { tipsFormData } from "../data";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import CardBodyTipsForm from "../components/CardBodyTipsForm";
import Success from "../components/Success";

import "../components/EnterTips.css"

const EnterTips = () => {
  const [success, setSuccess] = useState("");

  const navigate = useNavigate();

  const showSuccessCard = (data) => {
    if (data === "Tips added successfully..." || data === "Today's tips successfully adjusted...") {
      setSuccess(data);
      setTimeout(() => {
        setSuccess("");
        navigate("/dashboard");
      }, 5000);
    }
  };
  return (
    <div className="grad1">
      <Navbar />
      <div className="container-fluid g-0">
        {success ? (
            <div
            className="card card-success"
            // role="test-card"
          >
             <div className="card-title p-5">{success}</div>
          <Success success={success}/>
          </div>
        ) : (
          <div
            className="card main-card"
            // role="test-card"
          >
            <div className="card-title p-5">{tipsFormData.templateTitle}</div>
            <CardBodyTipsForm
              role="card"
              cardBodyTemplate={{
                title: tipsFormData.templateTitle,
                fields: tipsFormData.fields,
                footer: tipsFormData.footer,
              }}
              showSuccess={showSuccessCard}
              data-testid="card-component"
            />
            <div className="card-footer p-5">{tipsFormData.footer}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EnterTips;
