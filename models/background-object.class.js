class BackgroundObject extends MovableObject {
  width = 900;
  height = 600;
  speed = 0.2;
  motionRange = 500;

  constructor(imagePath, x) {
    super().loadImage(imagePath);
    this.x = x;
    this.y = 0;
  }

  /**
   * Moves the background alternately to the right and left
   */
  animateBackground() {
    this.movingRight = true;
    this.startX = this.x;

    setInterval(() => {
      if (this.movingRight) {
        this.x -= this.speed;
        if (this.x <= this.startX - this.motionRange) {
          this.movingRight = false;
        }
      } else {
        this.x += this.speed;
        if (this.x >= this.startX) {
          this.movingRight = true;
        }
      }
    }, 20);
  }
}
