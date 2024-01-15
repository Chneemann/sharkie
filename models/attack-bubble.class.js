class AttackBubble extends MovableObject {
  height = 40;
  width = 40;
  characterOffsetX = 0;
  characterOffsetY = 0;
  characterOffsetWidth = 0;
  characterOffsetHeight = 0;
  character;

  IMAGE = [
    "img/1.Sharkie/4.Attack/Bubble trap/Poisoned Bubble (for whale).png",
  ];

  constructor(x, y) {
    super().loadImage(
      "./img/1.Sharkie/4.Attack/Bubble trap/Poisoned Bubble (for whale).png"
    );
    this.loadImages(this.IMAGE);
    this.x = x + 180;
    this.y = y + 100;
    this.animate();
  }

  animate() {
    this.moveRight();

    setInterval(() => {
      this.playAnimation(this.IMAGE);
    }, 150);
  }
}
