import "./Card.css";

const CardBodyProfile = ({ cardBodyTemplate }) => {
// console.log(cardBodyTemplate)
// console.log(cardBodyTemplate?.loggedinUser.metadata?.creationTime.split(" "))

  return (
    <>
      <div className="col-12">
        <div className="container-fluid">
          <img className="photo-url" src={cardBodyTemplate.src} alt="avatar" />
        </div>
      </div>
      <section className="profile-info mt-4 mx-5">
        <p className="col-12">Display name: {cardBodyTemplate.loggedinUser.displayName}</p>
        <p className="col-12">Contact: {cardBodyTemplate.loggedinUser.email}</p>
        <p className="col-12">
          Using Tip Tracker since: {cardBodyTemplate.usingSince}
        </p>
      </section>
    </>
  );
};
export default CardBodyProfile;
