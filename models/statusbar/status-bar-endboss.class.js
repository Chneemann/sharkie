class StatusBarEndboss extends DrawableObject {
  IMAGES_HP = [
    "img/4. Marcadores/orange/0_  copia.png",
    "img/4. Marcadores/orange/20_ copia 2.png",
    "img/4. Marcadores/orange/40_  copia.png",
    "img/4. Marcadores/orange/60_  copia.png",
    "img/4. Marcadores/orange/80_  copia.png",
    "img/4. Marcadores/orange/100_  copia.png",
  ];

  x = 650;
  y = 25;
  width = 220;
  height = 60;
  percentage = 5;

  constructor() {
    super();
    this.loadImages(this.IMAGES_HP);
    this.setPercentage(this.percentage);
  }

  /**
   * Updates the image based on the new percentage.
   * @param {number} percentage - The new percentage to be set.
   */
  setPercentage(percentage) {
    this.percentage = percentage;
    let path = this.IMAGES_HP[this.resolveImageIndex()];
    this.img = this.imageCache[path];
  }
}
