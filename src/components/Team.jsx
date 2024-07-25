import { useEffect, useState } from "react";

const Team = () => {
  const [result, setResult] = useState("");

  const panier = ["orange", "banana", "fraise", "melon", "abricot"];

  useEffect(() => {
    for (let i = 0; i < panier.length; i++) {
      if (i === panier.length - 1) {
        setResult(i + 1);
      }
    }
  }, [panier.length]);

  return (
    <h1
      className="d-flex justify-content-center"
      style={{ marginTop: "40%", fontSize: "8rem" }}
    >
      {result}
    </h1>
  );
};

export default Team;
