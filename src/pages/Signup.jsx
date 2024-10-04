import { signupData } from "../data";
import Card from "../components/Card";

const Signup = () => {
  return (
    <div className="container-fluid g-0">
      <Card
        className="p-0 m-0 g-0"
        cardBodyTemplate={{
          title: signupData.templateTitle,
          fields: signupData.fields,
          footer: signupData.footer,
        }}
      />
    </div>
  );
};

export default Signup;
