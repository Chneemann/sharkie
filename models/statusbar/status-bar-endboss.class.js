class StatusBarEndboss extends DrawableObject {
  IMAGES_HP = [
    "img/4. Marcadores/orange/0_  copia.png",
    "img/4. Marcadores/orange/20_ copia 2.png",
    "img/4. Marcadores/orange/60_  copia.png",
    "img/4. Marcadores/orange/100_  copia.png",
  ];

  x = 650;
  y = 25;
  width = 220;
  height = 60;
  percentage = 3;

  constructor() {
    super();
    this.loadImages(this.IMAGES_HP);
    this.setPercentage(this.percentage);
  }

  /**
   * Updates the image based on the new percentage.
   * @param {number} percentage - The new percentage to be set
   */
  setPercentage(percentage) {
    this.percentage = percentage;
    let path = this.IMAGES_HP[this.resolveImageIndex()];
    this.img = this.imageCache[path];
  }

  /**
   * Determines the index of the image based on the current percentage.
   * @returns The image index that corresponds to the current percentage.
   */
  resolveImageIndex() {
    if (this.percentage == 3) {
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