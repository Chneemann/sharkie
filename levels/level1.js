const level1 = new Level(
  [
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
    new Endboss(),
  ],
  [
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
  ],
  [
    new BackgroundObject("./img/3. Background/Layers/5. Water/D1.png", 0),
    new BackgroundObject("./img/3. Background/Layers/5. Water/D2.png", 899),
    new BackgroundObject("./img/3. Background/Layers/5. Water/D1.png", 899 * 2),
    new BackgroundObject("./img/3. Background/Layers/5. Water/D2.png", 899 * 3),
    new BackgroundObject("./img/3. Background/Layers/5. Water/D1.png", 899 * 4),
    new BackgroundObject("./img/3. Background/Layers/4.Fondo 2/D1.png", 0),
    new BackgroundObject("./img/3. Background/Layers/4.Fondo 2/D2.png", 899),
    new BackgroundObject(
      "./img/3. Background/Layers/4.Fondo 2/D1.png",
      899 * 2
    ),
    new BackgroundObject(
      "./img/3. Background/Layers/4.Fondo 2/D2.png",
      899 * 3
    ),
    new BackgroundObject("./img/3. Background/Layers/3.Fondo 1/D1.png", 0),
    new BackgroundObject("./img/3. Background/Layers/3.Fondo 1/D2.png", 899),
    new BackgroundObject(
      "./img/3. Background/Layers/3.Fondo 1/D1.png",
      899 * 2
    ),
    new BackgroundObject(
      "./img/3. Background/Layers/3.Fondo 1/D2.png",
      899 * 3
    ),
    new BackgroundObject("./img/3. Background/Layers/2. Floor/D1.png", 0),
    new BackgroundObject("./img/3. Background/Layers/2. Floor/D2.png", 899),
    new BackgroundObject("./img/3. Background/Layers/2. Floor/D1.png", 899 * 2),
    new BackgroundObject("./img/3. Background/Layers/2. Floor/D2.png", 899 * 3),
    new BackgroundObject("./img/3. Background/Layers/1. Light/1.png", 0),
    new BackgroundObject("./img/3. Background/Layers/1. Light/2.png", 899),
    new BackgroundObject("./img/3. Background/Layers/1. Light/1.png", 899 * 2),
    new BackgroundObject("./img/3. Background/Layers/1. Light/2.png", 899 * 3),
  ],
  [899 * 3]
);
