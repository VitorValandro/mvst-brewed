import ImageWithFallback from "./ImageWithFallback";

const meta = {
  component: ImageWithFallback,
  title: "ImageWithFallback",
  tags: ["autodocs"],
};

export const ValidImage = {
  args: {
    fallbackImage: "/fallback-image.png",
    alt: "Alternative text",
    src: "/coffee-sample.png",
    width: 200,
    height: 200,
  },
};

export const InvalidImage = {
  args: {
    fallbackImage: "/fallback-image.png",
    alt: "Alternative text",
    src: undefined,
    width: 200,
    height: 200,
  },
};

export default meta;
