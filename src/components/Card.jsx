import { useEffect, useState } from "react";

import CardBodyProfile from "./CardBodyProfile";
import CardBodyTipsForm from "./CardBodyTipsForm";
import CardBodyDashboard from "./CardBodyDashboard";
import CardBodyLogin from "./CardBodyLogin";
import CardBodySignup from "./CardBodySignup";
import CardBodyUpdate from "./CardBodyUpdate";

import "./Card.css";

const Card = ({ cardBodyTemplate = {}, src }) => {
  const [fieldsData, setFieldsData] = useState("");
  const [titleData, setTitleData] = useState("");

  const { title, templateTitle, fields, footer } = cardBodyTemplate;

  console.log(cardBodyTemplate);

  const renderFields = () => {
    if (title) {
      switch (title) {
        case "Signup":
          return <CardBodySignup fields={fieldsData} title={titleData} />;
        case "Login":
          return <CardBodyLogin fields={fieldsData} title={titleData} />;
        case "profile":
          return <CardBodyProfile cardBodyTemplate={cardBodyTemplate} />;
        case "tipsForm":
          return (
            <CardBodyTipsForm
              fields={fields}
              cardBodyTemplate={cardBodyTemplate}
            />
          );
        case "update":
          return <CardBodyUpdate fields={fields} src={src} />;
        default:
          return <CardBodyDashboard cardBodyTemplate={cardBodyTemplate} />;
      }
    }
  };

  useEffect(() => {
    if (fields && templateTitle) {
      setFieldsData(fields);
      setTitleData(templateTitle);
    }
  }, [fields, templateTitle]);

  return (
    <div
      className="card main-card"
      // role="test-card"
    >
      <div className="card-title p-5">{title}</div>
      <div className="card-body">{renderFields()}</div>
      <div className="card-footer p-5">{footer}</div>
    </div>
  );
};

export default Card;
