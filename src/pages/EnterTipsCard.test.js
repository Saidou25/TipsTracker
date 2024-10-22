import React, { act } from "react";
import CardBodyTipsForm from "./CardBodyTipsForm";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

const cardBodyTemplate = {
  title: "Please enter your tips",
  fields: [
    {
      type: "number",
      label: "TipsGross",
      placeholder: "enter tips",
      inputMod: "numeric",
    },
    {
      type: "number",
      label: "TipsNet",
      placeholder: "enter tips",
      inputMod: "numeric",
    },
  ],
  footer: "Once your tips are added they will show in your dashboard",
};

test("<form> should be rendered in CardBodyTipsForm", async () => {
    // Wraps the rendering inside act to handle state updates
  await act(async () => {
    render(
      <MemoryRouter>
        <CardBodyTipsForm cardBodyTemplate={cardBodyTemplate} />
      </MemoryRouter>
    );
  });

  // Checking that the <form> is being rendered in the DOM
  const formElement = screen.getByRole("form");
  expect(formElement).toBeInTheDocument();

  let inputElements;
  // Check if the <input> fields are rendered within the CardBodyTipsForm
  inputElements = screen.getAllByPlaceholderText(/enter tips/i);
  expect(inputElements.length).toBeGreaterThan(0);

  //   let labelElement;
  //   // Check if the <label> fields are redered within the CardBodyTipsForm
  //   labelElement = screen.getByLabelText(/TipsGross/i);
  //   expect(labelElement).toBeInTheDocument();

  //   // Check if the <label> fields are redered within the CardBodyTipsForm
  //   labelElement = screen.getByLabelText(/TipsNet/i);
  //   expect(labelElement).toBeInTheDocument();

  // Check if the <Button /> is rendered in the CardBodyTipsForm
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeInTheDocument();
});

// test("Tips brut input should be empty", () => {
//   render(<CardBodyTipsForm fields={fields} />);
//   const inputTipsBrutElement = screen.getByPlaceholderText("enter tips");
//   expect(inputTipsBrutElement.value).toBe("");
// });

// test("Tips net input should be empty", () => {
//   render(<CardBodyTipsForm fields={fields} />);
//   const inputTipsBrutElement = screen.getByPlaceholderText("enter tips");
//   expect(inputTipsBrutElement.value).toBe(""); // Assert that the input is empty
// });

// test("button should be disabled", () => {
//   render(<CardBodyTipsForm fields={fields} />);
//   const buttonElement = screen.getByRole("button");
//   expect(buttonElement).toBeDisabled(true);
// });

// test("error should not show in the component", () => {
//   render(<CardBodyTipsForm fields={fields} />);
//   // we're using queryByText instead of getByText to handle the case where the
//   //  text might not be found. This allows the test to pass if the error message
// //  is not present in the component. If the error message is present when it shouldn't be, it will fail the test.
//   const spanElement = screen.queryByText(/Oops, something went wrong.../i);
//   expect(spanElement).not.toBeInTheDocument();
// });

// test("enter tips brut should change", () => {
//   render(<CardBodyTipsForm fields={fields} />);
//   const inputElement = screen.getByPlaceholderText(/enter tips brut/i);
//   const testValue = "test";

//   fireEvent.change(inputElement, { target: { value: testValue } });
//   expect(inputElement.value).toBe(testValue);
// });

// test("enter tips net should change", () => {
//   render(<CardBodyTipsForm fields={fields} />);
//   const inputElement = screen.getByPlaceholderText(/enter tips net/i);
//   const testValue = "test";

//   fireEvent.change(inputElement, { target: { value: testValue } });
//   expect(inputElement.value).toBe(testValue);
// });

// test("please wait... should not show when loading is false", () => {
//   render(<CardBodyTipsForm fields={fields} />);
//   const buttonElement = screen.getByRole("button");
//   expect(buttonElement.textContent).toEqual("save");
// });

// test("save should show when loading is true", () => {
//   render(<CardBodyTipsForm fields={fields} />);
//   const buttonElement = screen.getByRole("button");
//   expect(buttonElement.textContent).toEqual("save");
// });

// test("Oops, something went wrong... should not show when error is false", () => {
//   render(<CardBodyTipsForm fields={fields} />);
//   const spanElement = screen.queryByTestId("oops");
//   expect(spanElement).not.toBeInTheDocument();
// });
