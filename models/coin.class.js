class Coin extends MovableObject {
  width = 30;
  height = 30;

  constructor(imagePath, x, y) {
    super().loadImage(imagePath);
    this.x = x;
    this.y = y;
  }
}
