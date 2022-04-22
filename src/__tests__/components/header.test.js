import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Header } from "../../components";
import { MemoryRouter, Router, Routes } from "react-router-dom";
import { createMemoryHistory } from "history";

describe("<Header />", () => {
  const history = createMemoryHistory();
  it("renders the <Header /> with background", () => {
    const { container } = render(
      <MemoryRouter initialEntries={["/signin"]}>
        <Routes>
          <Header>
            <Header.Frame>
              <Header.Logo src="/logo.svg" alt="Netflix" />
              <Header.TextLink active="true">
                Hello I am a link!
              </Header.TextLink>
            </Header.Frame>
          </Header>
        </Routes>
      </MemoryRouter>
    );

    // expect(screen.getByText("Hello I am a link!")).toBeTruthy();
    expect(screen.getByTestId("header-bg")).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders the basic <Header /> without a background", () => {
    const { container } = render(
      <MemoryRouter initialEntries={["/signin"]}>
        <Routes>
          <Header bg={false}>
            <Header.Frame>
              <Header.Logo src="/logo.svg" alt="Netflix" />
              <Header.ButtonLink>Sign In</Header.ButtonLink>
              <Header.TextLink active="true">
                Hello I am a link!
              </Header.TextLink>
            </Header.Frame>
          </Header>
        </Routes>
      </MemoryRouter>
    );
    expect(screen.getByText("Hello I am a link!")).toBeTruthy();
    expect(screen.queryByTestId("header-bg")).toBeFalsy();
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders the full <Header /> with a background", () => {
    const { container } = render(
      <MemoryRouter initialEntries={["/signin"]}>
        <Routes>
          <>
            <Header src="joker1">
              <Header.Frame>
                <Header.Group>
                  <Header.Logo src="/images/logo.svg" alt="Netflix" />
                  <Header.TextLink active={false} onClick={() => {}}>
                    Series
                  </Header.TextLink>
                  <Header.TextLink active onClick={() => {}}>
                    Films
                  </Header.TextLink>
                </Header.Group>
                <Header.Group>
                  <Header.Search
                    searchTerm={() => {}}
                    setSearchTerm={() => {}}
                  />
                  <Header.Profile>
                    <Header.Picture src="images/karl.png" />
                    <Header.Dropdown>
                      <Header.Group>
                        <Header.Picture src="images/karl.png" />
                        <Header.TextLink>Karl Hadwen</Header.TextLink>
                      </Header.Group>
                      <Header.Group>
                        <Header.TextLink onClick={() => {}}>
                          Sign Out
                        </Header.TextLink>
                      </Header.Group>
                    </Header.Dropdown>
                  </Header.Profile>
                </Header.Group>
              </Header.Frame>
              <Header.Feature>
                <Header.FeatureCallOut>Watch Joker Now</Header.FeatureCallOut>
                <Header.Text>Forever alone in a crowd...</Header.Text>
                <Header.PlayButton>Play</Header.PlayButton>
              </Header.Feature>
            </Header>
          </>
        </Routes>
      </MemoryRouter>
    );
    expect(screen.getByTestId("search-input")).toBeTruthy();
    expect(screen.getByTestId("search-input")).toHaveValue("Joker");

    fireEvent.change(screen.getByTestId("search-input"), {
      target: { value: "Simpsons" },
    });
    fireEvent.click(screen.getByTestId("search-click"));

    expect(screen.getByText("Series")).toBeTruthy();
    expect(screen.getByText("Films")).toBeTruthy();
    expect(screen.getByText("Karl Hawden")).toBeTruthy();
    expect(screen.getByText("Watch Joker Now")).toBeTruthy();
    expect(screen.getByText("Forever alone in a crowd...")).toBeTruthy();
    expect(screen.getByText("Play")).toBeTruthy();

    expect(container.firstChild).toMatchSnapshot();
  });
});
