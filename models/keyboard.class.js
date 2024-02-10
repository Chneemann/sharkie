class Keyboard {
  LEFT = false;
  RIGHT = false;
  UP = false;
  DOWN = false;
  SPACE = false;
  MOVE = false;

  constructor() {
    document.addEventListener("DOMContentLoaded", () => {
      this.btsPressEvents();
    });
  }

  /**
   * Initializes event listeners for touchstart and touchend on game control buttons.
   * It sets the appropriate class properties based on the button pressed, allowing
   * for game control through touch inputs. It also ensures that default actions are
   * prevented when the event is cancelable, avoiding unintended behaviors like scrolling.
   */
  btsPressEvents() {
    const buttons = [
      {
        id: "btn-left",
        action: () => {
          this.LEFT = true;
          this.MOVE = true;
        },
        actionEnd: () => {
          this.LEFT = false;
          this.MOVE = false;
        },
      },
      {
        id: "btn-right",
        action: () => {
          this.RIGHT = true;
          this.MOVE = true;
        },
        actionEnd: () => {
          this.RIGHT = false;
          this.MOVE = false;
        },
      },
      {
        id: "btn-up",
        action: () => {
          this.UP = true;
          this.MOVE = true;
        },
        actionEnd: () => {
          this.UP = false;
          this.MOVE = false;
        },
      },
      {
        id: "btn-down",
        action: () => {
          this.DOWN = true;
          this.MOVE = true;
        },
        actionEnd: () => {
          this.DOWN = false;
          this.MOVE = false;
        },
      },
      {
        id: "btn-shoot",
        action: () => {
          this.SPACE = true;
        },
        actionEnd: () => {
          this.SPACE = false;
        },
      },
    ];

    buttons.forEach(({ id, action, actionEnd }) => {
      const button = document.getElementById(id);

      button.addEventListener("touchstart", (e) => {
        if (e.cancelable) {
          e.preventDefault();
        }
        action();
      });

      button.addEventListener("touchend", (e) => {
        if (e.cancelable) {
          e.preventDefault();
        }
        actionEnd();
      });
    });
  }
}
