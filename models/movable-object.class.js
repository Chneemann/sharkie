class MovableObject extends DrawableObject {
  hp = 100;
  lastHit = 0;
  lastAnimate = 0;
  speed = 0.2;
  otherDirection = false;
  canvasCollision = false;

  hit() {
    this.hp -= 5;
    if (this.hp < 0) {
      this.hp = 0;
    } else {
      this.lastHit = new Date().getTime();
    }
  }

  isDead() {
    return this.hp == 0;
  }

  isHurt() {
    let timepassed = new Date().getTime() - this.lastHit;
    timepassed = timepassed / 1000;
    return timepassed < 1;
  }

  lastAnimation(time) {
    let timepassed = new Date().getTime() - this.lastAnimate;
    timepassed = timepassed / 1000;
    return timepassed < time;
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
    }, 1);
  }

  moveRight() {
    setInterval(() => {
      this.x += this.speed;
    }, 1);
  }

  moveUp() {
    setInterval(() => {
      this.y -= this.speed;
    }, 1);
  }

  moveLeftAndRight() {
    this.movingRight = true;
    this.startX = this.x;

    setInterval(() => {
      if (this.movingRight && this.isAlive()) {
        this.x -= this.speed;
        if (this.x <= this.startX - this.motionRange) {
          this.movingRight = false;
          this.otherDirection = true;
        }
      } else if (this.isAlive()) {
        this.x += this.speed;
        if (this.x >= this.startX) {
          this.movingRight = true;
          this.otherDirection = false;
        }
      }
    }, 20);
  }

  moveUpAndDown() {
    this.movingDown = true;
    this.startY = this.y;

    setInterval(() => {
      if (this.movingDown) {
        this.y += this.speed;
        if (this.y >= this.startY + this.motionRange) {
          this.movingDown = false;
        }
      } else {
        this.y -= this.speed;
        if (this.y <= this.startY) {
          this.movingDown = true;
        }
      }
    }, 20);
  }

  isColliding(obj) {
    return (
      this.x + this.characterOffsetX + this.width - this.characterOffsetWidth >=
        obj.x + obj.enemyOffsetX &&
      this.x + this.characterOffsetX <=
        obj.x + obj.enemyOffsetX + obj.width - obj.enemyOffsetWidth &&
      this.y +
        this.characterOffsetY +
        this.height -
        this.characterOffsetHeight >=
        obj.y + obj.enemyOffsetY &&
      this.y + this.characterOffsetY <=
        obj.y + obj.enemyOffsetY + obj.height - obj.enemyOffsetHeight
    );
  }
}
