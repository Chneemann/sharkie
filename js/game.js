let canvas;
let world;
let keyboard = new Keyboard();
let sound_background = new Audio("./audio/background_music.mp3");
let sound_lost = new Audio("./audio/lost.mp3");
let sound_win = new Audio("./audio/win.mp3");

function init() {
  canvas = document.getElementById("canvas");
  world = new World(canvas, keyboard);
}

function startGame() {
  document.getElementById("startscreen").classList.add("d-none");
  sound_background.play();
  sound_background.loop = true;
  sound_background.volume = 0.15;
}

function restartGame() {
  location.reload();
}

function gameEndWin() {
  setTimeout(() => {
    sound_win.play();
    sound_win = 0.3;
    document.getElementById("endscreen").classList.remove("d-none");
    document.getElementById("endscreen-win").classList.remove("d-none");
  }, 2000);
}

function gameEndLost() {
  setTimeout(() => {
    sound_lost.play();
    sound_lost = 0.3;
    document.getElementById("endscreen").classList.remove("d-none");
    document.getElementById("endscreen-lost").classList.remove("d-none");
  }, 1500);
}

function enterFullscreen(element) {
  if (element.requestFullscreen) {
    element.requestFullscreen();
  } else if (element.msRequestFullscreen) {
    // for IE11 (remove June 15, 2022)
    element.msRequestFullscreen();
  } else if (element.webkitRequestFullscreen) {
    // iOS Safari
    element.webkitRequestFullscreen();
  }
}

function exitFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  }
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
  }
});
