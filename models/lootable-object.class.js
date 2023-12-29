class LootableObject extends MovableObject {
  height = 30;
  width = 30;

  constructor(imagePath) {
    super().loadImage(imagePath);
    this.x = 600 + Math.random() * 1438;
    this.y = 20 + Math.random() * 400;
  }
}
