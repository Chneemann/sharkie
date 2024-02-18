class World {
  character = new Character();
  attackBubble = new AttackBubble();
  allAttackBubbles = [];
  statusBarHp = new StatusBarHp();
  statusBarCoin = new StatusBarCoin();
  statusBarPoisonBottle = new StatusBarPoisonBottle();
  statusBarEndboss = new StatusBarEndboss();
  level = level1;
  endboss = this.level.endboss[0];
  isGameOver = false;
  ctx;
  canvas;
  keyboard;
  camera_x = 0;

  constructor(canvas, keyboard) {
    this.ctx = canvas.getContext("2d");
    this.canvas = canvas;
    this.keyboard = keyboard;
    this.draw();
    this.setWorld();
    this.update();
  }

  /**
   * Adds the variable world to the character
   */
  setWorld() {
    this.character.world = this;
  }

  /**
   * Performs continuous updates for the game as long as the game is not finished.
   */
  update() {
    setInterval(() => {
      if (!this.isGameEnd()) {
        this.checkIsGameEnd();
        this.attackBubble.checkSpawn();
        this.endboss.checkSpawn();
        this.checkAllCollisions();
      }
    }, 100);
  }

  /**
   * Checks whether the game is over
   *
   * @returns true or false
   */
  isGameEnd() {
    if (this.isGameOver) {
      return;
    }
  }

  /**
   * Checks whether the game is over
   *
   * @returns true or false
   */
  checkIsGameEnd() {
    if (this.character.isDead()) {
      gameEndLost();
      this.isGameOver = true;
    } else if (this.endboss.isDead()) {
      gameEndWin();
      this.isGameOver = true;
    } else {
      return false;
    }
  }

  /**
   * Checks all types of collisions on the canvas
   */
  checkAllCollisions() {
    this.isCollectingObject();
    this.isCollidingEnemy();
    this.isCollidingBarrier();
  }

  /**
   * Checks whether the character collects objects.
   */
  isCollectingObject() {
    this.level.objects.forEach((object) => {
      if (this.character.isColliding(object)) {
        this.character.isCollectingPoisionBottle(object);
        this.character.isCollectingCoin(object);
        this.character.isCollectingHeart(object);
      }
    });
  }

  /**
   * Checks whether the character or attack bubbles collide with enemies.
   */
  isCollidingEnemy() {
    const allEnemies = [...this.level.enemies, ...this.level.endboss];
    allEnemies.forEach((enemy) => {
      this.character.isCollidingEnemy(enemy);
      this.attackBubble.isCollidingEnemy(enemy);
    });
  }

  /**
   * Checks whether the character or attack bubbles collide with barriers.
   */
  isCollidingBarrier() {
    this.level.barrier.forEach((barrier) => {
      this.attackBubble.isCollidingBarrier(barrier);
    });
  }

  /**
   * Paints the objects on the canvas
   */
  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.translate(this.camera_x, 0);
    this.addObjectsToMap(this.level.backgroundObjects);
    this.addObjectsToMap(this.level.barrier);
    this.addObjectsToMap(this.level.objects);
    this.addObjectsToMap(this.level.enemies);
    this.addObjectsToMap(this.level.endboss);
    this.addObjectsToMap(this.allAttackBubbles);
    this.addToMap(this.character);
    this.ctx.translate(-this.camera_x, 0);
    this.addToMap(this.statusBarHp);
    this.addToMap(this.statusBarCoin);
    this.addToMap(this.statusBarPoisonBottle);
    if (this.endboss.checkSpawn()) {
      this.addToMap(this.statusBarEndboss);
      this.addTextToMap(
        this.statusBarEndboss.percentage + "/3",
        "20px",
        835,
        73
      );
    }
    this.addTextToMap(this.character.hp + "%", "20px", 190, 47);
    this.addTextToMap(this.statusBarCoin.percentage + "/10", "20px", 195, 97);
    this.addTextToMap(
      this.statusBarPoisonBottle.percentage + "/5",
      "20px",
      200,
      147
    );
    this.ctx.translate(this.camera_x, 0);
    this.ctx.translate(-this.camera_x, 0);
    let self = this;
    requestAnimationFrame(function () {
      self.draw();
    });
  }

  /**
   * Adds text at a specific position on the canvas.
   *
   * @param {string} text - The text to be displayed.
   * @param {string} size - The size and font
   * @param {number} x - The x-position.
   * @param {number} y - The Y position.
   */
  addTextToMap(text, size, x, y) {
    this.ctx.font = size + " water-galon";
    this.ctx.fillText(text, x, y);
  }

  /**
   * Adds a list of objects to the canvas.
   *
   * @param {Object[]} objects - An array of objects
   */
  addObjectsToMap(objects) {
    objects.forEach((o) => {
      this.addToMap(o);
    });
  }

  /**
   * Adds a single movable object to the canvas.
   *
   * @param {MovableObject} mo - The movable object.
   */
  addToMap(mo) {
    this.ctx.save();
    if (mo.rotate) {
      this.rotateObject(mo);
    }
    if (mo.otherDirection) {
      this.flipImage(mo);
    }
    mo.draw(this.ctx);
    mo.drawFrame(this.ctx);
    if (mo.otherDirection) {
      this.flipImageBack(mo);
    }
    this.ctx.restore();
  }

  rotateObject(mo) {
    const centerX = mo.x + mo.width / 2;
    const centerY = mo.y + mo.height / 2;
    this.ctx.translate(centerX, centerY);
    this.ctx.rotate((mo.rotationAngle * Math.PI) / 180);
    this.ctx.translate(-centerX, -centerY);
  }

  /**
   * Mirrors the image of a moving object horizontally.
   *
   * @param {MovableObject} mo - The object to be mirrored.
   */
  flipImage(mo) {
    this.ctx.save();
    this.ctx.translate(mo.width, 0);
    this.ctx.scale(-1, 1);
    mo.x = mo.x * -1;
  }

  /**
   * Restores the original orientation of the image
   *
   * @param {MovableObject} mo - The object that is being restored.
   */
  flipImageBack(mo) {
    mo.x = mo.x * -1;
  }
}
