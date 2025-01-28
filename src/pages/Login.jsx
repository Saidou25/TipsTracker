import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginData } from "../data";

import LoginCard from "./LoginCard";
import Success from "../components/Success";

const Login = () => {
  const [success, setSuccess] = useState("");

  const navigate = useNavigate();

  // const { fields, templateTitle, footer } = loginData;

  const showSuccessCard = (data) => {
    if (data === "You are logged in") {
      setSuccess(data);
      setTimeout(() => {
        setSuccess("");
        navigate("/dashboard");
      }, 3000);
    }
  };
  return (
    <>
      {success ? (
        <div className="container-fluid g-0">
          <Success success={success} />
        </div>
      ) : (
        <div className="container-fluid g-0">
          <div className="card main-card" data-testid="main-card">
            <div className="card-title p-5">{loginData.templateTitle}</div>
            <LoginCard
              className="p-0 m-0 g-0"
              cardBodyTemplate={{
                templateTitle: loginData.templateTitle,
                fields: loginData.fields,
                footer: loginData.footer,
              }}
              showSuccess={showSuccessCard}
            />
            <div className="card-footer p-5">{loginData.footer}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
