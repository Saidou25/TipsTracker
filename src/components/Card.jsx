import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import CardBodyProfile from "./CardBodyProfile";
import CardBodyTipsForm from "./CardBodyTipsForm";
import CardBodyDashboard from "./CardBodyDashboard";
import CardBodyLogin from "./CardBodyLogin";
import CardBodySignup from "./CardBodySignup";
import CardBodyUpdate from "./CardBodyUpdate";

import "./Card.css";

const Card = ({ cardBodyTemplate = {}, footer, src }) => {
  const [fieldsData, setFieldsData] = useState("");
  const [titleData, setTitleData] = useState("");

  const { templateTitle, fields } = cardBodyTemplate;

  const renderFields = () => {
    if (titleData && fieldsData) {
      switch (titleData) {
        case "Signup":
          return <CardBodySignup fields={fieldsData} title={titleData} />;
        case "Login":
          return <CardBodyLogin fields={fieldsData} title={titleData} />;
        case "profile":
          return <CardBodyProfile fields={fields} src={src} />;
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
          return (
            <CardBodyDashboard
              // fields={fields}
              cardBodyTemplate={cardBodyTemplate}
            />
          );
      }
    }
  };

  useEffect(() => {
    if (fields && templateTitle) {
      // console.log(fields);
      // console.log(templateTitle)
      setFieldsData(fields);
      setTitleData(templateTitle);
    }
  }, [fields, templateTitle]);

  return (
    <div
      className="card main-card"
      // role="test-card"
    >
      <div className="card-title p-5">{titleData}</div>
      <div className="card-body">{renderFields()}</div>
      <div className="card-footer p-5">
        {window.location.pathname === "/profile" ? (
          <div className="profile-footer">
            <span>You can update your profile </span>
            <NavLink className="update" to="/update">
              <span>here</span>
            </NavLink>
          </div>
        ) : (
          <>{footer}</>
        )}
      </div>
    </div>
  );
};

export default Card;
