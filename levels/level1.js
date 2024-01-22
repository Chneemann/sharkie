const level1 = new Level(
  [
    new PufferFish(600, 120),
    new PufferFish(700, 220),
    new PufferFish(800, 320),
    new PufferFish(1100, 250),
    new PufferFish(1000, 380),
    new JellyFish(1300, 120),
    new JellyFish(1400, 220),
    new JellyFish(1500, 20),
    new JellyFish(1500, 280),
    new JellyFish(1600, 380),
    new Endboss(),
  ],
  [
    new Coin("./img/4. Marcadores/1. Coins/1.png", 600, 220),
    new Coin("./img/4. Marcadores/1. Coins/1.png", 670, 220),
    new Coin("./img/4. Marcadores/1. Coins/1.png", 670, 150),
    new Coin("./img/4. Marcadores/1. Coins/1.png", 900, 50),
    new Coin("./img/4. Marcadores/1. Coins/1.png", 970, 50),
    new Coin("./img/4. Marcadores/1. Coins/1.png", 1040, 50),
    new Coin("./img/4. Marcadores/1. Coins/1.png", 1300, 320),
    new Coin("./img/4. Marcadores/1. Coins/1.png", 1370, 250),
    new Coin("./img/4. Marcadores/1. Coins/1.png", 1440, 180),
    new Coin("./img/4. Marcadores/1. Coins/1.png", 1510, 110),
    new PoisonBottles("./img/4. Marcadores/Posiขn/Dark - Left.png", 630, 350),
    new PoisonBottles("./img/4. Marcadores/Posiขn/Dark - Right.png", 880, 370),
    new PoisonBottles("./img/4. Marcadores/Posiขn/Dark - Left.png", 1300, 380),
    new PoisonBottles("./img/4. Marcadores/Posiขn/Dark - Right.png", 1550, 380),
    new PoisonBottles("./img/4. Marcadores/Posiขn/Dark - Left.png", 1660, 340),
  ],
  [
    new BackgroundObject("./img/3. Background/Layers/5. Water/D1.png", 0),
    new BackgroundObject("./img/3. Background/Layers/5. Water/D2.png", 719),
    new BackgroundObject("./img/3. Background/Layers/5. Water/D1.png", 719 * 2),
    new BackgroundObject("./img/3. Background/Layers/5. Water/D2.png", 719 * 3),
    new BackgroundObject("./img/3. Background/Layers/5. Water/D1.png", 719 * 4),
    new BackgroundObject("./img/3. Background/Layers/4.Fondo 2/D1.png", 0),
    new BackgroundObject("./img/3. Background/Layers/4.Fondo 2/D2.png", 719),
    new BackgroundObject(
      "./img/3. Background/Layers/4.Fondo 2/D1.png",
      719 * 2
    ),
    new BackgroundObject(
      "./img/3. Background/Layers/4.Fondo 2/D2.png",
      719 * 3
    ),
    new BackgroundObject("./img/3. Background/Layers/3.Fondo 1/D1.png", 0),
    new BackgroundObject("./img/3. Background/Layers/3.Fondo 1/D2.png", 719),
    new BackgroundObject(
      "./img/3. Background/Layers/3.Fondo 1/D1.png",
      719 * 2
    ),
    new BackgroundObject(
      "./img/3. Background/Layers/3.Fondo 1/D2.png",
      719 * 3
    ),
    new BackgroundObject("./img/3. Background/Layers/2. Floor/D1.png", 0),
    new BackgroundObject("./img/3. Background/Layers/2. Floor/D2.png", 719),
    new BackgroundObject("./img/3. Background/Layers/2. Floor/D1.png", 719 * 2),
    new BackgroundObject("./img/3. Background/Layers/2. Floor/D2.png", 719 * 3),
    new BackgroundObject("./img/3. Background/Layers/1. Light/1.png", 0),
    new BackgroundObject("./img/3. Background/Layers/1. Light/2.png", 719),
    new BackgroundObject("./img/3. Background/Layers/1. Light/1.png", 719 * 2),
    new BackgroundObject("./img/3. Background/Layers/1. Light/2.png", 719 * 3),
  ],
  [719 * 3]
);
