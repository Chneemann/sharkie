class Coin extends MovableObject {
  width = 35;
  height = 35;
  enemyOffsetX = 0;
  enemyOffsetY = 0;
  enemyOffsetWidth = 0;
  enemyOffsetHeight = 0;

  constructor(x, y) {
    super().loadImage("./img/4. Marcadores/1. Coins/1.png");
    this.x = x;
    this.y = y;
  }
}
