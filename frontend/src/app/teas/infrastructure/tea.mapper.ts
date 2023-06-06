import { Tea, TeaProps } from "../domain/tea";

export const TeaMapper = {
  toDomain: (data: TeaProps): Tea =>
    new Tea({
      title: data.title,
      imageUrl: data.imageUrl,
    }),
};
