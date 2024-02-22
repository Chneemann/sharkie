class Coin extends MovableObject {
  width = 40;
  height = 40;
  enemyOffsetX = 0;
  enemyOffsetY = 0;
  enemyOffsetWidth = 0;
  enemyOffsetHeight = 0;
  rotate = true;
  rotationAngle = 0;
  rotationSpeed = 2;

  constructor(x, y) {
    super().loadImage("./img/4. Marcadores/1. Coins/1.png");
    this.x = x;
    this.y = y;
    this.rotateImg();
  }

  /**
   * Starts a continuous rotation of the object by periodically adjusting the rotation angle.
   */
  rotateImg() {
    setInterval(() => {
      this.rotationAngle -= this.rotationSpeed;
      if (this.rotationAngle >= 360) {
        this.rotationAngle = 0;
      }
    }, 10);
  }
}
