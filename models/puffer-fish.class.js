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
    this.animateEnemiesToLeft();
    this.loadImages(this.IMAGES_SWIM);
    this.animate();
  }

  animate() {
    setInterval(() => {
      let i = this.currentImage % this.IMAGES_SWIM.length;
      let path = this.IMAGES_SWIM[i];
      this.img = this.imageCache[path];
      this.currentImage++;
    }, 150);
  }

  animateEnemiesToLeft() {
    setInterval(() => {
      this.x -= 1;
    }, 20);
  }
}
