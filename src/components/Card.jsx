

import "./Card.css";

const Card = ({ cardBodyTemplate = {} }) => {
  const { title, footer } = cardBodyTemplate;

  // console.log(cardBodyTemplate);

  const renderFields = () => {
    if (title) {
      switch (title) {
        
        // case "Update your profile":
        default:
          // return <CardBodyUpdate cardBodyTemplate={cardBodyTemplate} />;
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
