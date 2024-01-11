class StatusBarPoisonBottles extends DrawableObject {
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
    this.setPercentage(this.percentageHp);
  }

  setPercentage() {
    this.percentage++;
    let path = this.IMAGES_POISON_BOTTLES[this.resolveImageIndex()];
    this.img = this.imageCache[path];
  }

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
