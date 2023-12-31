let canvas;
let world;
let keyboard = new Keyboard();

function init() {
  canvas = document.getElementById("canvas");
  world = new World(canvas, keyboard);
}

window.addEventListener("keydown", (e) => {
  if (e.code === "ArrowUp") {
    keyboard.UP = true;
    keyboard.MOVE = true;
  }
  if (e.code === "ArrowDown") {
    keyboard.DOWN = true;
    keyboard.MOVE = true;
  }
  if (e.code === "ArrowRight") {
    keyboard.RIGHT = true;
    keyboard.MOVE = true;
  }
  if (e.code === "ArrowLeft") {
    keyboard.LEFT = true;
    keyboard.MOVE = true;
  }
  if (e.code === "Space") {
    keyboard.SPACE = true;
    keyboard.MOVE = true;
  }
});

window.addEventListener("keyup", (e) => {
  if (e.code === "ArrowUp") {
    keyboard.UP = false;
    keyboard.MOVE = false;
  }
  if (e.code === "ArrowDown") {
    keyboard.DOWN = false;
    keyboard.MOVE = false;
  }
  if (e.code === "ArrowRight") {
    keyboard.RIGHT = false;
    keyboard.MOVE = false;
  }
  if (e.code === "ArrowLeft") {
    keyboard.LEFT = false;
    keyboard.MOVE = false;
  }
  if (e.code === "Space") {
    keyboard.SPACE = false;
    keyboard.MOVE = false;
  }
});
