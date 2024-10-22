import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginData } from "../data";

import LoginCard from "./LoginCard";
import Success from "../components/Success";

const Login = () => {
  const [success, setSuccess] = useState("");

  const navigate = useNavigate();

  const showSuccessCard = (data) => {
    if (data ===  "You are logged in") {
      setSuccess(data);
      setTimeout(() => {
        setSuccess("");
        navigate("/dashboard");
      }, 3000);
    }
  };
  return (
    <div className="container-fluid g-0">
      {success ? (
        <Success success={success} />
      ) : (
        <div
          className="card main-card"
          // role="test-card"
        >
          <div className="card-title p-5">{loginData.templateTitle}</div>
          <LoginCard
            className="p-0 m-0 g-0"
            cardBodyTemplate={{
              fields: loginData.fields,
            }}
            showSuccess={showSuccessCard}
          />

          <div className="card-footer p-5">{loginData.footer}</div>
        </div>
      )}
    </div>
  );
};

export default Login;
