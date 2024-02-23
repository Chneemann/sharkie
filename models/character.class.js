class Character extends MovableObject {
  height = 200;
  width = 250;
  characterOffsetX = 45;
  characterOffsetY = 95;
  characterOffsetWidth = 90;
  characterOffsetHeight = 140;
  speed = 7;

  IMAGES_IDLE = [
    "img/1.Sharkie/1.IDLE/1.png",
    "img/1.Sharkie/1.IDLE/2.png",
    "img/1.Sharkie/1.IDLE/3.png",
    "img/1.Sharkie/1.IDLE/4.png",
    "img/1.Sharkie/1.IDLE/5.png",
    "img/1.Sharkie/1.IDLE/6.png",
    "img/1.Sharkie/1.IDLE/7.png",
    "img/1.Sharkie/1.IDLE/8.png",
    "img/1.Sharkie/1.IDLE/9.png",
    "img/1.Sharkie/1.IDLE/10.png",
    "img/1.Sharkie/1.IDLE/11.png",
    "img/1.Sharkie/1.IDLE/12.png",
    "img/1.Sharkie/1.IDLE/13.png",
    "img/1.Sharkie/1.IDLE/14.png",
    "img/1.Sharkie/1.IDLE/15.png",
    "img/1.Sharkie/1.IDLE/16.png",
    "img/1.Sharkie/1.IDLE/17.png",
    "img/1.Sharkie/1.IDLE/18.png",
  ];

  IMAGES_INTO_SLEEP = [
    "img/1.Sharkie/2.Long_IDLE/i1.png",
    "img/1.Sharkie/2.Long_IDLE/I2.png",
    "img/1.Sharkie/2.Long_IDLE/I3.png",
    "img/1.Sharkie/2.Long_IDLE/I4.png",
    "img/1.Sharkie/2.Long_IDLE/I5.png",
    "img/1.Sharkie/2.Long_IDLE/I6.png",
    "img/1.Sharkie/2.Long_IDLE/I7.png",
    "img/1.Sharkie/2.Long_IDLE/I8.png",
    "img/1.Sharkie/2.Long_IDLE/I9.png",
    "img/1.Sharkie/2.Long_IDLE/I10.png",
  ];

  IMAGES_IS_SLEEP = [
    "img/1.Sharkie/2.Long_IDLE/I11.png",
    "img/1.Sharkie/2.Long_IDLE/I12.png",
    "img/1.Sharkie/2.Long_IDLE/I13.png",
    "img/1.Sharkie/2.Long_IDLE/I14.png",
  ];

  IMAGES_MOVE = [
    "img/1.Sharkie/3.Swim/1.png",
    "img/1.Sharkie/3.Swim/2.png",
    "img/1.Sharkie/3.Swim/3.png",
    "img/1.Sharkie/3.Swim/4.png",
    "img/1.Sharkie/3.Swim/5.png",
    "img/1.Sharkie/3.Swim/6.png",
  ];

  IMAGES_ATTACK = [
    "img/1.Sharkie/4.Attack/Bubble trap/Op2 (Without Bubbles)/1.png",
    "img/1.Sharkie/4.Attack/Bubble trap/Op2 (Without Bubbles)/2.png",
    "img/1.Sharkie/4.Attack/Bubble trap/Op2 (Without Bubbles)/3.png",
    "img/1.Sharkie/4.Attack/Bubble trap/Op2 (Without Bubbles)/4.png",
    "img/1.Sharkie/4.Attack/Bubble trap/Op2 (Without Bubbles)/5.png",
    "img/1.Sharkie/4.Attack/Bubble trap/Op2 (Without Bubbles)/6.png",
    "img/1.Sharkie/4.Attack/Bubble trap/Op2 (Without Bubbles)/7.png",
  ];

  IMAGES_HURT_MEELE = [
    "img/1.Sharkie/5.Hurt/1.Poisoned/1.png",
    "img/1.Sharkie/5.Hurt/1.Poisoned/2.png",
    "img/1.Sharkie/5.Hurt/1.Poisoned/3.png",
    "img/1.Sharkie/5.Hurt/1.Poisoned/4.png",
  ];

  IMAGES_HURT_ELECTRIC_SHOCK = [
    "img/1.Sharkie/5.Hurt/2.Electric shock/1.png",
    "img/1.Sharkie/5.Hurt/2.Electric shock/2.png",
    "img/1.Sharkie/5.Hurt/2.Electric shock/3.png",
  ];

  IMAGES_DEAD_MEELE = [
    "img/1.Sharkie/6.dead/1.Poisoned/1.png",
    "img/1.Sharkie/6.dead/1.Poisoned/2.png",
    "img/1.Sharkie/6.dead/1.Poisoned/3.png",
    "img/1.Sharkie/6.dead/1.Poisoned/4.png",
    "img/1.Sharkie/6.dead/1.Poisoned/5.png",
    "img/1.Sharkie/6.dead/1.Poisoned/6.png",
    "img/1.Sharkie/6.dead/1.Poisoned/7.png",
    "img/1.Sharkie/6.dead/1.Poisoned/8.png",
    "img/1.Sharkie/6.dead/1.Poisoned/9.png",
    "img/1.Sharkie/6.dead/1.Poisoned/10.png",
    "img/1.Sharkie/6.dead/1.Poisoned/11.png",
    "img/1.Sharkie/6.dead/1.Poisoned/12.png",
  ];

  IMAGES_DEAD_ELECTRIC_SHOCK = [
    "img/1.Sharkie/6.dead/2.Electro_shock/1.png",
    "img/1.Sharkie/6.dead/2.Electro_shock/2.png",
    "img/1.Sharkie/6.dead/2.Electro_shock/3.png",
    "img/1.Sharkie/6.dead/2.Electro_shock/4.png",
    "img/1.Sharkie/6.dead/2.Electro_shock/5.png",
    "img/1.Sharkie/6.dead/2.Electro_shock/6.png",
    "img/1.Sharkie/6.dead/2.Electro_shock/7.png",
    "img/1.Sharkie/6.dead/2.Electro_shock/8.png",
    "img/1.Sharkie/6.dead/2.Electro_shock/9.png",
    "img/1.Sharkie/6.dead/2.Electro_shock/10.png",
  ];

  constructor() {
    super().loadImage("./img/1.Sharkie/1.IDLE/1.png");
    this.loadImages(this.IMAGES_IDLE);
    this.loadImages(this.IMAGES_INTO_SLEEP);
    this.loadImages(this.IMAGES_IS_SLEEP);
    this.loadImages(this.IMAGES_MOVE);
    this.loadImages(this.IMAGES_ATTACK);
    this.loadImages(this.IMAGES_HURT_MEELE);
    this.loadImages(this.IMAGES_HURT_ELECTRIC_SHOCK);
    this.loadImages(this.IMAGES_DEAD_MEELE);
    this.loadImages(this.IMAGES_DEAD_ELECTRIC_SHOCK);
    this.animate();
    this.moveCharacter();
  }

  /**
   * Adjusts the camera position smoothly based on the current character position and direction.
   */
  adjustCameraPosition() {
    const cameraX = this.otherDirection ? -this.x + 500 : -this.x + 200;
    const smoothness = 0.05;

    this.world.camera_x = (function lerp(start, end, t) {
      return start * (1 - t) + end * t;
    })(this.world.camera_x, cameraX, smoothness);
  }

  /**
   * Controls the character's animations.
   */
  animate() {
    setInterval(() => {
      if (this.isDead() && this.lastHitMeele < this.lastHitElectricShock) {
        this.playAnimation(this.IMAGES_DEAD_ELECTRIC_SHOCK);
      } else if (this.isDead()) {
        this.playAnimation(this.IMAGES_DEAD_MEELE);
      } else if (this.isHurt("lastHitMeele")) {
        this.playAnimation(this.IMAGES_HURT_MEELE);
      } else if (this.isHurt("lastHitElectricShock")) {
        this.playAnimation(this.IMAGES_HURT_ELECTRIC_SHOCK);
      } else if (this.lastAttackTime()) {
        this.playAnimation(this.IMAGES_ATTACK);
      } else if (this.world.keyboard.MOVE) {
        this.playAnimation(this.IMAGES_MOVE);
      } else if (this.isSleep(15)) {
        if (this.isSleep(16)) {
          this.playAnimation(this.IMAGES_IS_SLEEP);
          soundCharacterSnore.play();
        } else {
          this.playAnimation(this.IMAGES_INTO_SLEEP);
        }
      } else if (!this.world.keyboard.MOVE && !this.lastAttackTime()) {
        this.playAnimation(this.IMAGES_IDLE);
      }
    }, 100);
  }

  /**
   * Controls the character key inputs.
   */
  moveCharacter() {
    setInterval(() => {
      if (
        keyboard.btnPressed("RIGHT") &&
        world.level.isWorldEnd("right") &&
        !this.isDead()
      ) {
        this.moveRight();
      }
      if (
        keyboard.btnPressed("LEFT") &&
        world.level.isWorldEnd("left") &&
        !this.isDead()
      ) {
        this.moveLeft();
      }
      if (
        keyboard.btnPressed("UP") &&
        world.level.isWorldEnd("up") &&
        !this.isDead()
      ) {
        this.moveUp();
      }
      if (
        keyboard.btnPressed("DOWN") &&
        world.level.isWorldEnd("down") &&
        !this.isDead()
      ) {
        this.moveDown();
      }
      if (
        keyboard.btnPressed("SPACE") &&
        world.attackBubble.canCreateNewAttackBubble() &&
        !this.isDead()
      ) {
        this.lastAttack = new Date().getTime();
      }
      this.adjustCameraPosition();
    }, 1000 / 60);
  }

  /**
   * Processes the collection of a poison bottle by the character.
   *
   * @param {Object} object - The object with which the collision check is performed.
   */
  isCollectingPoisionBottle(object) {
    if (object instanceof PoisonBottle) {
      if (world.statusBarPoisonBottle.percentage < 5) {
        world.statusBarPoisonBottle.addPoisonBottle();
        this.objectCollected(object);
        soundCollectPoisonBottle.play();
      }
    }
  }

  /**
   * Processes the collection of a coin by the character.
   *
   * @param {Object} object - The object with which the collision check is performed.
   */
  isCollectingCoin(object) {
    if (object instanceof Coin) {
      world.statusBarCoin.addCoin();
      this.objectCollected(object);
      soundCollectCoin.play();
    }
  }

  /**
   * Processes the collection of a heart by the character.
   *
   * @param {Object} object - The object with which the collision check is performed.
   */
  isCollectingHeart(object) {
    if (object instanceof Heart) {
      if (this.hp <= 99) {
        this.hp += 20;
        world.statusBarHp.percentage += 20;
        if (this.hp > 100) {
          this.hp = 100;
          world.statusBarHp.percentage = 100;
        }
        world.statusBarHp.setPercentage(world.statusBarHp.percentage);
        this.objectCollected(object);
        soundCollectHeart.play();
      }
    }
  }

  /**
   * Processes a collision between the character and an enemy.
   *
   * @param {Object} enemy - The enemy with which the collision is checked.
   */
  isCollidingEnemy(enemy) {
    if (this.isColliding(enemy)) {
      if (enemy instanceof JellyFish) {
        this.hit("shock");
      } else if (enemy instanceof PufferFish || enemy instanceof Endboss) {
        this.hit("meele");
      }
      world.statusBarHp.setPercentage(this.hp);
    }
  }

  /**
   * Checks whether the attack animation was 0.8s ago
   *
   * @returns true or false
   */
  lastAttackTime() {
    let timepassed = new Date().getTime() - this.lastAttack;
    timepassed /= 1000;
    return timepassed < 0.6;
  }

  /**
   * Checks whether a certain amount of time has elapsed since the last button was pressed.
   *
   * @param {number} time - The time in seconds.
   * @returns True or false.
   */
  isSleep(time) {
    let timepassed = new Date().getTime() - keyboard.lastInputDate;
    timepassed /= 1000;
    return timepassed > time;
  }

  /**
   * Character moves to the right.
   */
  moveRight() {
    this.x += this.speed;
    this.otherDirection = false;
    soundCharacterMove.play();
  }

  /**
   * Character moves to the left.
   */
  moveLeft() {
    this.x -= this.speed;
    this.otherDirection = true;
    soundCharacterMove.play();
  }

  /**
   * Character moves upwards.
   */
  moveUp() {
    this.y -= this.speed;
    soundCharacterMove.play();
  }

  /**
   * Character moves downwards.
   */
  moveDown() {
    this.y += this.speed;
    soundCharacterMove.play();
  }
}
