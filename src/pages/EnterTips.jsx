import { tipsFormData } from "../data";
import Navbar from "../components/Navbar";
import CardBodyTipsForm from "../components/CardBodyTipsForm";

const EnterTips = () => {

  return (
    <div className="grad1">
      <Navbar />
      <div className="container-fluid g-0">
      <div
        className="card main-card"
        // role="test-card"
      >
        <div className="card-title p-5">{tipsFormData.templateTitle}</div>
        <CardBodyTipsForm
          role="card"
          cardBodyTemplate={{
            title: tipsFormData.templateTitle,
            fields: tipsFormData.fields,
            footer: tipsFormData.footer,
          }}
          data-testid="card-component"
        />
          <div className="card-footer p-5">{tipsFormData.footer}</div>
      </div>
      </div>
    </div>
  );
};

export default EnterTips;
