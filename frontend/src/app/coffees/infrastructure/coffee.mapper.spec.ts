import { Coffee } from "../domain/coffee";
import { CoffeeMapper } from "./coffee.mapper";

describe("Test the CoffeMapper data mapping", () => {
  it("should map valid objects into Coffee instances", () => {
    const fetchAllMock = [
      {
        title: "Coffe Title",
        tag: "ARABIC",
        imageUrl: "coffee-sample.png",
      } as const,
      {
        title: "Coffe Title",
        tag: "ROBUSTA",
        imageUrl: "coffee-sample.png",
      } as const,
    ];

    const domainData = fetchAllMock.map(CoffeeMapper.toDomain);
    domainData.forEach((data) => {
      expect(data).toBeInstanceOf(Coffee);
      expect(data.title).toBeDefined();
      expect(data.tag).toBeDefined();
      expect(data.imageUrl).toBeDefined();
    });
  });

  it("should map objects with undefined tags into Coffee instances", () => {
    const fetchAllMock = [
      {
        title: "Coffee Title",
        tag: undefined,
        imageUrl: "coffee-sample.png",
      } as const,
      {
        title: "Coffee Title",
        tag: "ARABIC",
        imageUrl: "coffee-sample.png",
      } as const,
    ];

    const domainData = fetchAllMock.map(CoffeeMapper.toDomain);
    domainData.forEach((data) => {
      expect(data).toBeInstanceOf(Coffee);
      expect(data.title).toBeDefined();
      expect(data.tag).toBeDefined();
      expect(data.tag).toEqual("ARABIC");
      expect(data.imageUrl).toBeDefined();
    });
  });
});
