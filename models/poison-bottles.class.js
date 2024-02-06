class PoisonBottle extends MovableObject {
  width = 60;
  height = 80;
  enemyOffsetX = 0;
  enemyOffsetY = 0;
  enemyOffsetWidth = 0;
  enemyOffsetHeight = 0;

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

  sound = new Audio("./audio/poison_bottle.mp3");

  constructor(x, y) {
    super().loadImage("img/4. Marcadores/Posiขn/Animada/1.png");
    this.x = x;
    this.y = y;
    this.loadImages(this.IMAGES);
    this.sound.volume = 0.3;
    this.animate();

    document.addEventListener("toggleMute", (e) => {
      this.sound.muted = e.detail;
    });
  }

  animate() {
    setInterval(() => {
      this.playAnimation(this.IMAGES);
    }, 200);
  }
}
