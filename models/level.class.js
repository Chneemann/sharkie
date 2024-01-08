class Level {
  enemies;
  objects;
  backgroundObjects;
  level_end_x = 719 * 3;

  constructor(enemies, objects, backgroundObjects) {
    this.enemies = enemies;
    this.objects = objects;
    this.backgroundObjects = backgroundObjects;

    this.backgroundObjects[0].animateBackground();
    this.backgroundObjects[1].animateBackground();
    this.backgroundObjects[2].animateBackground();
    this.backgroundObjects[3].animateBackground();
    this.backgroundObjects[4].animateBackground();
  }
}
