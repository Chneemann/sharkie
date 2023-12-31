class UiObject extends MovableObject {
  x = 50;
  height = 60;
  width = 220;

  constructor(img, y) {
    super().y = y;
    this.loadImage(img);
  }
}
