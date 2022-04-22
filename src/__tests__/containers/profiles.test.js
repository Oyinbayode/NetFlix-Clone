import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { SelectProfileContainer } from "../../containers/profiles";
import { Router, MemoryRouter, Routes, Route } from "react-router-dom";

describe("<Profiles />", () => {
  it("renders the <Profiles />", () => {
    const user = { displayName: "Karl", photoURL: "profile.png" };
    const setProfile = () => {};
    render(
      <MemoryRouter initialEntries={["/signin"]}>
        <Routes>
          <Route
            path="/signin"
            element={
              <SelectProfileContainer user={user} setProfile={setProfile} />
            }
          />
        </Routes>
      </MemoryRouter>
    );
    fireEvent.click(screen.getByTestId("user-profile"));
  });
});
