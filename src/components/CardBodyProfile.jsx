import { auth } from "../firebase";
import "./Card.css";

const CardBodyProfile = ({ src }) => {
  const currentUser = auth.currentUser;

  return (
    <>
      <div className="col-12">
        <div className="container-fluid">
          <img className="photo-url" src={src} alt="avatar" />
        </div>
      </div>
      <section className="profile-info mt-4 mx-5">
        <p className="col-12">Display name: {currentUser?.displayName}</p>
        <p className="col-12">Contact: {currentUser?.email}</p>
        <p className="col-12">
          Using Tip Tracker since: {currentUser?.metadata.creationTime}
        </p>
      </section>
    </>
  );
};
export default CardBodyProfile;
