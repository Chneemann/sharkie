class BackgroundObject extends MovableObject {
  width = 900;
  height = 600;
  isAnimating = false;

  constructor(imagePath, x) {
    super().loadImage(imagePath);
    this.x = x;
    this.y = 0;
  }

  /**
   * Controls the animations
   */
  animateBackground() {
    if (!this.isAnimating) {
      this.isAnimating = true;
      setInterval(() => {
        this.x -= 0.5;
        if (this.x <= -(this.width * 4) + this.width * 2) {
          this.x = this.width * 4 + this.width - 1;
        }
      }, 100);
    }
  }
}
