class SoundManager {
  static muted = false;

  static toggleMute() {
    this.muted = !this.muted;
    document.dispatchEvent(
      new CustomEvent("toggleMute", { detail: this.muted })
    );
  }
}
