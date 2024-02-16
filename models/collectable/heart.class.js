class Heart extends MovableObject {
  width = 40;
  height = 40;
  enemyOffsetX = 0;
  enemyOffsetY = 0;
  enemyOffsetWidth = 0;
  enemyOffsetHeight = 0;

  constructor(x, y) {
    super().loadImage("./img/4. Marcadores/green/100_  copia 3.png");
    this.x = x;
    this.y = y;
  }
}
