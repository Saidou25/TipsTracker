import ConfettiComponent from "./ConfettiComponent";

export default function Success({ success }) {
 
  return (
    <>
      {success === "You are Loggedin" && (
          <h2>You are logged in...</h2>
      )}
      {success === "Tips added successfully" && (
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
            Congratulation, you earned money!
          </h2>
        </div>
      )}
    </>
  );
}
