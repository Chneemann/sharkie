class PufferFish extends MovableObject {
  IMAGES_SWIM = [
    "img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png",
    "img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim2.png",
    "img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim3.png",
    "img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim4.png",
    "img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim5.png",
  ];

  constructor() {
    super().loadImage(
      "./img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png"
    );
    this.x = 600;
    this.y = 20 + Math.random() * 400;
    this.height = 50;
    this.width = 60;
    this.speed = 0.3 + Math.random() * 0.3;
    this.loadImages(this.IMAGES_SWIM);
    this.animate();
  }

  animate() {
    this.moveLeft();

    setInterval(() => {
      this.playAnimation(this.IMAGES_SWIM);
    }, 150);
  }
}
