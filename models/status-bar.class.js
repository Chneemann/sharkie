class StatusBar extends DrawableObject {
  IMAGES_HP = [
    "img/4. Marcadores/orange/0_  copia.png",
    "img/4. Marcadores/orange/20_ copia 2.png",
    "img/4. Marcadores/orange/40_  copia.png",
    "img/4. Marcadores/orange/60_  copia.png",
    "img/4. Marcadores/orange/80_  copia.png",
    "img/4. Marcadores/orange/100_  copia.png",
  ];
  IMAGES_COIN = [
    "img/4. Marcadores/orange/0_  copia 2.png",
    "img/4. Marcadores/orange/20_  copia.png",
    "img/4. Marcadores/orange/40_  copia 2.png",
    "img/4. Marcadores/orange/60_  copia 2.png",
    "img/4. Marcadores/orange/80_  copia 2.png",
    "img/4. Marcadores/orange/100_ copia 2.png",
  ];

  percentageHp = 100;

  constructor() {
    super();
    this.loadImages(this.IMAGES_HP);
    this.loadImages(this.IMAGES_COIN);
    this.x = 20;
    this.y = 0;
    this.width = 220;
    this.height = 60;
    this.setPercentage(this.percentageHp);
  }

  setPercentage(percentageHp) {
    this.percentageHp = percentageHp;
    let path = this.IMAGES_HP[this.resolveImageIndex()];
    this.img = this.imageCache[path];
  }

  resolveImageIndex() {
    if (this.percentageHp == 100) {
      return 5;
    } else if (this.percentageHp >= 80) {
      return 4;
    } else if (this.percentageHp >= 60) {
      return 3;
    } else if (this.percentageHp >= 40) {
      return 2;
    } else if (this.percentageHp >= 20) {
      return 1;
    } else {
      return 0;
    }
  }
}
