import { signupData } from "../data";
import CardBodySignup from "../components/CardBodySignup";

const Signup = () => {
  return (
    <div className="container-fluid g-0">
      <div
        className="card main-card"
        // role="test-card"
      >
        <div className="card-title p-5">{signupData.templateTitle}</div>
        <CardBodySignup
          className="p-0 m-0 g-0"
          cardBodyTemplate={{
            fields: signupData.fields,
          }}
        />
        <div className="card-footer p-5">{signupData.footer}</div>
      </div>
    </div>
  );
};

export default Signup;
