class StaticObject {
  x = 50;
  y = 200;
  img;
  height = 150;
  width = 200;
  imageCache = {};

  loadImage(path) {
    this.img = new Image();
    this.img.src = path;
  }
}
