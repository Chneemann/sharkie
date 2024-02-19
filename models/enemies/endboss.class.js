class Endboss extends MovableObject {
  hp = 3;
  height = 480;
  width = 500;
  spawn = false;
  idle = false;
  lastAttack;
  enemyOffsetX = 30;
  enemyOffsetY = 220;
  enemyOffsetWidth = 60;
  enemyOffsetHeight = 300;
  speed = 1;

  IMAGES_SPAWN = [
    "./img/2.Enemy/3 Final Enemy/1.Introduce/1.png",
    "./img/2.Enemy/3 Final Enemy/1.Introduce/2.png",
    "./img/2.Enemy/3 Final Enemy/1.Introduce/3.png",
    "./img/2.Enemy/3 Final Enemy/1.Introduce/4.png",
    "./img/2.Enemy/3 Final Enemy/1.Introduce/5.png",
    "./img/2.Enemy/3 Final Enemy/1.Introduce/6.png",
    "./img/2.Enemy/3 Final Enemy/1.Introduce/7.png",
    "./img/2.Enemy/3 Final Enemy/1.Introduce/8.png",
    "./img/2.Enemy/3 Final Enemy/1.Introduce/9.png",
    "./img/2.Enemy/3 Final Enemy/1.Introduce/10.png",
  ];

  IMAGES_IDLE = [
    "./img/2.Enemy/3 Final Enemy/2.floating/1.png",
    "./img/2.Enemy/3 Final Enemy/2.floating/2.png",
    "./img/2.Enemy/3 Final Enemy/2.floating/3.png",
    "./img/2.Enemy/3 Final Enemy/2.floating/4.png",
    "./img/2.Enemy/3 Final Enemy/2.floating/5.png",
    "./img/2.Enemy/3 Final Enemy/2.floating/6.png",
    "./img/2.Enemy/3 Final Enemy/2.floating/7.png",
    "./img/2.Enemy/3 Final Enemy/2.floating/8.png",
    "./img/2.Enemy/3 Final Enemy/2.floating/9.png",
    "./img/2.Enemy/3 Final Enemy/2.floating/10.png",
    "./img/2.Enemy/3 Final Enemy/2.floating/11.png",
    "./img/2.Enemy/3 Final Enemy/2.floating/12.png",
    "./img/2.Enemy/3 Final Enemy/2.floating/13.png",
  ];

  IMAGES_HURT = [
    "img/2.Enemy/3 Final Enemy/Hurt/1.png",
    "img/2.Enemy/3 Final Enemy/Hurt/2.png",
    "img/2.Enemy/3 Final Enemy/Hurt/3.png",
    "img/2.Enemy/3 Final Enemy/Hurt/4.png",
  ];

  IMAGES_DEAD = [
    "img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 6.png",
    "img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 7.png",
    "img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 8.png",
    "img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 9.png",
    "img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 10.png",
  ];

  IMAGES_ATTACK = [
    "img/2.Enemy/3 Final Enemy/Attack/1.png",
    "img/2.Enemy/3 Final Enemy/Attack/2.png",
    "img/2.Enemy/3 Final Enemy/Attack/3.png",
    "img/2.Enemy/3 Final Enemy/Attack/4.png",
    "img/2.Enemy/3 Final Enemy/Attack/5.png",
    "img/2.Enemy/3 Final Enemy/Attack/6.png",
  ];

  constructor() {
    super().loadImage("");
    this.x = -2000;
    this.y = 0;
    this.spawnEndboss();
  }

  /**
   * Controls the animations
   */
  animate() {
    let attackTimer = 0;
    let attackInterval = 3000;

    setInterval(() => {
      if (!this.isAlive()) {
        this.playAnimation(this.IMAGES_DEAD);
        this.moveUp();
        this.idle = false;
      } else if (this.isHurt("lastHitEndboss")) {
        this.playAnimation(this.IMAGES_HURT);
        this.idle = false;
      } else if (this.isAlive()) {
        attackTimer = Date.now() - this.lastAttack;
        let i = this.currentImage % this.IMAGES_IDLE.length;
        if (attackTimer > attackInterval) {
          this.endbossAttackAnimation();
        } else if (this.idle) {
          this.endbossIdleAnimation(i);
        } else {
          this.endbossSpawnAnimation(i);
        }
      }
    }, 150);
  }

  /**
   * Checks whether the character is in the right place in the level and then makes the endboss appear
   */
  spawnEndboss() {
    const intervalId = setInterval(() => {
      if (world.character.x >= world.level.levelEnd_right - 1500) {
        this.x = world.level.levelEnd_right - 800;
        this.loadImages(this.IMAGES_SPAWN);
        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_ATTACK);
        this.animate();
        this.attackCharacter();
        soundEndbossSpawn.play();
        clearInterval(intervalId);
        this.spawn = true;
        this.lastAttack = Date.now();
      }
    }, 1000);
  }

  /**
   * Moves to the current coordinates of the character
   */
  attackCharacter() {
    setInterval(() => {
      if (this.idle) {
        if (world.character.x > this.x - 50) {
          if (world.character.x > this.x + 300) {
            this.moveRight();
          }
          this.checkDirectionRight();
        } else {
          this.moveLeft();
          this.checkDirectionLeft();
        }
        if (
          world.character.y >
          this.y + (this.height - this.enemyOffsetHeight)
        ) {
          this.moveDown();
        } else {
          this.moveUp();
        }
      }
    }, 1000 / 60);
  }

  /**
   * Endboss moves to the right
   */
  moveRight() {
    this.x += this.speed;
  }

  /**
   * Endboss moves to the left
   */
  moveLeft() {
    this.x -= this.speed;
  }

  /**
   * Endboss moves upwards
   */
  moveUp() {
    this.y -= this.speed;
  }

  /**
   * Endboss moves downwards
   */
  moveDown() {
    this.y += this.speed;
  }

  /**
   * Checks whether the character is to the left of the centre of the object
   */
  checkDirectionLeft() {
    if (world.character.x < this.x + (this.width - this.enemyOffsetWidth) / 2) {
      this.otherDirection = false;
    }
  }

  /**
   * Checks whether the character is to the right of the centre of the object
   */
  checkDirectionRight() {
    if (world.character.x > this.x + (this.width - this.enemyOffsetWidth) / 2) {
      this.otherDirection = true;
    }
  }

  /**
   * Plays the idle animation of the final boss
   *
   * @param {number} i - The current index
   */
  endbossIdleAnimation(i) {
    let pathIdle = this.IMAGES_IDLE[i];
    this.img = this.imageCache[pathIdle];
    this.currentImage++;
  }

  /**
   * Plays the spawn animation of the final boss
   *
   * @param {number} i - The current index
   */
  endbossSpawnAnimation(i) {
    if (i >= this.IMAGES_SPAWN.length) {
      this.idle = true;
    } else {
      let pathSpawn = this.IMAGES_SPAWN[i];
      this.img = this.imageCache[pathSpawn];
      this.currentImage++;
    }
  }

  /**
   * Executes the attack animation of the final boss
   */
  endbossAttackAnimation() {
    let attackImageIndex = this.currentImage % this.IMAGES_ATTACK.length;
    let pathAttack = this.IMAGES_ATTACK[attackImageIndex];
    this.img = this.imageCache[pathAttack];
    this.currentImage++;
    if (attackImageIndex === this.IMAGES_ATTACK.length - 1) {
      this.lastAttack = Date.now();
      this.idle = true;
    }
  }

  /**
   * Decreases the percentage of health points (HP) of the end boss and updates its status bar
   *
   * @param {Object} enemy - The enemy object that is checked.
   */
  checkHp(enemy) {
    if (enemy == this && this.isAlive()) {
      world.statusBarEndboss.percentage--;
      world.statusBarEndboss.setPercentage(world.statusBarEndboss.percentage);
      this.lastHitEndboss = new Date().getTime();
    }
  }

  /**
   * Checks if the endboss is dead
   *
   * @returns true or false
   */
  isDead() {
    if (this.hp == 0) {
      return true;
    }
  }

  /**
   * Checks whether the endboss is spawned
   * @returns true or false
   */
  checkSpawn() {
    if (this.spawn) {
      return true;
    }
  }
}
