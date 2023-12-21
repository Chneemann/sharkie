class MovableObject {
  x = 100;
  y = 200;
  img;
  height = 100;
  width = 200;

  loadImage(path) {
    this.img = new Image();
    this.img.src = path;
  }

  moveRight() {
    console.log("Moving right");
  }

  moveLeft() {}
}
