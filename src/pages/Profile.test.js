import React from "react";
import { render, screen } from "@testing-library/react";
import ProfileCard from "./ProfileCard";

// Mocking the Navbar component
jest.mock("../components/Navbar", () => {
  return () => <div data-testid="mock-navbar"></div>;
});

test("card should be rendered within Profile component", () => {
  render(
    <ProfileCard
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
