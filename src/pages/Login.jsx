import { loginData } from "../data";
import CardBodyLogin from "../components/CardBodyLogin";

const Login = () => {
  return (
    <div className="container-fluid g-0">
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
        />
        <div className="card-footer p-5">{loginData.footer}</div>
      </div>
    </div>
  );
};

export default Login;
