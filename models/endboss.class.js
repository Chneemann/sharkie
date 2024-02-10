class Endboss extends MovableObject {
  hp = 3;
  height = 480;
  width = 500;
  idle = false;
  enemyOffsetX = 30;
  enemyOffsetY = 220;
  enemyOffsetWidth = 60;
  enemyOffsetHeight = 300;

  sound_spawn = new Audio("./audio/endboss_spawn.mp3");

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

  IMAGES_ATTACK = [
    "img/2.Enemy/3 Final Enemy/Attack/1.png",
    "img/2.Enemy/3 Final Enemy/Attack/2.png",
    "img/2.Enemy/3 Final Enemy/Attack/3.png",
    "img/2.Enemy/3 Final Enemy/Attack/4.png",
    "img/2.Enemy/3 Final Enemy/Attack/5.png",
    "img/2.Enemy/3 Final Enemy/Attack/6.png",
  ];

  constructor() {
    super().loadImage("");
    this.x = 2700;
    this.y = 0;
    this.spawnEndboss();

    this.sound_spawn.volume = 0.3;

    document.addEventListener("toggleMute", (e) => {
      this.sound_spawn.muted = e.detail;
    });
  }

  spawnEndboss() {
    const intervalId = setInterval(() => {
      if (world.character.x >= world.level.level_end - 899) {
        this.loadImages(this.IMAGES_SPAWN);
        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_ATTACK);
        this.animate();
        this.attackCharacter();
        this.sound_spawn.play();
        clearInterval(intervalId);
      }
    }, 1000);
  }

  attackCharacter() {
    setInterval(() => {
      if (this.idle) {
        if (
          world.character.x >
          this.x + (this.width - this.enemyOffsetWidth) / 2
        ) {
          this.x += this.speed;
          this.otherDirection = true;
        } else {
          this.x -= this.speed;
          this.otherDirection = false;
        }
        if (
          world.character.y >
          this.y + (this.height - this.enemyOffsetHeight)
        ) {
          this.y += this.speed;
        } else {
          this.y -= this.speed;
        }
      }
    }, 1);
  }

  animate() {
    let attackTimer = 0;
    let attackInterval = 3000;
    let lastAttack = Date.now();

    setInterval(() => {
      if (!this.isAlive()) {
        this.playAnimation(this.IMAGES_DEAD);
        this.moveUp();
      } else if (this.isHurt("lastHitEndboss")) {
        this.playAnimation(this.IMAGES_HURT);
      } else if (this.isAlive()) {
        attackTimer = Date.now() - lastAttack;
        let i = this.currentImage % this.IMAGES_IDLE.length;
        if (attackTimer > attackInterval) {
          let attackImageIndex = this.currentImage % this.IMAGES_ATTACK.length;
          let pathAttack = this.IMAGES_ATTACK[attackImageIndex];
          this.img = this.imageCache[pathAttack];
          this.currentImage++;
          if (attackImageIndex === this.IMAGES_ATTACK.length - 1) {
            lastAttack = Date.now();
            this.idle = true;
          }
        } else if (this.idle) {
          let pathIdle = this.IMAGES_IDLE[i];
          this.img = this.imageCache[pathIdle];
          this.currentImage++;
        } else {
          if (i >= this.IMAGES_SPAWN.length) {
            this.idle = true;
          } else {
            let pathSpawn = this.IMAGES_SPAWN[i];
            this.img = this.imageCache[pathSpawn];
            this.currentImage++;
          }
        }
      }
    }, 150);
  }
}
