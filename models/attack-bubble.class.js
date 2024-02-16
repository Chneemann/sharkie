class AttackBubble extends MovableObject {
  height = 40;
  width = 40;
  characterOffsetX = 0;
  characterOffsetY = 0;
  characterOffsetWidth = 0;
  characterOffsetHeight = 0;
  intervalClearStatus = false;

  IMAGE_NORMAL = ["img/1.Sharkie/4.Attack/Bubble trap/Bubble.png"];

  IMAGE_POISONED = [
    "img/1.Sharkie/4.Attack/Bubble trap/Poisoned Bubble (for whale).png",
  ];

  constructor(x, y, direction, poisonedBubble) {
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
    this.animate();
  }

  /**
   * Controls the animations
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
   * Move to the right
   */
  attackbubbleright() {
    const intervalId = setInterval(() => {
      this.x += 1.75;
      stopInterval(this.intervalClearStatus, intervalId);
    }, 1);
  }

  /**
   * Move to the left
   */
  attackbubbleleft() {
    const intervalId = setInterval(() => {
      this.x -= 1.75;
      stopInterval(this.intervalClearStatus, intervalId);
    }, 1);
  }

  /**
   * Controls the spawning of a new attack bubble.
   */
  checkSpawn() {
    let direction;
    let characterX;
    let poisonedBubble;
    if (keyboard.SPACE) {
      if (keyboard.lastInput == "right") {
        direction = "right";
        characterX = world.character.x;
      } else if (keyboard.lastInput == "left") {
        direction = "left";
        characterX = world.character.x - world.character.width;
      }
      if (world.statusBarPoisonBottle.percentage >= 1) {
        poisonedBubble = true;
      }

      let poisonAttackBubble = new AttackBubble(
        characterX,
        world.character.y,
        direction,
        poisonedBubble
      );
      soundAttackBubble.play();
      world.allAttackBubbles.push(poisonAttackBubble);
      if (world.statusBarPoisonBottle.percentage >= 1) {
        world.statusBarPoisonBottle.removePoisonBottle();
      }
      keyboard.SPACE = false;
    }
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
        if (
          world.allAttackBubbles[i].poisonedBubble &&
          enemy == world.endboss
        ) {
          enemy.hp--;
          world.endboss.checkHp(enemy);
        } else if (enemy != world.endboss) {
          enemy.hp--;
        }
        world.allAttackBubbles[i].intervalClearStatus = true;
        if (enemy.hp == 0) {
          enemy.dead = true;
        }
      }
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
