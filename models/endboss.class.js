class Endboss extends MovableObject {
  hp = 3;
  height = 480;
  width = 500;
  enemyOffsetX = 30;
  enemyOffsetY = 220;
  enemyOffsetWidth = 60;
  enemyOffsetHeight = 300;
  dead = false;

  IMAGES_SPAWN = [
    "./img/2.Enemy/3 Final Enemy/1.Introduce/1.png",
    "./img/2.Enemy/3 Final Enemy/1.Introduce/2.png",
    "./img/2.Enemy/3 Final Enemy/1.Introduce/3.png",
    "./img/2.Enemy/3 Final Enemy/1.Introduce/4.png",
    "./img/2.Enemy/3 Final Enemy/1.Introduce/5.png",
    "./img/2.Enemy/3 Final Enemy/1.Introduce/6.png",
    "./img/2.Enemy/3 Final Enemy/1.Introduce/7.png",
    "./img/2.Enemy/3 Final Enemy/1.Introduce/8.png",
    "./img/2.Enemy/3 Final Enemy/1.Introduce/9.png",
    "./img/2.Enemy/3 Final Enemy/1.Introduce/10.png",
  ];

  IMAGES_IDLE = [
    "./img/2.Enemy/3 Final Enemy/2.floating/1.png",
    "./img/2.Enemy/3 Final Enemy/2.floating/2.png",
    "./img/2.Enemy/3 Final Enemy/2.floating/3.png",
    "./img/2.Enemy/3 Final Enemy/2.floating/4.png",
    "./img/2.Enemy/3 Final Enemy/2.floating/5.png",
    "./img/2.Enemy/3 Final Enemy/2.floating/6.png",
    "./img/2.Enemy/3 Final Enemy/2.floating/7.png",
    "./img/2.Enemy/3 Final Enemy/2.floating/8.png",
    "./img/2.Enemy/3 Final Enemy/2.floating/9.png",
    "./img/2.Enemy/3 Final Enemy/2.floating/10.png",
    "./img/2.Enemy/3 Final Enemy/2.floating/11.png",
    "./img/2.Enemy/3 Final Enemy/2.floating/12.png",
    "./img/2.Enemy/3 Final Enemy/2.floating/13.png",
  ];

  IMAGES_HURT = [
    "img/2.Enemy/3 Final Enemy/Hurt/1.png",
    "img/2.Enemy/3 Final Enemy/Hurt/2.png",
    "img/2.Enemy/3 Final Enemy/Hurt/3.png",
    "img/2.Enemy/3 Final Enemy/Hurt/4.png",
  ];

  IMAGES_DEAD = [
    "img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 6.png",
    "img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 7.png",
    "img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 8.png",
    "img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 9.png",
    "img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 10.png",
  ];

  constructor() {
    super().loadImage("");
    this.x = 2100;
    this.y = 0;
    this.spawnEndboss();
  }

  spawnEndboss() {
    const intervalId = setInterval(() => {
      if (world.character.x >= world.level.level_end - 700) {
        this.loadImages(this.IMAGES_SPAWN);
        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_HURT);
        this.animate();
        clearInterval(intervalId);
      }
    }, 1000);
  }

  animate() {
    let idle = false;
    setInterval(() => {
      console.log(this.isHurt("lastHitEndboss"));
      if (!this.isAlive()) {
        this.playAnimation(this.IMAGES_DEAD);
        this.moveUp();
      } else if (this.isHurt("lastHitEndboss")) {
        this.playAnimation(this.IMAGES_HURT);
      } else if (this.isAlive()) {
        let i = this.currentImage % this.IMAGES_IDLE.length;
        if (idle) {
          let pathIdle = this.IMAGES_IDLE[i];
          this.img = this.imageCache[pathIdle];
        } else {
          if (i >= this.IMAGES_SPAWN.length) {
            idle = true;
          } else {
            let pathSpawn = this.IMAGES_SPAWN[i];
            this.img = this.imageCache[pathSpawn];
          }
        }
        this.currentImage++;
      }
    }, 150);
  }
}
