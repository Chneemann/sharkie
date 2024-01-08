class DrawableObject {
  img;
  imageCache = {};
  currentImage = 0;
  x = 50;
  y = 200;
  height = 150;
  width = 200;

  loadImage(path) {
    this.img = new Image();
    this.img.src = path;
  }

  draw(ctx) {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }
}
