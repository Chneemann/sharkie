class World {
  character = new Character();
  attackBubble = new AttackBubble();
  newAttackBubble = [];
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
        this.checkCollisions();
        this.endboss.checkSpawn();
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
  checkCollisions() {
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
        this.isCharacterCollectingPoisionBottle(object);
        this.isCharacterCollectingCoin(object);
      }
    });
  }

  /**
   * Processes the collection of a poison bottle by the character.
   *
   * @param {Object} object - The object with which the collision check is performed.
   */
  isCharacterCollectingPoisionBottle(object) {
    if (object instanceof PoisonBottle) {
      if (this.statusBarPoisonBottle.percentage < 5) {
        this.statusBarPoisonBottle.addPoisonBottle();
        this.character.objectCollected(object);
        soundCollectPoisonBottle.play();
      }
    }
  }

  /**
   * Processes the collection of a coin by the character.
   *
   * @param {Object} object - The object with which the collision check is performed.
   */
  isCharacterCollectingCoin(object) {
    if (object instanceof Coin) {
      this.statusBarCoin.addCoin();
      this.character.objectCollected(object);
      soundCollectCoin.play();
    }
  }

  /**
   * Checks whether the character or attack bubbles collide with enemies.
   */
  isCollidingEnemy() {
    const allEnemies = [...this.level.enemies, ...this.level.endboss];
    allEnemies.forEach((enemy) => {
      this.isCharacterCollidingEnemy(enemy);
      this.attackBubble.isCollidingEnemy(enemy);
    });
  }

  /**
   * Processes a collision between the character and an enemy.
   *
   * @param {Object} enemy - The enemy with which the collision is checked.
   */
  isCharacterCollidingEnemy(enemy) {
    if (this.character.isColliding(enemy)) {
      if (enemy instanceof JellyFish) {
        this.character.hit("shock");
      } else if (enemy instanceof PufferFish || enemy instanceof Endboss) {
        this.character.hit("meele");
      }
      this.statusBarHp.setPercentage(this.character.hp);
    }
  }

  /**
   * Checks whether the character or attack bubbles collide with barriers.
   */
  isCollidingBarrier() {
    this.level.barrier.forEach((barrier) => {
      this.isCharacterCollidingBarrier(barrier);
      this.isAttackBubbleCollidingBarrier(barrier);
    });
  }

  /**
   * Processes a collision of the character with a barrier.
   *
   * @param {Object} barrier - The barrier with which the collision is checked.
   */
  isCharacterCollidingBarrier(barrier) {
    if (this.character.isColliding(barrier)) {
      this.character.isColliding = true;
    }
  }

  /**
   * Checks whether the attack bubbles collide with barriers.
   *
   * @param {Object} barrier - The barrier with which the collision is checked.
   */
  isAttackBubbleCollidingBarrier(barrier) {
    for (let i = 0; i < this.attackBubble.length; i++) {
      if (this.attackBubble[i].isColliding(barrier)) {
        soundAttackBubbleHit.play();
        barrier.objectCollected(this.attackBubble[i]);
        this.attackBubble[i].intervalClearStatus = true;
      }
    }
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
    this.addObjectsToMap(this.newAttackBubble);
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

  addTextToMap(text, size, x, y) {
    this.ctx.font = size + " water-galon";
    this.ctx.fillText(text, x, y);
  }

  addObjectsToMap(objects) {
    objects.forEach((o) => {
      this.addToMap(o);
    });
  }

  addToMap(mo) {
    if (mo.otherDirection) {
      this.flipImage(mo);
    }
    mo.draw(this.ctx);
    mo.drawFrame(this.ctx);
    if (mo.otherDirection) {
      this.flipImageBack(mo);
    }
  }

  flipImage(mo) {
    this.ctx.save();
    this.ctx.translate(mo.width, 0);
    this.ctx.scale(-1, 1);
    mo.x = mo.x * -1;
  }

  flipImageBack(mo) {
    mo.x = mo.x * -1;
    this.ctx.restore();
  }
}
