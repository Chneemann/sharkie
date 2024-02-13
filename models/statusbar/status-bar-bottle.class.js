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
   * Adds a poison bottle
   */
  addPoisonBottle() {
    this.percentage++;
    let path = this.IMAGES_POISON_BOTTLES[this.resolveImageIndex()];
    this.img = this.imageCache[path];
  }

  /**
   * Removes a poison bottle
   */
  removePoisonBottle() {
    this.percentage--;
    let path = this.IMAGES_POISON_BOTTLES[this.resolveImageIndex()];
    this.img = this.imageCache[path];
  }

  /**
   * Determines the index of the image based on the current percentage.
   * @returns The image index that corresponds to the current percentage.
   */
  resolveImageIndex() {
    if (this.percentage == 5) {
      return 5;
    } else if (this.percentage == 4) {
      return 4;
    } else if (this.percentage == 3) {
      return 3;
    } else if (this.percentage == 2) {
      return 2;
    } else if (this.percentage == 1) {
      return 1;
    } else {
      return 0;
    }
  }
}
