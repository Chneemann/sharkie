class AttackBubble extends MovableObject {
  height = 200;
  width = 250;
  characterOffsetX = 45;
  characterOffsetY = 95;
  characterOffsetWidth = 90;
  characterOffsetHeight = 140;

  IMAGE = [
    "img/1.Sharkie/4.Attack/Bubble trap/Poisoned Bubble (for whale).png",
  ];

  constructor() {
    super().loadImage(
      "./img/1.Sharkie/4.Attack/Bubble trap/Poisoned Bubble (for whale).png"
    );
    this.loadImages(this.IMAGE);
    this.animate();
  }

  animate() {
    this.moveRight();

    setInterval(() => {
      this.playAnimation(this.IMAGE);
    }, 150);
  }
}
