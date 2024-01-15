class World {
  character = new Character();
  attackBubble = [];
  statusBarHp = new StatusBarHp();
  statusBarCoin = new StatusBarCoin();
  statusBarPoisonBottles = new StatusBarPoisonBottles();
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
      this.checkBubbleObject();
      this.checkCollisions();
    }, 200);
  }

  checkBubbleObject() {
    if (this.keyboard.SPACE && this.statusBarPoisonBottles.percentage >= 1) {
      let poisonAttackBubble = new AttackBubble(
        this.character.x,
        this.character.y
      );
      this.attackBubble.push(poisonAttackBubble);
      this.statusBarPoisonBottles.removeBottle();
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
    });
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
