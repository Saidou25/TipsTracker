import React from "react";
import { render, screen } from "@testing-library/react";
import ProfileCard from "./ProfileCard";

test("renders workPlace body in the <p> with the {field.workPlace} as a prop", () => {
  const cardBodyTemplate = {
    templateTitle: "Profile",
    fields: [
      {
        type: "text",
        label: "displayName",
      },
      {
        label: "email: ",
        type: "email",
      },
      { type: "text", label: "using Tips Tracker since: " },
    ],
  };

  //   const pElement1 = screen.getByText(/displayName/i);
  //   const pElement2 = screen.getByText(/email/i);
  //   expect(pElement1).toBeInTheDocument();
  //   expect(pElement2).toBeInTheDocument();
});
