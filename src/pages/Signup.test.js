import React, { act } from "react";
import { render, screen } from "@testing-library/react";
import SignupCard from "./SignupCard";
import { MemoryRouter } from "react-router-dom";

// Mocking the Navbar component
jest.mock("../components/Navbar", () => {
  return () => <div data-testid="mock-navbar"></div>;
});

const signupData = {
  templateTitle: "Please signup",
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
  footer: "Sign up and start tracking your tips",
};

test("SignupCard should be rendered within Signup component", async () => {
   await act(async () => {
    render(
      <MemoryRouter>
        <SignupCard
          cardBodyTemplate={{
            templateTitle: signupData.templateTitle,
            fields: signupData.fields,
            footer: signupData.footer,
          }}
        />
      </MemoryRouter>
    );
  });

  // Check if the Card component is rendered
  const cardElement = screen.getByTestId("main-card");
  expect(cardElement).toBeInTheDocument();
});
