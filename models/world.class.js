class World {
  character = new Character();
  attackBubble = [];
  statusBarHp = new StatusBarHp();
  statusBarCoin = new StatusBarCoin();
  statusBarPoisonBottle = new StatusBarPoisonBottle();
  statusBarEndboss = new StatusBarEndboss();
  statusBarEndbossTextY = -100;
  soundManager = new SoundManager();
  level = level1;
  endboss = this.level.enemies[this.level.enemies.length - 1];
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

  setWorld() {
    this.character.world = this;
  }

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

  checkCollisions() {
    this.collectingObject();
    this.collidingEnemy();
  }

  collectingObject() {
    this.level.objects.forEach((object) => {
      if (this.character.isColliding(object)) {
        if (object instanceof PoisonBottle) {
          if (this.statusBarPoisonBottle.percentage < 5) {
            this.statusBarPoisonBottle.setPercentage();
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
          this.character.sound_shock.play();
        } else if (enemy instanceof PufferFish || enemy instanceof Endboss) {
          this.character.hit("meele");
          this.character.sound_meele.play();
        }
        this.statusBarHp.setPercentage(this.character.hp);
      }
      for (let i = 0; i < this.attackBubble.length; i++) {
        if (this.attackBubble[i].isColliding(enemy)) {
          this.attackBubble[i].sound_impact.play();
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
    if (this.keyboard.SPACE && this.statusBarPoisonBottle.percentage >= 1) {
      let poisonAttackBubble = new AttackBubble(
        this.character.x,
        this.character.y
      );
      poisonAttackBubble.sound.play();
      this.attackBubble.push(poisonAttackBubble);
      this.statusBarPoisonBottle.removeBubble();
      this.keyboard.SPACE = false;
    }
  }

  checkEndbossSpawn() {
    if (this.character.x >= this.level.level_end - 900) {
      this.statusBarEndboss.y = 20;
      this.statusBarEndbossTextY = 68;
    }
  }

  checkEndbossHp(enemy) {
    if (enemy == this.endboss && this.endboss.isAlive()) {
      this.statusBarEndboss.percentage--;
      this.statusBarEndboss.setPercentage(this.statusBarEndboss.percentage);
      this.endboss.lastHitEndboss = new Date().getTime();
    }
  }

  isEndbossDead() {
    if (this.endboss.hp == 0) {
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
    this.addToMap(this.statusBarPoisonBottle);
    this.addToMap(this.statusBarEndboss);
    this.addTextToMap(this.character.hp + "%", "20px", 190, 47);
    this.addTextToMap(this.statusBarCoin.percentage + "/10", "20px", 195, 97);
    this.addTextToMap(
      this.statusBarPoisonBottle.percentage + "/5",
      "20px",
      200,
      147
    );
    this.addTextToMap(
      this.statusBarEndboss.percentage + "/3",
      "20px",
      835,
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
