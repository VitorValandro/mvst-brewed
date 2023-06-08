import api from "./api";

const imagePathResolver = (src: string): string => {
  return `${api}/bucket/${src}`;
};

export default imagePathResolver;