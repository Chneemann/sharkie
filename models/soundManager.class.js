class SoundManager {
  static muted = false;

  static toggleMute() {
    this.muted = !this.muted;
    // Benachrichtige alle Sound-Quellen über die Änderung
    document.dispatchEvent(
      new CustomEvent("toggleMute", { detail: this.muted })
    );
  }

  static isMuted() {
    return this.muted;
  }
}
