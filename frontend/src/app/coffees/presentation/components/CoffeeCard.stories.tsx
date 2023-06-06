import {CoffeeCard} from "./CoffeeCard";

export default {
  component: CoffeeCard,
  title: "CoffeCard",
  tags: ["autodocs"],
};

export const ARABIC = {
  args: {
    title: "Test Arabic Coffee Card",
    tag: "ARABIC",
    imageUrl: "coffee-sample.png",
  },
};

export const ROBUSTA = {
  args: {
    title: "Test Robusta Coffee Card",
    tag: "ROBUSTA",
    imageUrl: "coffee-sample.png",
  },
};

export const UNDEFINED_IMAGE = {
  args: {
    title: "Test Coffee Card without Image",
    tag: "ROBUSTA",
    imageUrl: undefined,
  },
};
