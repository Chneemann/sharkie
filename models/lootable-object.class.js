class LootableObject extends MovableObject {
  height = 30;
  width = 30;

  constructor(imagePath, x, y) {
    super().loadImage(imagePath);
    this.x = x;
    this.y = y;
  }
}
