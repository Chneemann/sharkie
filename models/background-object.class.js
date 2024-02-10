class BackgroundObject extends MovableObject {
  width = 899;
  height = 600;
  isAnimating = false;

  constructor(imagePath, x) {
    super().loadImage(imagePath);
    this.x = x;
    this.y = 0;
  }

  animateBackground() {
    if (!this.isAnimating) {
      this.isAnimating = true;
      setInterval(() => {
        this.x -= 1;
        if (this.x <= -(this.width * 3) + this.width * 2) {
          this.x = this.width * 3 + this.width - 1;
        }
      }, 70);
    }
  }
}
