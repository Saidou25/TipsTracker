import React, { act } from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import UpdateCard from "./UpdateCard";

// Mocking the Navbar component
jest.mock("../components/Navbar", () => {
  return () => <div data-testid="mock-navbar"></div>;
});

jest.mock("../UseFindUser", () => ({ // Mocking the useFindUser function

  __esModule: true,
  default: jest.fn(() => ({
    user: {
      uid: "123",
      displayName: "John Doe",
      email: "john.doe@example.com",
      photoURL: "path/to/photo",
    },
    loading: false,
  })),
}));

jest.mock("./UpdateProfilePicture", () => {
  return () => <div data-testid="mock-update-profile-picture"></div>;
}); // Mocking the UpdateProfilePicture component

const handleClick = jest.fn(); // Mocking the handleClick function

const updateData = {
  templateTitle: "Update your profile",
  fields: [
    {
      type: "text",
      label: "displayName",
      placeholder: "displayName",
      inputMod: "text",
    },
  ],
};
test("UpdateCard should be rendered within Update component", async () => {
  await act(async () => {
    render(
      <MemoryRouter>
        <UpdateCard
        //   cardBodyTemplate={{
        //     templateTitle: updateData.templateTitle,
        //     fields: updateData.fields,
        //     footer: (
        //       <div className="card-footer p-5">
        //         <span>You can delete your account </span>
        //         <span className="here-text" onClick={handleClick}>
        //           here
        //         </span>
        //       </div>
        //     ),
        //   }}
        cardBodyTemplate={updateData}
        showSuccess={() => {}}
        />
      </MemoryRouter>
    );
  });

  // Check if the Card component is rendered
  const cardElement = screen.getByTestId("main-card");
  expect(cardElement).toBeInTheDocument();
});
