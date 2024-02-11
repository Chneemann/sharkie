class AttackBubble extends MovableObject {
  height = 40;
  width = 40;
  characterOffsetX = 0;
  characterOffsetY = 0;
  characterOffsetWidth = 0;
  characterOffsetHeight = 0;
  intervalClearStatus = false;

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
    this.sound.volume = 0.3;
    this.sound_impact.volume = 0.3;
    this.animate();

    this.sound.muted = world.soundManager.isMuted();
    this.sound_impact.muted = world.soundManager.isMuted();

    document.addEventListener("toggleMute", (e) => {
      this.sound.muted = e.detail;
      this.sound_impact.muted = e.detail;
    });
  }

  animate() {
    this.attackbubble();

    const intervalId = setInterval(() => {
      this.playAnimation(this.IMAGE);
      stopInterval(this.intervalClearStatus, intervalId);
    }, 150);
  }

  attackbubble() {
    const intervalId = setInterval(() => {
      this.x += 1.75;
      console.log("2");
      stopInterval(this.intervalClearStatus, intervalId);
    }, 1);
  }
}
