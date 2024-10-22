import React, { act } from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import EnterTips from "./EnterTips";

// Mocking the Navbar component
jest.mock("../components/Navbar", () => {
  return () => <div data-testid="mock-navbar"></div>;
});

test("card should be rendered within EnterTips component", async () => {
  await act(async () => {
    render(
      <MemoryRouter>
        <EnterTips />
      </MemoryRouter>
    );
  });

  // Check if the Card component is rendered
  const cardElement = screen.getByTestId("main-card");
  expect(cardElement).toBeInTheDocument();

  // Check if the CardBodyTipsForm component is rendered within the Card
  const tipsFormElement = screen.getByTestId("card-body-tips-form");
  expect(tipsFormElement).toBeInTheDocument();

  // Check if the input fields are rendered within the CardBodyTipsForm
  const inputElements = screen.getAllByRole("spinbutton");
  expect(inputElements.length).toBeGreaterThan(0);

  // Check if the label fields are redered within the CardBodyTipsForm
  // const labelElement = screen.getByTestId("enterTipsForm-label-Tips brut");
  // expect(labelElement).toBeInTheDocument();

  // Simulate any event that could trigger a state update
  await act(async () => {
    const buttonElement = screen.getByRole("button");
    fireEvent.click(buttonElement); // Triggering a button click
  });

  // Check if the <Button /> is rendered in the CardBodyTipsForm
  const buttonElement = screen.getByRole("button");
  expect(buttonElement).toBeInTheDocument();
});
