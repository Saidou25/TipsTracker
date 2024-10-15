import emptyAvatar from "../assets/profileicon.png";

import "./Card.css";
const CardBodyProfile = ({ cardBodyTemplate }) => {
  return (
    <div
      className="card main-card"
      // role="test-card"
    >
      <div className="card-title p-5">{cardBodyTemplate.title}</div>
      <div className="col-12">
        <div className="container-fluid">
          <img
            className="photo-url"
            src={
              cardBodyTemplate?.loggedinUser?.photoURL
                ? cardBodyTemplate.loggedinUser.photoURL
                : emptyAvatar
            }
            alt="avatar"
          />
        </div>
      </div>
      <section className="profile-info mt-4 mx-5">
        <p className="col-12">
          Display name: {cardBodyTemplate?.loggedinUser?.displayName}
        </p>
        <p className="col-12">
          Contact: {cardBodyTemplate?.loggedinUser?.email}
        </p>
        <p className="col-12">
          Using Tip Tracker since:{" "}
          {/* {cardBodyTemplate?.loggedinUser.metadata.creationTime} */}
        </p>
      </section>
      <div className="card-footer p-5">{cardBodyTemplate.footer}</div>
    </div>
  );
};
export default CardBodyProfile;
