import ConfettiComponent from "./ConfettiComponent";
// import "./Confetti.css";

export default function Success() {
  return (
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
  );
}
