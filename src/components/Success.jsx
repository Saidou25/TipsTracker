import ConfettiComponent from "./ConfettiComponent";

export default function Success({ success }) {
  return (
    <>
      {success === "Username successfully updated." && (
        <h2
          style={{
            textAlign: "center",
            marginTop: "20%",
            marginBottom: "40%",
            marginRight: "5%",
            marginLeft: "5%",
          }}
        >
          {success}
        </h2>
      )}
      {success === "Profile Picture successfully updated." && (
        <h2
          style={{
            textAlign: "center",
            marginTop: "20%",
            marginBottom: "40%",
            marginRight: "5%",
            marginLeft: "5%",
          }}
        >
          {success}
        </h2>
      )}
      {success === "Your account has been deleted. GoodBye..." && (
        <h2>{success}</h2>
      )}
      {success === "You are logged in" && <h2>{success}</h2>}
      {(success === "Tips added successfully..." ||
        success === "Today's tips successfully adjusted...") && (
        <div className="confetti-container">
          <ConfettiComponent />
          <h2
            style={{
              textAlign: "center",
              marginTop: "20%",
              marginBottom: "40%",
              marginRight: "5%",
              marginLeft: "5%",
            }}
          >
            {success}
          </h2>
        </div>
      )}
    </>
  );
}
