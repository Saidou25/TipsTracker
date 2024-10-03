import { loginData } from "../data";
import Card from "../components/Card";

const Login = () => {
  return (
    <div className="container-fluid g-0">
      <Card className="p-0 m-0 g-0" cardBodyTemplate={loginData} />
    </div>
  );
};

export default Login;
