class World {
  character = new Character();
  attackBubble = [];
  statusBarHp = new StatusBarHp();
  statusBarCoin = new StatusBarCoin();
  statusBarPoisonBottles = new StatusBarPoisonBottles();
  statusBarEndboss = new StatusBarEndboss();
  level = level1;
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
    this.run();
  }

  setWorld() {
    this.character.world = this;
  }

  run() {
    setInterval(() => {
      this.checkGameEnd();
      this.checkBubbleObject();
      this.checkCollisions();
      this.checkSpawnEndboss();
      this.statusBarEndboss.setPercentage(this.statusBarEndboss.percentage);
    }, 200);
  }

  checkGameEnd() {
    if (this.character.isDead()) {
      gameEndLost();
    } else if (this.level.enemies[this.level.enemies.length - 1].hp == 0) {
      gameEndWin();
    }
  }

  checkBubbleObject() {
    if (this.keyboard.SPACE && this.statusBarPoisonBottles.percentage >= 1) {
      let poisonAttackBubble = new AttackBubble(
        this.character.x,
        this.character.y
      );
      this.attackBubble.push(poisonAttackBubble);
      this.statusBarPoisonBottles.removeBubble();
    }
  }

  checkCollisions() {
    this.level.objects.forEach((object) => {
      if (this.character.isColliding(object)) {
        this.objectCollected(object);
        if (object instanceof PoisonBottles) {
          this.statusBarPoisonBottles.setPercentage();
        } else {
          this.statusBarCoin.setPercentage();
        }
      }
    });
    this.level.enemies.forEach((enemy) => {
      if (this.character.isColliding(enemy)) {
        this.character.hit();
        this.statusBarHp.setPercentage(this.character.hp);
      }
      for (let i = 0; i < this.attackBubble.length; i++) {
        if (this.attackBubble[i].isColliding(enemy)) {
          enemy.hp--;
          if (enemy == this.level.enemies[9]) {
            this.statusBarEndboss.percentage--;
          }
          this.objectCollected(this.attackBubble[i]);
          if (enemy.hp == 0) {
            enemy.dead = true;
          }
        }
      }
    });
  }

  checkSpawnEndboss() {
    if (this.character.x >= this.level.level_end_x - 700) {
      this.statusBarEndboss.y = 0;
    }
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.ctx.translate(this.camera_x, 0);

    this.addObjectsToMap(this.level.backgroundObjects);
    this.addObjectsToMap(this.level.objects);
    this.addObjectsToMap(this.level.enemies);
    this.addObjectsToMap(this.attackBubble);

    this.addToMap(this.character);

    this.ctx.translate(-this.camera_x, 0);
    // Space for fixed objects
    this.addToMap(this.statusBarHp);
    this.addToMap(this.statusBarCoin);
    this.addToMap(this.statusBarPoisonBottles);
    this.addToMap(this.statusBarEndboss);
    this.ctx.translate(this.camera_x, 0);

    this.ctx.translate(-this.camera_x, 0);

    // Draw() wird immer weder aufgerufen
    let self = this;
    requestAnimationFrame(function () {
      self.draw();
    });
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

  objectCollected(obj) {
    obj.x = -100;
    obj.y = -100;
  }
}
