class AttackBubble extends MovableObject {
  height = 40;
  width = 40;
  characterOffsetX = 0;
  characterOffsetY = 0;
  characterOffsetWidth = 0;
  characterOffsetHeight = 0;
  speed = 7;

  IMAGE_NORMAL = ["img/1.Sharkie/4.Attack/Bubble trap/Bubble.png"];

  IMAGE_POISONED = [
    "img/1.Sharkie/4.Attack/Bubble trap/Poisoned Bubble (for whale).png",
  ];

  constructor(x, y, direction, time, poisonedBubble) {
    if (poisonedBubble) {
      super().loadImage(
        "img/1.Sharkie/4.Attack/Bubble trap/Poisoned Bubble (for whale).png"
      );
    } else {
      super().loadImage("img/1.Sharkie/4.Attack/Bubble trap/Bubble.png");
    }
    this.loadImages(this.IMAGE_NORMAL);
    this.loadImages(this.IMAGE_POISONED);
    this.x = x + 210;
    this.y = y + 100;
    this.bubbleMoveTo = direction;
    this.poisonedBubble = poisonedBubble;
    this.time = time;
    this.animate();
  }

  /**
   * Controls the animations.
   */
  animate() {
    if (this.bubbleMoveTo == "right") {
      this.attackbubbleright();
    } else if (this.bubbleMoveTo == "left") {
      this.attackbubbleleft();
    }
    const intervalId = setInterval(() => {
      if (this.poisonedBubble) {
        this.playAnimation(this.IMAGE_POISONED);
      } else {
        this.playAnimation(this.IMAGE_NORMAL);
      }
      stopInterval(this.intervalClearStatus, intervalId);
    }, 150);
  }

  /**
   * Move to the right.
   */
  attackbubbleright() {
    const intervalId = setInterval(() => {
      this.x += this.speed;
      stopInterval(this.intervalClearStatus, intervalId);
    }, 1000 / 60);
  }

  /**
   * Move to the left.
   */
  attackbubbleleft() {
    const intervalId = setInterval(() => {
      this.x -= this.speed;
      stopInterval(this.intervalClearStatus, intervalId);
    }, 1000 / 60);
  }

  /**
   * Controls the spawning of a new attack bubble.
   */
  checkSpawn() {
    if (keyboard.SPACE && this.canCreateNewAttackBubble()) {
      soundAttackBubble.play();
      world.allAttackBubbles.push(this.addNewAttackBubble());
      if (world.statusBarPoisonBottle.percentage >= 1) {
        world.statusBarPoisonBottle.removePoisonBottle();
      }
      keyboard.SPACE = false;
    }
  }

  canCreateNewAttackBubble() {
    if (world.allAttackBubbles.length > 0) {
      const currentTime = new Date().getTime();
      const lastBubbleTime =
        world.allAttackBubbles[world.allAttackBubbles.length - 1].time;
      return currentTime > lastBubbleTime + 1000;
    } else {
      return true;
    }
  }

  /**
   * Creates a new attack bubble.
   */
  addNewAttackBubble() {
    const { direction, characterX, characterY, time } = this.checkDirection();
    return new AttackBubble(
      characterX,
      characterY,
      direction,
      time,
      this.checkPoisionedBubble()
    );
  }

  /**
   * Determines the current direction of movement of the character and its X and Y position.
   * @returns {Object} Contains the direction of movement, X/Y position of the character
   */
  checkDirection() {
    let direction;
    let characterX;
    let characterY = world.character.y;
    let time = new Date().getTime();
    if (keyboard.lastInputX === "right") {
      direction = "right";
      characterX = world.character.x;
    } else if (keyboard.lastInputX === "left") {
      direction = "left";
      characterX = world.character.x - world.character.width;
    }
    return { direction, characterX, characterY, time };
  }

  /**
   * Checks whether the player had a poison bottle at that moment.
   *
   * @returns {boolean} True or false.
   */
  checkPoisionedBubble() {
    return world.statusBarPoisonBottle.percentage >= 1;
  }

  /**
   * Checks whether attack bubbles collide with enemies.
   *
   * @param {Object} enemy - The enemy with which the collision is checked.
   */
  isCollidingEnemy(enemy) {
    for (let i = 0; i < world.allAttackBubbles.length; i++) {
      if (world.allAttackBubbles[i].isColliding(enemy)) {
        soundAttackBubbleHit.play();
        enemy.objectCollected(world.allAttackBubbles[i]);
        this.isItEndboss(enemy, i);
        this.isEnemyDead(enemy);
      }
    }
  }

  /**
   * Checks whether the attack hits the end boss.
   *
   * @param {Object} enemy - The enemy object that is being attacked.
   * @param {number} i - The index of the attack bubble in the list of all attack bubbles.
   */
  isItEndboss(enemy, i) {
    if (world.allAttackBubbles[i].poisonedBubble && enemy == world.endboss) {
      enemy.hp--;
      world.endboss.checkHp(enemy);
    } else if (
      !world.allAttackBubbles[i].poisonedBubble &&
      enemy == world.endboss
    ) {
      errorMsgEndboss();
    } else if (enemy != world.endboss) {
      enemy.hp--;
    }
    world.allAttackBubbles[i].intervalClearStatus = true;
  }

  /**
   * Checks whether the enemy is dead (i.e. has no more HP)
   *
   * @param {Object} enemy - The enemy object whose status is checked.
   */
  isEnemyDead(enemy) {
    if (enemy.hp == 0) {
      enemy.dead = true;
      setTimeout(() => {
        enemy.intervalClearStatus = true;
      }, 3000);
    }
  }

  /**
   * Checks whether the attack bubbles collide with barriers.
   *
   * @param {Object} barrier - The barrier with which the collision is checked.
   */
  isCollidingBarrier(barrier) {
    for (let i = 0; i < world.allAttackBubbles.length; i++) {
      if (world.allAttackBubbles[i].isColliding(barrier)) {
        soundAttackBubbleHit.play();
        barrier.objectCollected(world.allAttackBubbles[i]);
        world.allAttackBubbles[i].intervalClearStatus = true;
      }
    }
  }
}
