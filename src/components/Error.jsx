import React from "react";

import "./Error.css";

export default function Error({ message }) {
  console.log("Error message", message);
  return (
    <div
      className="error-div bg-danger p-2"
      data-testid="oops something went wrong..."
    >
      {message}
    </div>
  );
}
