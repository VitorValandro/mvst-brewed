import {render, screen} from "@testing-library/react";
import "@testing-library/jest-dom";

import {TeaCard} from "./TeaCard";

describe("Testing TeaCard component", () => {
  it("should render title with correct value", () => {
    render(<TeaCard title="Tea Card Test" imageUrl="" />);
    const title = screen.getByRole("title");
    expect(title).toHaveTextContent("Tea Card Test");
  });

  it("should render the product image", () => {
    render(<TeaCard title="" imageUrl="valid-image.png" />);
    const image: HTMLImageElement = screen.getByRole("image");
    expect(image.src.includes("valid-image.png")).toBe(true);
  });
});
