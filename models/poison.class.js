class Poison extends StaticObject {
  width = 60;
  height = 80;

  constructor(imagePath, x, y) {
    super().loadImage(imagePath);
    this.x = x;
    this.y = y;
  }
}
