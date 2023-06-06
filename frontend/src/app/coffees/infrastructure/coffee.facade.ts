import { CoffeeProps } from "../domain/coffee";

export class CoffeeFacade {
  async fetchAll(): Promise<CoffeeProps[]> {
    return [
      {
        title: "GEPA Chiapas with two lines",
        tag: "ARABIC",
        imageUrl: "coffee-sample.png",
      },
      {
        title: "GEPA Chiapas with two lines",
        tag: "ROBUSTA",
        imageUrl: "coffee-sample.png",
      },
      {
        title: "GEPA Chiapas with two lines",
        tag: "ARABIC",
        imageUrl: "coffee-sample.png",
      },
      {
        title: "GEPA Chiapas with two lines",
        tag: "ROBUSTA",
        imageUrl: "coffee-sample.png",
      },
      {
        title: "GEPA Chiapas with two lines",
        tag: "ARABIC",
        imageUrl: "coffee-sample.png",
      },
      {
        title: "GEPA Chiapas with two lines",
        tag: "ROBUSTA",
        imageUrl: "coffee-sample.png",
      },
      {
        title: "GEPA Chiapas with two lines",
        tag: "ARABIC",
        imageUrl: "coffee-sample.png",
      },
      {
        title: "GEPA Chiapas with two lines",
        tag: "ROBUSTA",
        imageUrl: "coffee-sample.png",
      },
    ];
  }
}
