class AttackBubble extends MovableObject {
  height = 40;
  width = 40;
  characterOffsetX = 0;
  characterOffsetY = 0;
  characterOffsetWidth = 0;
  characterOffsetHeight = 0;

  sound = new Audio("./audio/attack_bubble.mp3");
  sound_impact = new Audio("./audio/impact.mp3");

  IMAGE = [
    "img/1.Sharkie/4.Attack/Bubble trap/Poisoned Bubble (for whale).png",
  ];

  constructor(x, y) {
    super().loadImage(
      "./img/1.Sharkie/4.Attack/Bubble trap/Poisoned Bubble (for whale).png"
    );
    this.loadImages(this.IMAGE);
    this.x = x + 210;
    this.y = y + 100;
    this.animate();
  }

  animate() {
    this.attackbubble();

    setInterval(() => {
      this.playAnimation(this.IMAGE);
    }, 150);
  }
}
