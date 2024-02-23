class StatusBarPoisonBottle extends DrawableObject {
  IMAGES_POISON_BOTTLES = [
    "img/4. Marcadores/orange/0_ copia.png",
    "img/4. Marcadores/orange/20_ copia.png",
    "img/4. Marcadores/orange/40_ copia.png",
    "img/4. Marcadores/orange/60_ copia.png",
    "img/4. Marcadores/orange/80_ copia.png",
    "img/4. Marcadores/orange/100_ copia.png",
  ];

  x = 20;
  y = 100;
  width = 220;
  height = 60;
  percentage = -1;

  constructor() {
    super();
    this.loadImages(this.IMAGES_POISON_BOTTLES);
    this.addPoisonBottle(this.percentage);
  }

  /**
   * Adds a poison bottle.
   */
  addPoisonBottle() {
    this.percentage++;
    let new_percentage = this.percentage * 20;
    let path =
      this.IMAGES_POISON_BOTTLES[this.resolveImageIndex(new_percentage)];
    this.img = this.imageCache[path];
  }

  /**
   * Removes a poison bottle.
   */
  removePoisonBottle() {
    this.percentage--;
    let new_percentage = this.percentage * 20;
    let path =
      this.IMAGES_POISON_BOTTLES[this.resolveImageIndex(new_percentage)];
    this.img = this.imageCache[path];
  }
}
