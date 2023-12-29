class Level {
  enemies;
  backgroundObjects;
  level_end_x = 719 * 3;

  constructor(enemies, backgroundObjects) {
    this.enemies = enemies;
    this.backgroundObjects = backgroundObjects;

    this.backgroundObjects[0].animateBackground();
    this.backgroundObjects[1].animateBackground();
    this.backgroundObjects[2].animateBackground();
    this.backgroundObjects[3].animateBackground();
    this.backgroundObjects[4].animateBackground();
  }
}
