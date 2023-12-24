class PufferFish extends MovableObject {
  constructor() {
    super().loadImage(
      "./img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim1.png"
    );
    this.x = 600;
    this.y = 20 + Math.random() * 400;
    this.height = 50;
    this.width = 60;
    this.moveLeft();
  }

  moveLeft() {
    const speed = 1;
    const interval = 50;

    const move = () => {
      this.x -= speed;
    };

    const movementInterval = setInterval(move, interval);
  }
}
