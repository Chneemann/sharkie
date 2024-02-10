class Barrier extends MovableObject {
  width = 35;
  height = 35;

  constructor(imagePath, x, width, height) {
    super().loadImage(imagePath);
    this.x = x;
    this.y = 0;
    this.width = width;
    this.height = height;
  }
}
