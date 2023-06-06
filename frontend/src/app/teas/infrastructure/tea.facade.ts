import { TeaProps } from "../domain/tea";

export class TeaFacade {
  async fetchAll(): Promise<TeaProps[]> {
    return [
      {
        title: "GEPA Chiapas",
        imageUrl: "tea-sample.png",
      },
      {
        title: "GEPA Chiapas",
        imageUrl: "tea-sample.png",
      },
      {
        title: "GEPA Chiapas",
        imageUrl: "tea-sample.png",
      },
      {
        title: "GEPA Chiapas",
        imageUrl: "tea-sample.png",
      },
      {
        title: "GEPA Chiapas",
        imageUrl: "tea-sample.png",
      },
      {
        title: "GEPA Chiapas",
        imageUrl: "tea-sample.png",
      },
      {
        title: "GEPA Chiapas",
        imageUrl: "tea-sample.png",
      },
      {
        title: "GEPA Chiapas",
        imageUrl: "tea-sample.png",
      },
    ];
  }
}
