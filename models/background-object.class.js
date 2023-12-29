class BackgroundObject extends MovableObject {
  width = 720;
  height = 480;
  isAnimating = false;
  world;

  constructor(imagePath, x) {
    super().loadImage(imagePath);
    this.x = x;
    this.y = 480 - this.height;
  }

  animateBackground() {
    if (!this.isAnimating) {
      this.isAnimating = true;
      setInterval(() => {
        this.x -= 1;
        if (this.x <= -world.level.level_end_x) {
          this.x = world.level.level_end_x;
        }
      }, 70);
    }
  }
}
