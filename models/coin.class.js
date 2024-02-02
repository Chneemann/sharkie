class Coin extends MovableObject {
  width = 35;
  height = 35;
  enemyOffsetX = 0;
  enemyOffsetY = 0;
  enemyOffsetWidth = 0;
  enemyOffsetHeight = 0;

  sound = new Audio("./audio/coin.mp3");

  constructor(imagePath, x, y) {
    super().loadImage(imagePath);
    this.x = x;
    this.y = y;
    this.sound.volume = 0.3;
  }
}
