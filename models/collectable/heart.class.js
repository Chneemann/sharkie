class Heart extends MovableObject {
  width = 70;
  height = 70;
  enemyOffsetX = 10;
  enemyOffsetY = 20;
  enemyOffsetWidth = 22;
  enemyOffsetHeight = 28;

  constructor(x, y) {
    super().loadImage("./img/4. Marcadores/green/100_  copia 3.png");
    this.x = x;
    this.y = y;
    this.pulsate();
  }

  /**
   * Creates a pulsation effect.
   */
  pulsate() {
    let scaleIncrement = 1;
    let minScale = 0.98;
    let maxScale = 1.02;
    let currentScale = 1;
    let direction = 1;

    setInterval(() => {
      currentScale += direction * scaleIncrement * 0.01;
      this.width = this.width * currentScale;
      this.height = this.height * currentScale;
      if (currentScale >= maxScale || currentScale <= minScale) {
        direction *= -1;
      }
    }, 100);
  }
}
