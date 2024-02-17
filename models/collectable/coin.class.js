class Coin extends MovableObject {
  width = 40;
  height = 40;
  enemyOffsetX = 0;
  enemyOffsetY = 0;
  enemyOffsetWidth = 0;
  enemyOffsetHeight = 0;
  rotate = true;

  constructor(x, y) {
    super().loadImage("./img/4. Marcadores/1. Coins/1.png");
    this.x = x;
    this.y = y;
    this.rotateImg();
  }

  rotateImg() {
    let rotationAngle = 0;
    let rotationSpeed = 2;
    setInterval(() => {
      rotationAngle -= rotationSpeed;
      if (rotationAngle >= 360) {
        rotationAngle = 0;
      }
    }, 10);
  }
}
