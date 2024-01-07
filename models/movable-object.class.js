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
  offsetY = 0;

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
        ctx.rect(this.x + 45, this.y + 95, this.width - 90, this.height - 140);
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
      this.x + this.width >= obj.x &&
      this.x <= obj.x + obj.width &&
      this.y + this.offsetY + this.height >= obj.y &&
      this.y + this.offsetY <= obj.y + obj.height
    );
  }
}
