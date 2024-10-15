import CardBodyProfile from "./CardBodyProfile";
import CardBodyTipsForm from "./CardBodyTipsForm";
import CardBodyDashboard from "./CardBodyDashboard";
import CardBodyLogin from "./CardBodyLogin";
import CardBodySignup from "./CardBodySignup";
import CardBodyUpdate from "./CardBodyUpdate";

import "./Card.css";

const Card = ({ cardBodyTemplate = {} }) => {
  const { title, footer } = cardBodyTemplate;

  // console.log(cardBodyTemplate);

  const renderFields = () => {
    if (title) {
      switch (title) {
        case "Please signup":
          return <CardBodySignup cardBodyTemplate={cardBodyTemplate} />;
        case "Please login":
          return <CardBodyLogin cardBodyTemplate={cardBodyTemplate} />;
        case "Please enter your tips":
          return <CardBodyTipsForm cardBodyTemplate={cardBodyTemplate} />;
        case "Update your profile":
          return <CardBodyUpdate cardBodyTemplate={cardBodyTemplate} />;
        default:
          return <CardBodyDashboard cardBodyTemplate={cardBodyTemplate} />;
      }
    }
  };

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
