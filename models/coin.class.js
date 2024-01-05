class Coin extends StaticObject {
  width = 30;
  height = 30;

  constructor(imagePath, x, y) {
    super().loadImage(imagePath);
    this.x = x;
    this.y = y;
  }
}
