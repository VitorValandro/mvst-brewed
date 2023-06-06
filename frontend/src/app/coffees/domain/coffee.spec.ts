import { Coffee } from "./coffee";

describe("Test the Coffee model", () => {
  it("create a valid Coffee", () => {
    const newCoffee = new Coffee({
      title: "Lavazza Espresso",
      tag: "ROBUSTA",
      imageUrl: "fallback-image.png",
    });

    expect(newCoffee.title).toEqual("Lavazza Espresso");
    expect(newCoffee.tag).toEqual("ROBUSTA");
    expect(newCoffee.imageUrl).toEqual("fallback-image.png");
  });

  it("should have the ARABIC tag as default", () => {
    const defaultTagCoffee = new Coffee({
      title: "Nespresso",
      tag: undefined,
      imageUrl: "fallback-image.png",
    });

    expect(defaultTagCoffee.tag).toEqual("ARABIC");
  });
});
