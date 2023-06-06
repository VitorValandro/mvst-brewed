import { Tea } from "./tea";

describe("Test the Tea model", () => {
  it("create a valid Tea", () => {
    const newTea = new Tea({
      title: "Black Tea",
      imageUrl: "fallback-image.png",
    });

    expect(newTea.title).toEqual("Black Tea");
    expect(newTea.imageUrl).toEqual("fallback-image.png");
  });
});
