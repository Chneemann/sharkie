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
  percentage = 0;

  constructor() {
    super();
    this.loadImages(this.IMAGES_COIN);
    this.setPercentage(this.percentage);
  }

  setPercentage(percentage) {
    this.percentage = percentage;
    let path = this.IMAGES_COIN[this.resolveImageIndex()];
    this.img = this.imageCache[path];
  }

  resolveImageIndex() {
    if (this.percentage == 100) {
      return 5;
    } else if (this.percentage >= 80) {
      return 4;
    } else if (this.percentage >= 60) {
      return 3;
    } else if (this.percentage >= 40) {
      return 2;
    } else if (this.percentage >= 20) {
      return 1;
    } else {
      return 0;
    }
  }
}
