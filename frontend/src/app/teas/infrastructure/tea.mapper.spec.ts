import { Tea } from "../domain/tea";
import { TeaMapper } from "./tea.mapper";

describe("Test the TeaMapper data mapping", () => {
  it("should map valid objects into Tea instances", () => {
    const fetchAllMock = [
      {
        title: "Tea Title",
        imageUrl: "tea-sample.png",
      } as const,
      {
        title: "Tea Title",
        imageUrl: "tea-sample.png",
      } as const,
    ];

    const domainData = fetchAllMock.map(TeaMapper.toDomain);
    domainData.forEach((data) => {
      expect(data).toBeInstanceOf(Tea);
      expect(data.title).toEqual("Tea Title");
      expect(data.imageUrl).toEqual("tea-sample.png");
    });
  });
});
