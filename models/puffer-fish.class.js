class PufferFish extends MovableObject {
  constructor() {
    super().loadImage(
      "./img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim1.png"
    );
    this.x = 600;
    this.y = 20 + Math.random() * 450;
    this.height = 50;
    this.width = 60;
  }
}
