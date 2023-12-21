let canvas;
let ctx;
let character = new Character();
let enemies = [new PufferFish(), new PufferFish(), new PufferFish()];

function init() {
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");

  console.log(character);
}
