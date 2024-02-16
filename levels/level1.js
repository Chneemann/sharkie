const level1Enemies = [
  new PufferFish(600, 120),
  new PufferFish(750, 240),
  new PufferFish(900, 360),
  new PufferFish(1250, 270),
  new PufferFish(1200, 420),
  new JellyFish(1500, 120),
  new JellyFish(1650, 240),
  new JellyFish(1750, 40),
  new JellyFish(1800, 320),
  new JellyFish(1700, 470),
];
const level1Endboss = [new Endboss()];
const level1CollectableObjects = [
  new Heart(400, 270),
  new Coin(600, 270),
  new Coin(750, 270),
  new Coin(750, 150),
  new Coin(1000, 50),
  new Coin(1150, 50),
  new Coin(1300, 50),
  new Coin(1500, 360),
  new Coin(1650, 290),
  new Coin(1800, 220),
  new Coin(1950, 150),
  new PoisonBottle(160, 480),
  new PoisonBottle(300, 440),
  new PoisonBottle(730, 490),
  new PoisonBottle(870, 495),
  new PoisonBottle(1200, 430),
  new PoisonBottle(1570, 500),
  new PoisonBottle(1680, 470),
  new PoisonBottle(2060, 480),
  new PoisonBottle(2600, 455),
];
const level1BackgroundObjects = [
  new BackgroundObject("./img/3. Background/Layers/5. Water/D2.png", -899),
  new BackgroundObject("./img/3. Background/Layers/5. Water/D1.png", 0),
  new BackgroundObject("./img/3. Background/Layers/5. Water/D2.png", 899),
  new BackgroundObject("./img/3. Background/Layers/5. Water/D1.png", 899 * 2),
  new BackgroundObject("./img/3. Background/Layers/5. Water/D2.png", 899 * 3),
  new BackgroundObject("./img/3. Background/Layers/5. Water/D1.png", 899 * 4),
  new BackgroundObject("./img/3. Background/Layers/5. Water/D2.png", 899 * 5),
  new BackgroundObject("./img/3. Background/Layers/4.Fondo 2/D2.png", -899),
  new BackgroundObject("./img/3. Background/Layers/4.Fondo 2/D1.png", 0),
  new BackgroundObject("./img/3. Background/Layers/4.Fondo 2/D2.png", 899),
  new BackgroundObject("./img/3. Background/Layers/4.Fondo 2/D1.png", 899 * 2),
  new BackgroundObject("./img/3. Background/Layers/4.Fondo 2/D2.png", 899 * 3),
  new BackgroundObject("./img/3. Background/Layers/4.Fondo 2/D1.png", 899 * 4),
  new BackgroundObject("./img/3. Background/Layers/3.Fondo 1/D2.png", -899),
  new BackgroundObject("./img/3. Background/Layers/3.Fondo 1/D1.png", 0),
  new BackgroundObject("./img/3. Background/Layers/3.Fondo 1/D2.png", 899),
  new BackgroundObject("./img/3. Background/Layers/3.Fondo 1/D1.png", 899 * 2),
  new BackgroundObject("./img/3. Background/Layers/3.Fondo 1/D2.png", 899 * 3),
  new BackgroundObject("./img/3. Background/Layers/3.Fondo 1/D1.png", 899 * 4),
  new BackgroundObject("./img/3. Background/Layers/2. Floor/D2.png", -899),
  new BackgroundObject("./img/3. Background/Layers/2. Floor/D1.png", 0),
  new BackgroundObject("./img/3. Background/Layers/2. Floor/D2.png", 899),
  new BackgroundObject("./img/3. Background/Layers/2. Floor/D1.png", 899 * 2),
  new BackgroundObject("./img/3. Background/Layers/2. Floor/D2.png", 899 * 3),
  new BackgroundObject("./img/3. Background/Layers/2. Floor/D1.png", 899 * 4),
  new BackgroundObject("./img/3. Background/Layers/1. Light/2.png", -899),
  new BackgroundObject("./img/3. Background/Layers/1. Light/1.png", 0),
  new BackgroundObject("./img/3. Background/Layers/1. Light/2.png", 899),
  new BackgroundObject("./img/3. Background/Layers/1. Light/1.png", 899 * 2),
  new BackgroundObject("./img/3. Background/Layers/1. Light/2.png", 899 * 3),
  new BackgroundObject("./img/3. Background/Layers/1. Light/1.png", 899 * 4),
];
const level1Barriers = [
  new Barrier("./img/3. Background/Barrier/3.png", -660, 0, 300, 630),
  new Barrier("./img/3. Background/Barrier/3.png", 899 * 4.13, 0, 300, 630),
  new Barrier("./img/3. Background/Barrier/2.png", 400, 400, 300, 200),
];
const level1Sizes = [-90, 440, -400, 3500];

const level1 = new Level(
  level1Enemies,
  level1Endboss,
  level1CollectableObjects,
  level1BackgroundObjects,
  level1Barriers,
  level1Sizes
);
