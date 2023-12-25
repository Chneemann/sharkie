class Character extends MovableObject {
  height = 200;
  width = 250;
  IMAGES_IDLE = [
    "img/1.Sharkie/1.IDLE/1.png",
    "img/1.Sharkie/1.IDLE/2.png",
    "img/1.Sharkie/1.IDLE/3.png",
    "img/1.Sharkie/1.IDLE/4.png",
    "img/1.Sharkie/1.IDLE/5.png",
    "img/1.Sharkie/1.IDLE/6.png",
    "img/1.Sharkie/1.IDLE/7.png",
    "img/1.Sharkie/1.IDLE/8.png",
    "img/1.Sharkie/1.IDLE/9.png",
    "img/1.Sharkie/1.IDLE/10.png",
    "img/1.Sharkie/1.IDLE/11.png",
    "img/1.Sharkie/1.IDLE/12.png",
    "img/1.Sharkie/1.IDLE/13.png",
    "img/1.Sharkie/1.IDLE/14.png",
    "img/1.Sharkie/1.IDLE/15.png",
    "img/1.Sharkie/1.IDLE/16.png",
    "img/1.Sharkie/1.IDLE/17.png",
    "img/1.Sharkie/1.IDLE/18.png",
  ];
  currentImage = 0;

  constructor() {
    super().loadImage("./img/1.Sharkie/1.IDLE/1.png");
    this.loadImages(this.IMAGES_IDLE);
    this.registerEventListeners();
    this.animate();
  }

  animate() {
    setInterval(() => {
      let i = this.currentImage % this.IMAGES_IDLE.length;
      let path = this.IMAGES_IDLE[i];
      this.img = this.imageCache[path];
      this.currentImage++;
    }, 150);
  }

  registerEventListeners() {
    document.addEventListener("keydown", (event) => {
      if (event.keyCode === 39) {
        this.moveRight();
      }
      if (event.keyCode === 37) {
        this.moveLeft();
      }
      if (event.keyCode === 38) {
        this.moveUp();
      }
      if (event.keyCode === 40) {
        this.moveDown();
      }
    });
  }

  moveRight() {
    this.x += 20;
  }

  moveLeft() {
    this.x -= 20;
  }

  moveUp() {
    this.y -= 20;
  }

  moveDown() {
    this.y += 20;
  }
}
