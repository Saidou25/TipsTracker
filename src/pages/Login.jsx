import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginData } from "../data";

import CardBodyLogin from "../components/CardBodyLogin";
import Success from "../components/Success";

const Login = () => {
  const [success, setSuccess] = useState("");

  const navigate = useNavigate();
 
  const showSuccessCard = (data) => {
    if (data === "Tips added successfully" || "You are Loggedin") {
      console.log( typeof data);
      setSuccess(data);
      setTimeout(() => {
        setSuccess("");
        navigate("/dashboard");
      }, 5000);
    }
  };
  return (
    <div className="container-fluid g-0">
      {success === "You are Loggedin" ? (
        <Success success="You are Loggedin" />
      ) : (
        <div
          className="card main-card"
          // role="test-card"
        >
          <div className="card-title p-5">{loginData.templateTitle}</div>
          <CardBodyLogin
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
