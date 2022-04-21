import React from "react";
import { render, screen } from "@testing-library/react";
import { SigninForm } from "../../components";

jest.mock("react-router-dom");

describe("<SignInForm />", () => {
  it("renders the <SignInForm /> with populated data", () => {
    const { container } = render(
      <SigninForm>
        <SigninForm.Title>Sign In Now</SigninForm.Title>
        <SigninForm.Base>
          <SigninForm.Input placeholder="Email Address" onChange={() => {}} />
          <SigninForm.Input
            placeholder="Password"
            type="password"
            onChange={() => {}}
          />
          <SigninForm.Submit disabled type="submit">
            Sign In
          </SigninForm.Submit>
        </SigninForm.Base>

        <SigninForm.Text>
          New to Netflix?{" "}
          {/* <SigninForm.Link to="/signup">Sign up now.</SigninForm.Link> */}
        </SigninForm.Text>

        <SigninForm.TextSmall>
          This page is protected by Google reCAPTCHA to ensure you are not a
          bot.
        </SigninForm.TextSmall>
      </SigninForm>
    );

    expect(
      screen.getByText(
        "This page is protected by Google reCAPTCHA to ensure you are not a bot."
      )
    ).toBeTruthy();
    expect(screen.getByText("Sign In")).toBeTruthy();
    expect(screen.getByText("Sign In Now")).toBeTruthy();
    expect(screen.getByText("Sign In").disabled).toBeTruthy();
    expect(screen.getByPlaceholderText("Email Address")).toBeTruthy();
    expect(screen.getByPlaceholderText("Password")).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders the <Form /> with an error", () => {
    const { container } = render(
      <SigninForm>
        <SigninForm.Error>
          Your email address is already being used
        </SigninForm.Error>
        <SigninForm.Submit type="submit">Sign In</SigninForm.Submit>
      </SigninForm>
    );

    expect(
      screen.getByText("Your email address is already being used")
    ).toBeTruthy();
    expect(screen.queryByText("Sign In").disabled).toBeFalsy();
    expect(container.firstChild).toMatchSnapshot();
  });
});
