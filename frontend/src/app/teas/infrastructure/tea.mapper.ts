import { Tea, TeaProps } from '../domain/tea';

export const TeaMapper = {
  toDomain: (data: TeaProps) =>
    new Tea({
      title: data.title,
      imageUrl: data.imageUrl,
    }),
};
