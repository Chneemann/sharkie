class World {
  character = new Character();
  attackBubble = [];
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
      if (!this.isGameOver) {
        this.isGameEnd();
        this.checkBubbleSpawn();
        this.checkCollisions();
        this.checkEndbossSpawn();
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
    if (this.character.isDead()) {
      gameEndLost();
      this.isGameOver = true;
    } else if (this.isEndbossDead()) {
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
      this.isAttackBubbleCollidingEnemy(enemy);
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
   * Checks whether attack bubbles collide with enemies.
   *
   * @param {Object} enemy - The enemy with which the collision is checked.
   */
  isAttackBubbleCollidingEnemy(enemy) {
    for (let i = 0; i < this.attackBubble.length; i++) {
      if (this.attackBubble[i].isColliding(enemy)) {
        soundAttackBubbleHit.play();
        enemy.hp--;
        this.checkEndbossHp(enemy);
        enemy.objectCollected(this.attackBubble[i]);
        this.attackBubble[i].intervalClearStatus = true;
        if (enemy.hp == 0) {
          enemy.dead = true;
        }
      }
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
   * Controls the spawning of a new attack bubble.
   */
  checkBubbleSpawn() {
    let direction;
    let characterX;
    if (this.keyboard.SPACE && this.statusBarPoisonBottle.percentage >= 1) {
      if (this.keyboard.lastInput == "right") {
        direction = "right";
        characterX = this.character.x;
      } else if (this.keyboard.lastInput == "left") {
        direction = "left";
        characterX = this.character.x - this.character.width;
      }
      let poisonAttackBubble = new AttackBubble(
        characterX,
        this.character.y,
        direction
      );
      soundAttackBubble.play();
      this.attackBubble.push(poisonAttackBubble);
      this.statusBarPoisonBottle.removePoisonBottle();
      this.keyboard.SPACE = false;
    }
  }

  /**
   * Checks whether the endboss is spawned
   * @returns true or false
   */
  checkEndbossSpawn() {
    if (this.endboss.spawn) {
      return true;
    }
  }

  /**
   * Decreases the percentage of health points (HP) of the end boss and updates its status bar
   *
   * @param {Object} enemy - The enemy object that is checked.
   */
  checkEndbossHp(enemy) {
    if (enemy == this.endboss && this.endboss.isAlive()) {
      this.statusBarEndboss.percentage--;
      this.statusBarEndboss.setPercentage(this.statusBarEndboss.percentage);
      this.endboss.lastHitEndboss = new Date().getTime();
    }
  }

  /**
   * Checks if the endboss is dead
   *
   * @returns true or false
   */
  isEndbossDead() {
    if (this.endboss.hp == 0) {
      return true;
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
    this.addObjectsToMap(this.attackBubble);
    this.addToMap(this.character);
    this.ctx.translate(-this.camera_x, 0);
    this.addToMap(this.statusBarHp);
    this.addToMap(this.statusBarCoin);
    this.addToMap(this.statusBarPoisonBottle);
    if (this.checkEndbossSpawn()) {
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
