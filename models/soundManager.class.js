class SoundManager {
  constructor() {
    this.muted = false;
  }

  toggleMute() {
    this.muted = !this.muted;
    document.getElementById("volume_off").classList.toggle("d-none");
    document.getElementById("volume_on").classList.toggle("d-none");

    document.dispatchEvent(
      new CustomEvent("toggleMute", { detail: this.muted })
    );
  }

  isMuted() {
    return this.muted;
  }
}
