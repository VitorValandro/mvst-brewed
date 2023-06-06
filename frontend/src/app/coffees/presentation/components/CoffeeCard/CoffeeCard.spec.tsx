import {render, screen} from "@testing-library/react";
import "@testing-library/jest-dom";

import {CoffeeCard} from "./CoffeeCard";

describe("Testing CoffeeCard component", () => {
  it("should render title with correct value", () => {
    render(<CoffeeCard title="Coffee Card Test" tag="ARABIC" imageUrl="" />);
    const title = screen.getByRole("title");
    expect(title).toHaveTextContent("Coffee Card Test");
  });

  it("should have the proper background color for ARABIC tag", () => {
    render(<CoffeeCard title="" tag="ARABIC" imageUrl="" />);
    const tag = screen.getByRole("tag");
    expect(tag.classList.contains("bg-arabic")).toBe(true);
  });

  it("should have the proper background color for ROBUSTA tag", () => {
    render(<CoffeeCard title="" tag="ROBUSTA" imageUrl="" />);
    const tag = screen.getByRole("tag");
    expect(tag.classList.contains("bg-robusta")).toBe(true);
  });

  it("should render the product image", () => {
    render(<CoffeeCard title="" tag="ROBUSTA" imageUrl="valid-image.png" />);
    const image: HTMLImageElement = screen.getByRole("image");
    expect(image.src.includes("valid-image.png")).toBe(true);
  });
});
