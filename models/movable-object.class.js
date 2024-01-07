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
  canvasCollision = false;
  offsetX = 45;
  offsetY = 95;
  offsetWidth = 90;
  offsetHeight = 140;

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

  draw(ctx) {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }

  drawFrame(ctx) {
    if (this instanceof Character || this instanceof PufferFish) {
      ctx.beginPath();
      ctx.lineWidth = "3";
      ctx.strokeStyle = "blue";
      if (this instanceof PufferFish) {
        ctx.rect(this.x, this.y, this.width, this.height - 10);
      } else if (this instanceof Character) {
        ctx.rect(
          this.x + this.offsetX,
          this.y + this.offsetY,
          this.width - this.offsetWidth,
          this.height - this.offsetHeight
        );
      }
      ctx.stroke();
    }
  }

  playAnimation(images) {
    let i = this.currentImage % images.length;
    let path = images[i];
    this.img = this.imageCache[path];
    this.currentImage++;
  }

  moveLeft() {
    setInterval(() => {
      this.x -= this.speed;
    }, 20);
  }

  isColliding(obj) {
    return (
      this.x + this.offsetX + this.width - this.offsetWidth >= obj.x &&
      this.x + this.offsetX <= obj.x + obj.width &&
      this.y + this.offsetY + this.height - this.offsetHeight >= obj.y &&
      this.y + this.offsetY <= obj.y + obj.height
    );
  }
}
