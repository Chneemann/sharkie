class World {
  character = new Character();
  attackBubble = [];
  statusBarHp = new StatusBarHp();
  statusBarCoin = new StatusBarCoin();
  statusBarPoisonBottles = new StatusBarPoisonBottles();
  statusBarEndboss = new StatusBarEndboss();
  statusBarEndbossTextY = -100;
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
      this.isGameEnd();
      this.checkBubbleSpawn();
      this.checkCollisions();
      this.checkEndbossSpawn();
    }, 100);
  }

  isGameEnd() {
    if (this.character.isDead()) {
      gameEndLost();
    } else if (this.isEndbossDead()) {
      gameEndWin();
    }
  }

  checkCollisions() {
    this.collectingObject();
    this.collidingEnemy();
  }

  collectingObject() {
    this.level.objects.forEach((object) => {
      if (this.character.isColliding(object)) {
        if (object instanceof PoisonBottles) {
          if (this.statusBarPoisonBottles.percentage < 5) {
            this.statusBarPoisonBottles.setPercentage();
            this.objectCollected(object);
            object.sound.play();
          }
        } else {
          this.statusBarCoin.setPercentage();
          this.objectCollected(object);
          object.sound.play();
        }
      }
    });
  }

  collidingEnemy() {
    this.level.enemies.forEach((enemy) => {
      if (this.character.isColliding(enemy)) {
        if (enemy instanceof JellyFish) {
          this.character.hit("shock");
        } else {
          this.character.hit("meele");
        }
        this.statusBarHp.setPercentage(this.character.hp);
      }
      for (let i = 0; i < this.attackBubble.length; i++) {
        if (this.attackBubble[i].isColliding(enemy)) {
          enemy.hp--;
          this.checkEndbossHp(enemy);
          this.objectCollected(this.attackBubble[i]);
          if (enemy.hp == 0) {
            enemy.dead = true;
          }
        }
      }
    });
  }

  checkBubbleSpawn() {
    if (this.keyboard.SPACE && this.statusBarPoisonBottles.percentage >= 1) {
      let poisonAttackBubble = new AttackBubble(
        this.character.x,
        this.character.y
      );
      poisonAttackBubble.sound.play();
      this.attackBubble.push(poisonAttackBubble);
      this.statusBarPoisonBottles.removeBubble();
      this.keyboard.SPACE = false;
    }
  }

  checkEndbossSpawn() {
    if (this.character.x >= this.level.level_end - 700) {
      this.statusBarEndboss.y = 0;
      this.statusBarEndbossTextY = 47;
    }
  }

  checkEndbossHp(enemy) {
    if (enemy == this.level.enemies[this.level.enemies.length - 1]) {
      this.statusBarEndboss.percentage--;
      this.statusBarEndboss.setPercentage(this.statusBarEndboss.percentage);
    }
  }

  isEndbossDead() {
    if (this.level.enemies[this.level.enemies.length - 1].hp == 0) {
      return true;
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
    this.addTextToMap(this.character.hp + "%", "20px", 190, 47);
    this.addTextToMap(this.statusBarCoin.percentage + "/10", "20px", 195, 97);
    this.addTextToMap(
      this.statusBarPoisonBottles.percentage + "/5",
      "20px",
      200,
      147
    );
    this.addTextToMap(
      this.statusBarEndboss.percentage + "/3",
      "20px",
      665,
      this.statusBarEndbossTextY
    );
    this.ctx.translate(this.camera_x, 0);

    this.ctx.translate(-this.camera_x, 0);

    // Draw() wird immer weder aufgerufen
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

  objectCollected(obj) {
    obj.x = -100;
    obj.y = -100;
  }
}
