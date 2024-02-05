class SoundManager {
  constructor() {
    this.muted = false;
  }

  toggleMute() {
    this.muted = !this.muted;
    // Benachrichtige alle Sound-Quellen über die Änderung
    document.dispatchEvent(
      new CustomEvent("toggleMute", { detail: this.muted })
    );
  }

  isMuted() {
    return this.muted;
  }
}
