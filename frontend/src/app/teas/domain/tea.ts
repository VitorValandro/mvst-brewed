export type TeaProps = {
  title: string;
  imageUrl: string;
};

export class Tea {
  title: string;
  imageUrl: string;

  constructor(data: TeaProps) {
    this.title = data.title;
    this.imageUrl = data.imageUrl;
  }
}
