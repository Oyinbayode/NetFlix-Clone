import React from "react";
import { render, screen } from "@testing-library/react";
import { Feature } from "../../components";

describe("<Feature />", () => {
  it("renders the <Feature /> with populated data", () => {
    const { container } = render(
      <Feature>
        <Feature.Title>Unlimited movies, TV shows, and more.</Feature.Title>
        <Feature.SubTitle>Watch anywhere. Cancel anytime.</Feature.SubTitle>
      </Feature>
    );

    expect(
      screen.getByText("Unlimited movies, TV shows, and more.")
    ).toBeTruthy();
    expect(screen.getByText("Watch anywhere. Cancel anytime.")).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders the <Feature /> with title", () => {
    const { container } = render(
      <Feature>
        <Feature.Title>Unlimited movies, TV shows, and more.</Feature.Title>
      </Feature>
    );

    expect(
      screen.getByText("Unlimited movies, TV shows, and more.")
    ).toBeTruthy();
    expect(screen.queryByText("Watch anywhere. Cancel anytime.")).toBeFalsy();
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders the <Feature /> with subtitle", () => {
    const { container } = render(
      <Feature>
        <Feature.SubTitle>Watch anywhere. Cancel anytime.</Feature.SubTitle>
      </Feature>
    );

    expect(
      screen.queryByText("Unlimited movies, TV shows, and more.")
    ).toBeFalsy();
    expect(screen.getByText("Watch anywhere. Cancel anytime.")).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });
});
