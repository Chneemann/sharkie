class DrawableObject {
  img;
  imageCache = {};
  currentImage = 0;
  currentAnimation;
  x = 50;
  y = 200;
  height = 150;
  width = 200;

  /**
   * Loads an image.
   *
   * @param {string} path - The path to the image file.
   */
  loadImage(path) {
    this.img = new Image();
    this.img.src = path;
  }

  /**
   * Loads several images and saves them in a cache so that they can be used later.
   *
   * @param {string[]} arr - An array of paths to the image files.
   */
  loadImages(arr) {
    arr.forEach((path) => {
      let img = new Image();
      img.src = path;
      this.imageCache[path] = img;
    });
  }

  /**
   * Draws the previously loaded image of the object onto the canvas.
   *
   * @param {CanvasRenderingContext2D} ctx - The 2D context of the canvas.
   */
  draw(ctx) {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }

  /**
   * Draws a frame around the object on the canvas to visualise its boundaries.
   * Specific offsets and size adjustments are taken into account for some object types.
   *
   * @param {CanvasRenderingContext2D} ctx - Der 2D-Kontext des Canvas, auf dem der Rahmen gezeichnet wird.zeichnen.
   */
  drawFrame(ctx) {
    if (
      this instanceof Character ||
      this instanceof AttackBubble ||
      this instanceof PufferFish ||
      this instanceof JellyFish ||
      this instanceof Endboss ||
      this instanceof Coin ||
      this instanceof Heart ||
      this instanceof PoisonBottle ||
      this instanceof Barrier
    ) {
      ctx.beginPath();
      ctx.lineWidth = "3";
      ctx.strokeStyle = "blue";
      if (
        this instanceof PufferFish ||
        this instanceof JellyFish ||
        this instanceof Endboss ||
        this instanceof PoisonBottle ||
        this instanceof Heart
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

  /**
   * Processes the collection of an object in the game by moving the object out of the visible area.
   *
   * @param {Object} obj - The object that was collected.
   */
  objectCollected(obj) {
    obj.x = -1000;
    obj.y = -1000;
  }
}
