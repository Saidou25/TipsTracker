import React from "react";
import { render, screen } from "@testing-library/react";
import CardBodyProfile from "../components/CardBodyProfile";

// Mocking the Navbar component
jest.mock("../components/Navbar", () => {
  return () => <div data-testid="mock-navbar"></div>;
});

test("card should be rendered within Profile component", () => {
  render(
    <CardBodyProfile
      cardBodyTemplate={{
        fields: [], 
        loggedinUser: {},
        usingSince: "Some date", 
        imageSrc: "path/to/image.png", 
      }}
    />
  );
  // Check if the Card component is rendered
  const cardElement = screen.getByTestId("main-card");
  expect(cardElement).toBeInTheDocument();
});
