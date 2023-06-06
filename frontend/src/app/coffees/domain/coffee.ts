export type CoffeeProps = {
  title: string;
  tag?: "ARABIC" | "ROBUSTA";
  imageUrl: string;
}

export class Coffee {
  title: string;
  tag?: "ARABIC" | "ROBUSTA";
  imageUrl: string;

  constructor(data: CoffeeProps) {
    this.title = data.title;
    this.tag = data.tag || 'ARABIC';
    this.imageUrl = data.imageUrl;
  }
}