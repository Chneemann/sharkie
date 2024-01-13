class JellyFish extends MovableObject {
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

  constructor(x, y, motionRange) {
    super().loadImage("img/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png");
    this.x = x;
    this.y = y;
    this.speed = 0.3 + Math.random() * 0.3;
    this.loadImages(this.IMAGES_SWIM);
    this.animate();
  }

  animate() {
    this.moveUpAndDown();

    setInterval(() => {
      this.playAnimation(this.IMAGES_SWIM);
    }, 150);
  }
}
