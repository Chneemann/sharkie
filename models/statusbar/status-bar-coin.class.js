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
   * Adds a coin.
   */
  addCoin() {
    this.percentage++;
    let path = this.IMAGES_COIN[this.resolveImageIndex()];
    this.img = this.imageCache[path];
  }
}
