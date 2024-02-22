class PoisonBottle extends MovableObject {
  width = 60;
  height = 80;
  enemyOffsetX = 10;
  enemyOffsetY = 35;
  enemyOffsetWidth = 20;
  enemyOffsetHeight = 37;

  IMAGES = [
    "img/4. Marcadores/Posiขn/Animada/1.png",
    "img/4. Marcadores/Posiขn/Animada/2.png",
    "img/4. Marcadores/Posiขn/Animada/3.png",
    "img/4. Marcadores/Posiขn/Animada/4.png",
    "img/4. Marcadores/Posiขn/Animada/5.png",
    "img/4. Marcadores/Posiขn/Animada/6.png",
    "img/4. Marcadores/Posiขn/Animada/7.png",
    "img/4. Marcadores/Posiขn/Animada/8.png",
  ];

  constructor(x, y) {
    super().loadImage("img/4. Marcadores/Posiขn/Animada/1.png");
    this.x = x;
    this.y = y;
    this.loadImages(this.IMAGES);
    this.animate();
  }

  /**
   * Controls the animations.
   */
  animate() {
    setInterval(() => {
      this.playAnimation(this.IMAGES);
    }, 200);
  }
}
