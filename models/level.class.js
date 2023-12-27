class Level {
  enemies;
  endboss;
  backgroundObjects;
  level_end_x = 715 * 3;

  constructor(enemies, endboss, backgroundObjects) {
    this.enemies = enemies;
    this.endboss = endboss;
    this.backgroundObjects = backgroundObjects;

    this.backgroundObjects[0].animateBackground();
    this.backgroundObjects[1].animateBackground();
    this.backgroundObjects[2].animateBackground();
    this.backgroundObjects[3].animateBackground();
    this.backgroundObjects[4].animateBackground();
  }
}
