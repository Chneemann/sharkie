class UiObject extends MovableObject {
  x = 50;
  y = 0;
  height = 50;
  width = 220;
  constructor() {
    super().life();
    this.coin();
    this.poison();
  }

  life() {
    this.x = 50;
    this.y = 0;
    this.loadImage("./img/4. Marcadores/orange/100_  copia.png");
  }
  coin() {
    this.x = 50;
    this.y = 50;
    this.loadImage("./img/4. Marcadores/orange/0_  copia 2.png");
  }
  poison() {
    this.x = 50;
    this.y = 100;
    this.loadImage("./img/4. Marcadores/orange/0_ copia.png");
  }
}
