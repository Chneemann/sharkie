class MovableObject {
  x = 50;
  y = 200;
  img;
  height = 150;
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
