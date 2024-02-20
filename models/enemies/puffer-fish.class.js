class PufferFish extends MovableObject {
  hp = 1;
  height = 50;
  width = 60;
  enemyOffsetX = 0;
  enemyOffsetY = 0;
  enemyOffsetWidth = 0;
  enemyOffsetHeight = 10;
  motionRange = 200;
  dead = false;

  IMAGES_SWIM = [
    "img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png",
    "img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim2.png",
    "img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim3.png",
    "img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim4.png",
    "img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim5.png",
  ];

  IMAGES_DEAD = [
    "img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/1.Dead 1 (can animate by going up).png",
    "img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/1.Dead 2 (can animate by going down to the floor after the Fin Slap attack).png",
    "img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/1.Dead 3 (can animate by going down to the floor after the Fin Slap attack).png",
  ];

  constructor(x, y) {
    super().loadImage(
      "./img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png"
    );
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
    this.moveLeftAndRight();

    setInterval(() => {
      if (!this.isAlive() && this.lastAnimation(0.3)) {
        this.playAnimation(this.IMAGES_DEAD);
        this.moveUpDead();
      } else if (this.isAlive()) {
        this.playAnimation(this.IMAGES_SWIM);
      }
    }, 150);
  }
}
