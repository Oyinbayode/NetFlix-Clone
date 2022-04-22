import React from "react";
import { render, screen } from "@testing-library/react";
import { Profiles } from "../../components";
import { Profile } from "../../components/header/styles/header";

describe("<Profiles />", () => {
  it("renders the <Profiles /> with populated data", () => {
    const { container } = render(
      <Profiles>
        <Profiles.Title>Who's watching?</Profiles.Title>
        <Profiles.List>
          <Profiles.User onClick={() => {}}>
            <Profiles.Picture
              src="/images/karl.png"
              data-testid="profile-picture"
            />
            <Profiles.Name>Karl Hadwen</Profiles.Name>
          </Profiles.User>
        </Profiles.List>
      </Profiles>
    );

    expect(screen.getByText("Who's watching?")).toBeTruthy();
    expect(screen.getByTestId("profile-picture")).toBeTruthy();
    expect(screen.getByText("Karl Hadwen")).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders the <Profiles /> with populated data but misc profile image", () => {
    const { container } = render(
      <Profiles>
        <Profiles.Title>Who's watching?</Profiles.Title>
        <Profiles.List>
          <Profiles.User onClick={() => {}}>
            <Profiles.Picture data-testid="profile-picture-misc" />
            <Profiles.Name>Karl Hadwen</Profiles.Name>
          </Profiles.User>
        </Profiles.List>
      </Profiles>
    );

    expect(screen.getByText("Who's watching?")).toBeTruthy();
    expect(screen.getByTestId("profile-picture-misc")).toBeTruthy();
    expect(screen.getByText("Karl Hadwen")).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });
});
