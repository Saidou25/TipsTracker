import React from "react";

export default function Error({ error }) {
  console.log(error);
  return (
    <div
      className="text-primary d-flex align-items-center justify-content-center"
      data-testid="oops something went wrong..."
      style={{
        margin: "3%",
        border: "1px solid",
        borderRadius: "10px",
        height: "50px",
        padding: "3%",
        // color: "rgba(210, 35, 241, 0.92)"
      }}
    >
      {error}
    </div>
  );
}
