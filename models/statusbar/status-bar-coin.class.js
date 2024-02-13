class StatusBarCoin extends DrawableObject {
  IMAGES_COIN = [
    "img/4. Marcadores/orange/0_  copia 2.png",
    "img/4. Marcadores/orange/20_  copia.png",
    "img/4. Marcadores/orange/40_  copia 2.png",
    "img/4. Marcadores/orange/60_  copia 2.png",
    "img/4. Marcadores/orange/80_  copia 2.png",
    "img/4. Marcadores/orange/100_ copia 2.png",
  ];

  x = 20;
  y = 50;
  width = 220;
  height = 60;
  percentage = -1;

  constructor() {
    super();
    this.loadImages(this.IMAGES_COIN);
    this.addCoin(this.percentage);
  }

  /**
   * Adds a coin
   */
  addCoin() {
    this.percentage++;
    let path = this.IMAGES_COIN[this.resolveImageIndex()];
    this.img = this.imageCache[path];
  }

  /**
   * Determines the index of the image based on the current percentage.
   * @returns The image index that corresponds to the current percentage.
   */
  resolveImageIndex() {
    if (this.percentage == 10) {
      return 5;
    } else if (this.percentage >= 8) {
      return 4;
    } else if (this.percentage >= 6) {
      return 3;
    } else if (this.percentage >= 4) {
      return 2;
    } else if (this.percentage >= 2) {
      return 1;
    } else {
      return 0;
    }
  }
}
