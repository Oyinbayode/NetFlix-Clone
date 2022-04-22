import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import { act } from "react-dom/test-utils";
import { FirebaseContext } from "../../context/firebase";
import { Signin } from "../../pages";

const firebase = {
  auth: jest.fn(() => ({
    signInWithEmailAndPassword: jest.fn(() =>
      Promise.resolve("I am signed in!")
    ),
  })),
};

describe("<Signin />", () => {
  it("render the signin page with a form submission", async () => {
    render(
      <MemoryRouter initialEntries={["/browse"]}>
        <Routes>
          <Route
            path="/browse"
            element={
              <FirebaseContext.Provider value={{ firebase }}>
                <Signin />
              </FirebaseContext.Provider>
            }
          />
        </Routes>
      </MemoryRouter>
    );

    await act(async () => {
      await fireEvent.change(screen.getByPlaceholderText("Email Address"), {
        target: { value: "karl@gmail.com" },
      });
      await fireEvent.change(screen.getByPlaceholderText("Password"), {
        target: { value: "password" },
      });
      fireEvent.click(screen.getByTestId("sign-in"));
      expect(screen.getByPlaceholderText("Email Address").value).toBe(
        "karl@gmail.com"
      );
      expect(screen.getByPlaceholderText("Password").value).toBe("password");
      expect(screen.queryByTestId("error")).toBeFalsy();
    });
  });
});
