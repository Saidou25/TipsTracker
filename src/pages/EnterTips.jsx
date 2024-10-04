import { tipsFormData } from "../data";
import Navbar from "../components/Navbar";
import Card from "../components/Card";

const EnterTips = () => {
  // const date = new Date().toString()
  return (
    <div className="grad1">
      <Navbar />
      <div className="container-fluid g-0">
        <Card
          role="card"
          cardBodyTemplate={{
            title: tipsFormData.templateTitle,
            fields: tipsFormData.fields,
            footer: tipsFormData.footer,
          }}
          data-testid="card-component"
        />
      </div>
    </div>
  );
};

export default EnterTips;
