export class CoffeeFacade {
  async fetchAll() {
    return [
      {
        title: 'GEPA Chiapas with two lines',
        tag: 'ARABIC',
        imageUrl: 'coffee-sample.png',
      },
      {
        title: 'GEPA Chiapas with two lines',
        tag: 'ROBUSTA',
        imageUrl: 'coffee-sample.png',
      },
    ];
  }
}
