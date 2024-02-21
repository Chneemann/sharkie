class JellyFish extends MovableObject {
  hp = 1;
  height = 80;
  width = 60;
  enemyOffsetX = 3;
  enemyOffsetY = 5;
  enemyOffsetWidth = 8;
  enemyOffsetHeight = 15;
  motionRange = 100;

  IMAGES_SWIM = [
    "img/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png",
    "img/2.Enemy/2 Jelly fish/Regular damage/Lila 2.png",
    "img/2.Enemy/2 Jelly fish/Regular damage/Lila 3.png",
    "img/2.Enemy/2 Jelly fish/Regular damage/Lila 4.png",
  ];

  IMAGES_DEAD = [
    "img/2.Enemy/2 Jelly fish/Dead/Lila/L1.png",
    "img/2.Enemy/2 Jelly fish/Dead/Lila/L2.png",
    "img/2.Enemy/2 Jelly fish/Dead/Lila/L3.png",
    "img/2.Enemy/2 Jelly fish/Dead/Lila/L4.png",
  ];

  constructor(x, y) {
    super().loadImage("img/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png");
    this.x = x;
    this.y = y;
    this.speed = 0.3 + Math.random() * 0.3;
    this.loadImages(this.IMAGES_SWIM);
    this.loadImages(this.IMAGES_DEAD);
    this.animate();
  }

  /**
   * Controls the animations
   */
  animate() {
    this.moveUpAndDown();

    const intervalId = setInterval(() => {
      if (!this.isAlive()) {
        this.playAnimation(this.IMAGES_DEAD);
        this.moveUpDead();
      } else if (this.isAlive()) {
        this.playAnimation(this.IMAGES_SWIM);
      }
      stopInterval(this.intervalClearStatus, intervalId);
    }, 150);
  }
}
