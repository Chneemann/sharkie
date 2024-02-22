class BackgroundObject extends MovableObject {
  width = 900;
  height = 600;

  constructor(imagePath, x) {
    super().loadImage(imagePath);
    this.x = x;
    this.y = 0;
  }

  /**
   * Animates the background by horizontal movement within a certain movement range.
   *
   * @param {number} speed - The speed.
   * @param {number} motionRange - The maximum motion range.
   * @param {string} startDirection - The initial direction of movement.
   */
  animateBackground(speed, motionRange, startDirection) {
    this.movingRight = startDirection === "right";
    this.startX = this.x;

    setInterval(() => {
      if (this.movingRight) {
        this.x -= speed;
        if (this.x <= this.startX - motionRange) {
          this.movingRight = false;
        }
      } else {
        this.x += speed;
        if (this.x >= this.startX + motionRange) {
          this.movingRight = true;
        }
      }
    }, 20);
  }
}
