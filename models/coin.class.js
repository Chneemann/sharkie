class Coin extends MovableObject {
  width = 30;
  height = 30;
  enemyOffsetX = 0;
  enemyOffsetY = 0;
  enemyOffsetWidth = 0;
  enemyOffsetHeight = 0;

  constructor(imagePath, x, y) {
    super().loadImage(imagePath);
    this.x = x;
    this.y = y;
  }
}
