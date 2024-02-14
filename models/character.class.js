class Character extends MovableObject {
  height = 200;
  width = 250;
  characterOffsetX = 45;
  characterOffsetY = 95;
  characterOffsetWidth = 90;
  characterOffsetHeight = 140;

  IMAGES_IDLE = [
    "img/1.Sharkie/1.IDLE/1.png",
    "img/1.Sharkie/1.IDLE/2.png",
    "img/1.Sharkie/1.IDLE/3.png",
    "img/1.Sharkie/1.IDLE/4.png",
    "img/1.Sharkie/1.IDLE/5.png",
    "img/1.Sharkie/1.IDLE/6.png",
    "img/1.Sharkie/1.IDLE/7.png",
    "img/1.Sharkie/1.IDLE/8.png",
    "img/1.Sharkie/1.IDLE/9.png",
    "img/1.Sharkie/1.IDLE/10.png",
    "img/1.Sharkie/1.IDLE/11.png",
    "img/1.Sharkie/1.IDLE/12.png",
    "img/1.Sharkie/1.IDLE/13.png",
    "img/1.Sharkie/1.IDLE/14.png",
    "img/1.Sharkie/1.IDLE/15.png",
    "img/1.Sharkie/1.IDLE/16.png",
    "img/1.Sharkie/1.IDLE/17.png",
    "img/1.Sharkie/1.IDLE/18.png",
  ];
  IMAGES_MOVE = [
    "img/1.Sharkie/3.Swim/1.png",
    "img/1.Sharkie/3.Swim/2.png",
    "img/1.Sharkie/3.Swim/3.png",
    "img/1.Sharkie/3.Swim/4.png",
    "img/1.Sharkie/3.Swim/5.png",
    "img/1.Sharkie/3.Swim/6.png",
  ];
  IMAGES_ATTACK = [
    "img/1.Sharkie/4.Attack/Bubble trap/For Whale/1.png",
    "img/1.Sharkie/4.Attack/Bubble trap/For Whale/2.png",
    "img/1.Sharkie/4.Attack/Bubble trap/For Whale/3.png",
    "img/1.Sharkie/4.Attack/Bubble trap/For Whale/4.png",
    "img/1.Sharkie/4.Attack/Bubble trap/For Whale/5.png",
    "img/1.Sharkie/4.Attack/Bubble trap/For Whale/6.png",
    "img/1.Sharkie/4.Attack/Bubble trap/For Whale/7.png",
    "img/1.Sharkie/4.Attack/Bubble trap/For Whale/8.png",
  ];
  IMAGES_HURT_MEELE = [
    "img/1.Sharkie/5.Hurt/1.Poisoned/1.png",
    "img/1.Sharkie/5.Hurt/1.Poisoned/2.png",
    "img/1.Sharkie/5.Hurt/1.Poisoned/3.png",
    "img/1.Sharkie/5.Hurt/1.Poisoned/4.png",
  ];
  IMAGES_HURT_ELECTRIC_SHOCK = [
    "img/1.Sharkie/5.Hurt/2.Electric shock/1.png",
    "img/1.Sharkie/5.Hurt/2.Electric shock/2.png",
    "img/1.Sharkie/5.Hurt/2.Electric shock/3.png",
  ];
  IMAGES_DEAD_MEELE = [
    "img/1.Sharkie/6.dead/1.Poisoned/1.png",
    "img/1.Sharkie/6.dead/1.Poisoned/2.png",
    "img/1.Sharkie/6.dead/1.Poisoned/3.png",
    "img/1.Sharkie/6.dead/1.Poisoned/4.png",
    "img/1.Sharkie/6.dead/1.Poisoned/5.png",
    "img/1.Sharkie/6.dead/1.Poisoned/6.png",
    "img/1.Sharkie/6.dead/1.Poisoned/7.png",
    "img/1.Sharkie/6.dead/1.Poisoned/8.png",
    "img/1.Sharkie/6.dead/1.Poisoned/9.png",
    "img/1.Sharkie/6.dead/1.Poisoned/10.png",
    "img/1.Sharkie/6.dead/1.Poisoned/11.png",
    "img/1.Sharkie/6.dead/1.Poisoned/12.png",
  ];
  IMAGES_DEAD_ELECTRIC_SHOCK = [
    "img/1.Sharkie/6.dead/2.Electro_shock/1.png",
    "img/1.Sharkie/6.dead/2.Electro_shock/2.png",
    "img/1.Sharkie/6.dead/2.Electro_shock/3.png",
    "img/1.Sharkie/6.dead/2.Electro_shock/4.png",
    "img/1.Sharkie/6.dead/2.Electro_shock/5.png",
    "img/1.Sharkie/6.dead/2.Electro_shock/6.png",
    "img/1.Sharkie/6.dead/2.Electro_shock/7.png",
    "img/1.Sharkie/6.dead/2.Electro_shock/8.png",
    "img/1.Sharkie/6.dead/2.Electro_shock/9.png",
    "img/1.Sharkie/6.dead/2.Electro_shock/10.png",
  ];

  constructor() {
    super().loadImage("./img/1.Sharkie/1.IDLE/1.png");
    this.loadImages(this.IMAGES_IDLE);
    this.loadImages(this.IMAGES_MOVE);
    this.loadImages(this.IMAGES_ATTACK);
    this.loadImages(this.IMAGES_HURT_MEELE);
    this.loadImages(this.IMAGES_HURT_ELECTRIC_SHOCK);
    this.loadImages(this.IMAGES_DEAD_MEELE);
    this.loadImages(this.IMAGES_DEAD_ELECTRIC_SHOCK);
    this.animate();
    this.moveCharacter();
  }

  /**
   * Adjusts the camera position smoothly based on the current character position and direction
   */
  adjustCameraPosition() {
    const cameraX = this.otherDirection ? -this.x + 500 : -this.x + 200;
    const smoothness = 0.05;

    this.world.camera_x = (function lerp(start, end, t) {
      return start * (1 - t) + end * t;
    })(this.world.camera_x, cameraX, smoothness);
  }

  /**
   * Controls the character's animations
   */
  animate() {
    setInterval(() => {
      if (this.isDead() && this.lastHitMeele < this.lastHitElectricShock) {
        this.playAnimation(this.IMAGES_DEAD_ELECTRIC_SHOCK);
      } else if (this.isDead()) {
        this.playAnimation(this.IMAGES_DEAD_MEELE);
      } else if (this.isHurt("lastHitMeele")) {
        this.playAnimation(this.IMAGES_HURT_MEELE);
      } else if (this.isHurt("lastHitElectricShock")) {
        this.playAnimation(this.IMAGES_HURT_ELECTRIC_SHOCK);
      } else if (
        this.lastAnimation(0.85) &&
        this.world.statusBarPoisonBottle.percentage >= 1
      ) {
        this.playAnimation(this.IMAGES_ATTACK);
      } else if (this.world.keyboard.MOVE) {
        this.playAnimation(this.IMAGES_MOVE);
      } else if (!this.world.keyboard.MOVE) {
        this.playAnimation(this.IMAGES_IDLE);
      }
    }, 150);
  }

  /**
   * Controls the character key inputs
   */
  moveCharacter() {
    setInterval(() => {
      if (
        this.world.keyboard.RIGHT &&
        this.x <= this.world.level.levelEnd_right &&
        !this.isDead()
      ) {
        this.x += 3;
        this.otherDirection = false;
        soundCharacterMove.play();
      }
      if (
        this.world.keyboard.LEFT &&
        this.x >= this.world.level.levelEnd_left &&
        !this.isDead()
      ) {
        this.x -= 3;
        this.otherDirection = true;
        soundCharacterMove.play();
      }
      if (
        this.world.keyboard.UP &&
        this.y >= this.world.level.levelEnd_up &&
        !this.isDead()
      ) {
        this.y -= 3;
        soundCharacterMove.play();
      }
      if (
        this.world.keyboard.DOWN &&
        this.y <= this.world.level.levelEnd_down &&
        !this.isDead()
      ) {
        this.y += 3;
        soundCharacterMove.play();
      }
      if (this.world.keyboard.SPACE && !this.isDead()) {
        this.lastAnimate = new Date().getTime();
      }
      this.adjustCameraPosition();
    }, 1000 / 60);
  }
}
