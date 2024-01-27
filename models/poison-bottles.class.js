class PoisonBottles extends MovableObject {
  width = 60;
  height = 80;
  enemyOffsetX = 0;
  enemyOffsetY = 0;
  enemyOffsetWidth = 0;
  enemyOffsetHeight = 0;

  sound = new Audio("./audio/poison_bottle.mp3");

  constructor(imagePath, x, y) {
    super().loadImage(imagePath);
    this.x = x;
    this.y = y;
  }
}
