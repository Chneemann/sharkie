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

    this.backgroundObjects[0].animateBackground();
    this.backgroundObjects[1].animateBackground();
    this.backgroundObjects[2].animateBackground();
    this.backgroundObjects[3].animateBackground();
    this.backgroundObjects[4].animateBackground();
    this.backgroundObjects[5].animateBackground();
    this.backgroundObjects[6].animateBackground();
  }
}
