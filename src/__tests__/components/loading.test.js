import React from "react";
import { render, screen } from "@testing-library/react";
import { Loading } from "../../components";

describe("<Loading />", () => {
  it("renders the <Loading /> component", () => {
    const { container } = render(
      <Loading src="/images/karl.png" data-testid="loading" />
    );

    expect(screen.getByTestId("loading")).toBeTruthy();
    expect(screen.getByTestId("loading-picture")).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders the <loading.ReleaseBody />", () => {
    const { container } = render(<Loading.ReleaseBody data-testid="loading" />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
