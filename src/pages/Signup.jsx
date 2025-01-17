import React from "react";
import { signupData } from "../data";
import SignupCard from "./SignupCard";

const Signup = () => {
  return (
    <div className="container-fluid g-0">
      <SignupCard
        className="p-0 m-0 g-0"
        cardBodyTemplate={{
          templateTitle: signupData.templateTitle,
          fields: signupData.fields,
          footer: signupData.footer,
        }}
      />
    </div>
  );
};

export default Signup;
