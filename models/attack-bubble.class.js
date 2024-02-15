class AttackBubble extends MovableObject {
  height = 40;
  width = 40;
  characterOffsetX = 0;
  characterOffsetY = 0;
  characterOffsetWidth = 0;
  characterOffsetHeight = 0;
  intervalClearStatus = false;

  IMAGE = [
    "img/1.Sharkie/4.Attack/Bubble trap/Poisoned Bubble (for whale).png",
  ];

  constructor(x, y, direction) {
    super().loadImage(
      "./img/1.Sharkie/4.Attack/Bubble trap/Poisoned Bubble (for whale).png"
    );
    this.loadImages(this.IMAGE);
    this.x = x + 210;
    this.y = y + 100;
    this.bubbleMoveTo = direction;
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
      this.playAnimation(this.IMAGE);
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
    if (keyboard.SPACE && world.statusBarPoisonBottle.percentage >= 1) {
      if (keyboard.lastInput == "right") {
        direction = "right";
        characterX = world.character.x;
      } else if (keyboard.lastInput == "left") {
        direction = "left";
        characterX = world.character.x - world.character.width;
      }
      let poisonAttackBubble = new AttackBubble(
        characterX,
        world.character.y,
        direction
      );
      soundAttackBubble.play();
      world.allAttackBubbles.push(poisonAttackBubble);
      world.statusBarPoisonBottle.removePoisonBottle();
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
        enemy.hp--;
        world.endboss.checkHp(enemy);
        enemy.objectCollected(world.allAttackBubbles[i]);
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
