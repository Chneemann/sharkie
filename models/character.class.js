class Character extends MovableObject {
  height = 200;
  width = 250;

  constructor() {
    super().loadImage("./img/1.Sharkie/1.IDLE/1.png");
    this.registerEventListeners();
  }

  registerEventListeners() {
    document.addEventListener("keydown", (event) => {
      if (event.keyCode === 39) {
        this.moveRight();
      }
      if (event.keyCode === 37) {
        this.moveLeft();
      }
      if (event.keyCode === 38) {
        this.moveUp();
      }
      if (event.keyCode === 40) {
        this.moveDown();
      }
    });
  }

  moveRight() {
    this.x += 20;
  }

  moveLeft() {
    this.x -= 20;
  }

  moveUp() {
    this.y -= 20;
  }

  moveDown() {
    this.y += 20;
  }
}
