class Barrier extends MovableObject {
  width = 35;
  height = 35;
  enemyOffsetX = 0;
  enemyOffsetY = 0;
  enemyOffsetWidth = 0;
  enemyOffsetHeight = 0;

  constructor(imagePath, x, width, height) {
    super().loadImage(imagePath);
    this.x = x;
    this.y = 0;
    this.width = width;
    this.height = height;
  }
}
