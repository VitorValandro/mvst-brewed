import {render, screen} from "@testing-library/react";
import "@testing-library/jest-dom";

import Footer from "./Footer";

describe("Testing Footer component", () => {
  it("should render the component", () => {
    const {getByText} = render(<Footer />);
    expect(getByText(/Made with/i)).toBeInTheDocument();
  });

  it("should render the LOVE image", () => {
    render(<Footer />);
    const image: HTMLImageElement = screen.getByRole("image");
    expect(image.src.includes("footer-love.png")).toBe(true);
  });
});
