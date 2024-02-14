let soundBackground = new Audio("./audio/background_music.mp3");
let soundLost = new Audio("./audio/lost.mp3");
let soundWin = new Audio("./audio/win.mp3");
let soundCharacterHitShock = new Audio("./audio/hit_shock.mp3");
let soundCharacterHitMeele = new Audio("./audio/hit_meele.mp3");
let soundCharacterMove = new Audio("./audio/move.mp3");
let soundEndbossSpawn = new Audio("./audio/endboss_spawn.mp3");
let soundAttackBubble = new Audio("./audio/attack_bubble.mp3");
let soundAttackBubbleHit = new Audio("./audio/attack_bubble_hit.mp3");
let soundCollectPoisonBottle = new Audio("./audio/poison_bottle.mp3");
let soundCollectCoin = new Audio("./audio/coin.mp3");

let allSounds = [
  soundBackground,
  soundLost,
  soundWin,
  soundCharacterHitShock,
  soundCharacterHitMeele,
  soundCharacterMove,
  soundEndbossSpawn,
  soundAttackBubble,
  soundAttackBubbleHit,
  soundCollectPoisonBottle,
  soundCollectCoin,
];

/**
 * Adjusts the audio volume
 */
function adjustsAudioVolume() {
  for (let i = 1; i < allSounds.length; i++) {
    allSounds[i].volume = 0.2;
  }
  allSounds[0].volume = 0.1;
}

/**
 * Switches the sound on or off
 */
function toggleMute() {
  this.muted = !this.muted;
  document.getElementById("volume_off").classList.toggle("d-none");
  document.getElementById("volume_on").classList.toggle("d-none");

  document.dispatchEvent(new CustomEvent("toggleMute", { detail: this.muted }));
}

/**
 * Adds an event listener for the "toggleMute" event on the document object.
 */
document.addEventListener("toggleMute", (e) => {
  for (let i = 0; i < allSounds.length; i++) {
    allSounds[i].muted = e.detail;
  }
});
