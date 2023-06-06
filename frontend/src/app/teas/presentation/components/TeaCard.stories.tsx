import {TeaCard} from "./TeaCard";

export default {
  component: TeaCard,
  title: "TeaCard",
  tags: ["autodocs"],
};

export const DEFAULT = {
  args: {
    title: "Test Default Tea Card",
    imageUrl: "tea-sample.png",
  },
};

export const UNDEFINED_IMAGE = {
  args: {
    title: "Test Tea Card without Image",
    tag: "ROBUSTA",
    imageUrl: undefined,
  },
};
