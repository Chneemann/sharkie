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
    if (
      this instanceof Character ||
      this instanceof AttackBubble ||
      this instanceof PufferFish ||
      this instanceof JellyFish ||
      this instanceof Endboss ||
      this instanceof Coin ||
      this instanceof PoisonBottle
    ) {
      ctx.beginPath();
      ctx.lineWidth = "3";
      ctx.strokeStyle = "blue";
      if (
        this instanceof PufferFish ||
        this instanceof JellyFish ||
        this instanceof Endboss ||
        this instanceof PoisonBottle
      ) {
        ctx.rect(
          this.x + this.enemyOffsetX,
          this.y + this.enemyOffsetY,
          this.width - this.enemyOffsetWidth,
          this.height - this.enemyOffsetHeight
        );
      } else if (this instanceof Character || this instanceof AttackBubble) {
        ctx.rect(
          this.x + this.characterOffsetX,
          this.y + this.characterOffsetY,
          this.width - this.characterOffsetWidth,
          this.height - this.characterOffsetHeight
        );
      } else {
        ctx.rect(this.x, this.y, this.width, this.height);
      }
      ctx.stroke();
    }
  }
}
