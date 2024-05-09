let canvas;
let world;
let keyboard = new Keyboard();
let intervalIds = [];

/**
 * Initialises the game.
 */
function init() {
  canvas = document.getElementById("canvas");
  world = new World(canvas, keyboard);
  togglePlayButtons();
  adjustsAudioVolume();
  setTimeout(function () {
    document.getElementById("startButton").style.display = "block";
  }, 1500);
}

/**
 * Starts the game.
 */
function startGame() {
  document.getElementById("startscreen").classList.add("d-none");
  document.getElementById("fullscreen").classList.remove("d-none");
  soundBackground.play();
  soundBackground.loop = true;
  startIntervals();
}

/**
 * Starts all important intervals.
 */
function startIntervals() {
  world.update();
  world.level.animateBackground();
  world.character.animate();
  world.endboss.spawnEndboss();
}

/**
 * Stops all intervals.
 */
function stopAllIntervals() {
  for (let i = 0; i < 200; i++) {
    clearInterval(i);
  }
}

/**
 * Stop a specific interval.
 */
function stopInterval(status, id) {
  if (status) {
    clearInterval(id);
    status = true;
  }
  status = false;
}

/**
 * Shows or hides the mobile buttons.
 */
function togglePlayButtons() {
  if (detectMobile()) {
    document.getElementById("playbtns").classList.remove("d-none");
    document.getElementById("playbtns").classList.add("d-flex");
    document.getElementById("img_fullscreen").classList.add("d-none");
  }
}

/**
 * Check whether the device is mobile.
 *
 * @returns True or false.
 */
function detectMobile() {
  const toMatch = [
    /Android/i,
    /webOS/i,
    /iPhone/i,
    /iPad/i,
    /iPod/i,
    /BlackBerry/i,
    /Windows Phone/i,
  ];
  return toMatch.some((toMatchItem) => navigator.userAgent.match(toMatchItem));
}

/**
 * Show or hide the help menu.
 */
function help() {
  document.getElementById("helpscreen").classList.toggle("d-none");
}

/**
 * Show or hide the help menu.
 */
function errorMsgEndboss() {
  document.getElementById("errorMsg").classList.remove("d-none");
  document.getElementById("errorMsg").innerHTML =
    "Only a Poision Bottle can hurt the final boss!";
  setTimeout(() => {
    document.getElementById("errorMsg").classList.add("d-none");
  }, 2000);
}

/**
 * Resets the game by setting a value in the LocalStorage and reloading the page.
 */
function restartGame() {
  location.reload();
}

/**
 * Sets the `draggable` attribute to `false` for all `<img>` elements in the document.
 */
document.addEventListener("DOMContentLoaded", function () {
  const images = document.getElementsByTagName("img");
  for (let i = 0; i < images.length; i++) {
    images[i].setAttribute("draggable", false);
  }
});

/**
 * Ends the game with a win scenario.
 */
function gameEndWin() {
  setTimeout(() => {
    exitFullscreen();
    soundWin.play();
    document.getElementById("countCoins").innerHTML =
      world.statusBarCoin.percentage;
    document.getElementById("endscreen").classList.remove("d-none");
    document.getElementById("endscreen-win").classList.remove("d-none");
    document.getElementById("fullscreen").classList.add("d-none");
    stopAllIntervals();
  }, 2000);
}

/**
 * Triggers actions when the game is lost.
 */
function gameEndLost() {
  setTimeout(() => {
    exitFullscreen();
    soundLost.play();
    document.getElementById("endscreen").classList.remove("d-none");
    document.getElementById("endscreen-lost").classList.remove("d-none");
    document.getElementById("fullscreen").classList.add("d-none");
    stopAllIntervals();
  }, 1500);
}

/**
 * Triggers fullscreen mode.
 *
 * @param {Element} element - The DOM element to display in fullscreen mode.
 */
function enterFullscreen(element) {
  if (element.requestFullscreen) {
    element.requestFullscreen();
  } else if (element.msRequestFullscreen) {
    element.msRequestFullscreen();
  } else if (element.webkitRequestFullscreen) {
    element.webkitRequestFullscreen();
  }
}

/**
 * Exits fullscreen mode.
 */
function exitFullscreen() {
  if (document.fullscreenElement || document.webkitFullscreenElement) {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
  }
}
