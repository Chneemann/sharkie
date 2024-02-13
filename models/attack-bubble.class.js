class AttackBubble extends MovableObject {
  height = 40;
  width = 40;
  characterOffsetX = 0;
  characterOffsetY = 0;
  characterOffsetWidth = 0;
  characterOffsetHeight = 0;
  intervalClearStatus = false;

  IMAGE = [
    "img/1.Sharkie/4.Attack/Bubble trap/Poisoned Bubble (for whale).png",
  ];

  constructor(x, y, direction) {
    super().loadImage(
      "./img/1.Sharkie/4.Attack/Bubble trap/Poisoned Bubble (for whale).png"
    );
    this.loadImages(this.IMAGE);
    this.x = x + 210;
    this.y = y + 100;
    this.bubbleMoveTo = direction;
    this.animate();
  }

  animate() {
    if (this.bubbleMoveTo == "right") {
      this.attackbubbleright();
    } else if (this.bubbleMoveTo == "left") {
      this.attackbubbleleft();
    }
    const intervalId = setInterval(() => {
      this.playAnimation(this.IMAGE);
      stopInterval(this.intervalClearStatus, intervalId);
    }, 150);
  }

  attackbubbleright() {
    const intervalId = setInterval(() => {
      this.x += 1.75;
      stopInterval(this.intervalClearStatus, intervalId);
    }, 1);
  }

  attackbubbleleft() {
    const intervalId = setInterval(() => {
      this.x -= 1.75;
      stopInterval(this.intervalClearStatus, intervalId);
    }, 1);
  }
}
