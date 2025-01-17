import React from "react";
import { render, screen } from "@testing-library/react";
import LoginCard from "./LoginCard";

// Mocking the Navbar component
jest.mock("../components/Navbar", () => {
  return () => <div data-testid="mock-navbar"></div>;
});

const loginData = {
  templateTitle: "Please login",
  fields: [
    {
      type: "email",
      label: "email",
      placeholder: "gf@example.com",
      imputMod: "email",
    },
    {
      type: "password",
      label: "password",
      placeholder: "******",
      imputMod: "text",
    },
  ],
  footer: "Welcome to Tips Tracker",
};

test("LoginCard should be rendered within Login component", () => {
  render(
    <LoginCard
      cardBodyTemplate={{
        templateTitle: loginData.templateTitle,
        fields: loginData.fields,
        footer: loginData.footer,
      }}
    />
  );
  // Check if the Card component is rendered
  const cardElement = screen.getByTestId("main-card");
  expect(cardElement).toBeInTheDocument();
});
