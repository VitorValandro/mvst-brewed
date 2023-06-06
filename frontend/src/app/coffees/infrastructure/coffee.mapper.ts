import { Coffee, CoffeeProps } from "../domain/coffee";

export const CoffeeMapper = {
  toDomain: (data: CoffeeProps): Coffee =>
    new Coffee({
      title: data.title,
      tag: data.tag,
      imageUrl: data.imageUrl,
    }),
};
