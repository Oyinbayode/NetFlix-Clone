import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { createMemoryHistory } from "history";
import { Router, MemoryRouter, Routes, Route } from "react-router-dom";
import React from "react";
import { Home } from "../../pages";

test("description", async () => {
  render(
    <MemoryRouter initialEntries={["/home"]}>
      <Routes>
        <Route path="/home" element={<Home />} />
      </Routes>
    </MemoryRouter>
  );

  expect(
    screen.getByText("Unlimited movies, TV shows, and more.")
  ).toBeTruthy();
  expect(screen.getByText("Watch anywhere. Cancel anytime.")).toBeTruthy();
  expect(screen.getAllByText("Get Started")).toBeTruthy();
  expect(
    screen.getAllByText(
      "Ready to watch? Enter your email to create or restart your membership"
    )
  ).toBeTruthy();
});
