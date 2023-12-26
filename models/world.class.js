class World {
  character = new Character();
  enemies = [new PufferFish(), new PufferFish(), new PufferFish()];
  backgroundObjects = [
    new BackgroundObject("img/3. Background/Layers/5. Water/D1.png", 0),
    new BackgroundObject("img/3. Background/Layers/5. Water/D2.png", 720),
    new BackgroundObject("img/3. Background/Layers/4.Fondo 2/D1.png", 0),
    new BackgroundObject("img/3. Background/Layers/3.Fondo 1/D1.png", 0),
    new BackgroundObject("img/3. Background/Layers/2. Floor/D1.png", 0),
    new BackgroundObject("img/3. Background/Layers/1. Light/1.png", 0),
  ];
  ctx;
  canvas;
  keyboard;

  constructor(canvas, keyboard) {
    this.ctx = canvas.getContext("2d");
    this.canvas = canvas;
    this.keyboard = keyboard;
    this.draw();
    this.setWorld();
    this.backgroundObjects[0].animateBackground();
    this.backgroundObjects[1].animateBackground();
  }

  setWorld() {
    this.character.world = this;
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.addObjectsToMap(this.backgroundObjects);
    this.addToMap(this.character);
    this.addObjectsToMap(this.enemies);

    // Draw() wird immer weder aufgerufen
    let self = this;
    requestAnimationFrame(function () {
      self.draw();
    });
  }

  addObjectsToMap(objects) {
    objects.forEach((o) => {
      this.addToMap(o);
    });
  }

  addToMap(mo) {
    this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);
  }
}
