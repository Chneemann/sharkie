class Level {
  enemies;
  objects;
  backgroundObjects;
  level_end_x;

  constructor(enemies, objects, backgroundObjects, level_end_x) {
    this.enemies = enemies;
    this.objects = objects;
    this.backgroundObjects = backgroundObjects;
    this.level_end_x = level_end_x;

    this.backgroundObjects[0].animateBackground();
    this.backgroundObjects[1].animateBackground();
    this.backgroundObjects[2].animateBackground();
    this.backgroundObjects[3].animateBackground();
    this.backgroundObjects[4].animateBackground();
  }
}
