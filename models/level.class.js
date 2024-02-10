class Level {
  enemies;
  endboss;
  objects;
  backgroundObjects;
  barrier;
  level_end;

  constructor(
    enemies,
    endboss,
    objects,
    backgroundObjects,
    barrier,
    level_end
  ) {
    this.enemies = enemies;
    this.endboss = endboss;
    this.objects = objects;
    this.backgroundObjects = backgroundObjects;
    this.barrier = barrier;
    this.level_end = level_end;

    this.backgroundObjects[0].animateBackground();
    this.backgroundObjects[1].animateBackground();
    this.backgroundObjects[2].animateBackground();
    this.backgroundObjects[3].animateBackground();
    this.backgroundObjects[4].animateBackground();
    this.backgroundObjects[5].animateBackground();
  }
}
