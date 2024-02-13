class MovableObject extends DrawableObject {
  hp = 100;
  lastHitMeele = 0;
  lastHitElectricShock = 0;
  lastHitEndboss = 0;
  lastAnimate = 0;
  speed = 0.2;
  otherDirection = false;
  canvasCollision = false;

  /**
   * Processes a hit that the object receives and reduces its health points (HP).
   *
   * @param {string} hit - The type of hit.
   */
  hit(hit) {
    this.hp -= 2;
    if (this.hp < 0) {
      this.hp = 0;
    } else {
      if (hit == "meele") {
        this.lastHitMeele = new Date().getTime();
        soundCharacterHitMeele.play();
      } else if (hit == "shock") {
        this.lastHitElectricShock = new Date().getTime();
        soundCharacterHitShock.play();
      }
    }
  }

  /**
   * Checks whether the object is dead (i.e. has no more health points (HP)).
   *
   * @returns {boolean} True or False.
   */
  isDead() {
    return this.hp == 0;
  }

  /**
   * Checks whether the object is alive (i.e. not marked as dead)
   *
   * @returns {boolean} True or False.
   */
  isAlive() {
    if (!this.dead) {
      this.lastAnimate = new Date().getTime();
      return true;
    } else {
      return false;
    }
  }

  /**
   * Determines whether the object has recently been violated.
   *
   * @param {string} lastHit - The time of the last hit.
   * @returns {boolean} True or False.
   */
  isHurt(lastHit) {
    let lastHitTime = this[lastHit];
    let timepassed = new Date().getTime() - lastHitTime;
    timepassed /= 1000;
    return timepassed < 1;
  }

  /**
   * Checks whether less than a certain amount of time has passed since the last animation.
   *
   * @param {number} time - The time in seconds.
   * @returns {boolean} True or False.
   */
  lastAnimation(time) {
    let timepassed = new Date().getTime() - this.lastAnimate;
    timepassed /= 1000;
    return timepassed < time;
  }

  /**
   * Plays an animation
   *
   * @param {string[]} images - The paths to the images.
   */
  playAnimation(images) {
    let i = this.currentImage % images.length;
    let path = images[i];
    this.img = this.imageCache[path];
    this.currentImage++;
  }

  /**
   * Moves the object continuously to the left.
   */
  moveLeft() {
    setInterval(() => {
      this.x -= this.speed;
    }, 1);
  }

  /**
   * Moves the object continuously to the right.
   */
  moveRight() {
    setInterval(() => {
      this.x += this.speed;
    }, 1);
  }

  /**
   * Moves the object continuously upwards.
   */
  moveUp() {
    setInterval(() => {
      this.y -= this.speed;
    }, 2);
  }

  /**
   * Moves the object continuously back and forth within a defined horizontal range.
   * Changes the direction of movement as soon as the object reaches an end point of the range.
   */
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

  /**
   * Moves the object continuously back and forth within a defined horizontal range.
   * Changes the direction of movement as soon as the object reaches an end point of the range.
   */
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

  /**
   * Checks whether the object collides with another object.
   *
   * @param {Object} obj - The other object to be checked for collision.
   * @returns {boolean} True or False.
   */
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
