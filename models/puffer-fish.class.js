class PufferFish extends MovableObject {
  constructor() {
    const images = [
      "./img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png",
      "./img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim1.png",
      "./img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim1.png",
    ];
    super().loadImage(images[Math.floor(Math.random() * images.length)]);
    this.x = 600;
    this.y = 20 + Math.random() * 400;
    this.height = 50;
    this.width = 60;
    this.animateEnemiesToLeft();
  }

  animateEnemiesToLeft() {
    setInterval(() => {
      this.x -= 1;
    }, 20);
  }
}
