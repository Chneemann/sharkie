class MovableObject {
  x = 50;
  y = 200;
  img;
  height = 150;
  width = 200;
  imageCache = {};
  currentImage = 0;
  speed = 0.2;
  otherDirection = false;

  loadImage(path) {
    this.img = new Image();
    this.img.src = path;
  }

  loadImages(arr) {
    arr.forEach((path) => {
      let img = new Image();
      img.src = path;
      this.imageCache[path] = img;
    });
  }

  moveLeft() {
    setInterval(() => {
      this.x -= this.speed;
    }, 20);
  }
}
