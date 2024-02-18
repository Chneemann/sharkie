class Level {
  enemies;
  endboss;
  objects;
  backgroundObjects;
  barrier;
  levelEnd_up;
  levelEnd_down;
  levelEnd_left;
  levelEnd_right;

  constructor(
    enemies,
    endboss,
    objects,
    backgroundObjects,
    barrier,
    levelSize
  ) {
    this.enemies = enemies;
    this.endboss = endboss;
    this.objects = objects;
    this.backgroundObjects = backgroundObjects;
    this.barrier = barrier;
    this.levelEnd_up = levelSize[0];
    this.levelEnd_down = levelSize[1];
    this.levelEnd_left = levelSize[2];
    this.levelEnd_right = levelSize[3];
    this.animateBackground();
  }

  /**
   * Background images that are to be animated
   */
  animateBackground() {
    for (let i = 0; i <= 6; i++) {
      this.backgroundObjects[i].animateBackground(0.2, 500, "right");
    }
    for (let i = 25; i <= 30; i++) {
      this.backgroundObjects[i].animateBackground(0.1, 50, "left");
    }
  }

  /**
   * Checks whether the character has reached the end of the level
   *
   * @param {string} end - The direction to be checked
   * @returns {boolean} true or false
   */
  isWorldEnd(end) {
    const check = {
      right: () => world.character.x <= this.levelEnd_right,
      left: () => world.character.x >= this.levelEnd_left,
      up: () => world.character.y >= this.levelEnd_up,
      down: () => world.character.y <= this.levelEnd_down,
    };
    return check[end] ? check[end]() : undefined;
  }
}
