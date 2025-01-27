import React, { useMemo } from "react";
import { tipsFormData } from "../data";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { dateFormat } from "../helpers/dateFormat";

import Navbar from "../components/Navbar";
import EnterTipsCard from "./EnterTipsCard";
import Success from "../components/Success";

import "./EnterTips.css";

const EnterTips = () => {
  const [success, setSuccess] = useState("");

  const navigate = useNavigate();
  const date = useMemo(() => new Date(), []);
  const { fullDayName, formattedDate } = dateFormat(date);

  const showSuccessCard = (data) => {
    if (
      data === "Tips added successfully..." ||
      data === "Today's tips successfully adjusted..."
    ) {
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
          <div className="card card-success">
            <div className="card-title p-5">{success}</div>
            <Success success={success} />
          </div>
        ) : (
          <div className="card main-card" data-testid="main-card">
            <div className="card-tips-title p-4">
              <span>{tipsFormData.templateTitle}</span>
              <span>
                {fullDayName} {formattedDate}
              </span>
            </div>
            <EnterTipsCard
              data-testid="card-body-tips-form"
              cardBodyTemplate={tipsFormData}
              showSuccess={showSuccessCard}
            />
            <div className="card-footer p-5">{tipsFormData.footer}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EnterTips;
