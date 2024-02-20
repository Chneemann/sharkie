let canvas;
let world;
let keyboard = new Keyboard();
let intervalIds = [];

/**
 * Initialises the game
 */
function init() {
  canvas = document.getElementById("canvas");
  world = new World(canvas, keyboard);
  togglePlayButtons();
  adjustsAudioVolume();
}

/**
 * Initiates the game by hiding the start screen, displaying the full screen button,
 * and playing the background sound on a loop with reduced volume.
 */
function startGame() {
  document.getElementById("startscreen").classList.add("d-none");
  document.getElementById("fullscreen").classList.remove("d-none");
  soundBackground.play();
  soundBackground.loop = true;
}

/**
 * Stops all intervals
 */
function stopAllIntervals() {
  for (let i = 0; i < 200; i++) {
    clearInterval(i);
  }
}

/**
 * Stop a specific interval
 */
function stopInterval(status, id) {
  if (status) {
    clearInterval(id);
    status = true;
  }
  status = false;
}

/**
 * Shows or hides the mobile buttons
 */
function togglePlayButtons() {
  if (detectMobile()) {
    document.getElementById("playbuttons").classList.remove("d-none");
    document.getElementById("playbuttons").classList.add("d-flex");
    document.getElementById("img_fullscreen").classList.add("d-none");
  }
}

/**
 * Check whether the device is mobile
 *
 * @returns true or false
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
 * Show or hide the help menu
 */
function help() {
  document.getElementById("helpscreen").classList.toggle("d-none");
}

/**
 * Show or hide the help menu
 */
function errormsgEndboss() {
  document.getElementById("errormsg").classList.remove("d-none");
  document.getElementById("errormsg").innerHTML =
    "Only a Poision Bottle can hurt the final boss!";
  setTimeout(() => {
    document.getElementById("errormsg").classList.add("d-none");
  }, 2000);
}

/**
 * Resets the game by setting a value in the LocalStorage and reloading the page.
 */
function restartGame() {
  localStorage.setItem("restartGame", "true");
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
 * Adds an event listener to the window object that triggers when the page is fully loaded.
 * If the `localStorage` item "restartGame" is set to "true", it executes the `startGame` function
 * to restart the game and then removes the "restartGame" item from `localStorage`.
 */
window.addEventListener("load", () => {
  if (localStorage.getItem("restartGame") === "true") {
    startGame();
    localStorage.removeItem("restartGame");
  }
});

/**
 * Ends the game with a win scenario. After a 2-second delay, exits fullscreen mode,
 * plays the winning sound at 30% volume, and updates the DOM to display the winning end screen
 * while hiding the fullscreen button.
 */
function gameEndWin() {
  setTimeout(() => {
    exitFullscreen();
    soundWin.play();
    document.getElementById("endscreen").classList.remove("d-none");
    document.getElementById("endscreen-win").classList.remove("d-none");
    document.getElementById("fullscreen").classList.add("d-none");
    stopAllIntervals();
  }, 2000);
}

/**
 * Triggers actions when the game is lost. After a delay, it exits full screen mode,
 * plays the loss sound at reduced volume, and updates the DOM to show the end screen
 * specific to a loss scenario.
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
 * Triggers fullscreen mode on the specified HTML element.
 * Supports multiple browser-specific implementations.
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
 * Exits fullscreen mode for the document.
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
