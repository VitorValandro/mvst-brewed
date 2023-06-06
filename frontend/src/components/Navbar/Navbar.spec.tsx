import {cleanup, render, screen} from "@testing-library/react";
import "@testing-library/jest-dom";

import Navbar from "./Navbar";

jest.mock("next/router", () => ({
  useRouter() {
    return {
      pathname: "/active-route",
    };
  },
}));

describe("Testing Navbar component", () => {
  afterEach(cleanup);

  it("should render the component when links is empty", () => {
    render(<Navbar links={[]} />);
    const title = screen.getAllByRole("title");
    expect(title[0]).toHaveTextContent("BREWED");
  });

  it("should render the component when links is filled", () => {
    const menu = [
      {
        route: "/test",
        title: "test",
      },
    ];
    render(<Navbar links={menu} />);
    const title = screen.getAllByRole("title");
    expect(title[0]).toHaveTextContent("BREWED");
  });

  describe("should have special style if the route is active", () => {
    const menu = [
      {
        route: "/inactive-route",
        title: "inactive route",
      },
      {
        route: "/active-route",
        title: "active route",
      },
    ];
    render(<Navbar links={menu} />);

    const links = screen.getAllByRole("link-container");

    test("should have rendered two Link containers", () => {
      expect(links.length).toBe(2);
    });

    test("should have transparent bottom border on the inactive route", () => {
      expect(links[0].className.includes("border-transparent")).toBe(true);
    });

    test("should have coloured bottom border on the active route", () => {
      expect(links[1].className.includes("border-secondary")).toBe(true);
    });
  });
});
