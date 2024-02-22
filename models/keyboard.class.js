class Keyboard {
  LEFT = false;
  RIGHT = false;
  UP = false;
  DOWN = false;
  SPACE = false;
  MOVE = false;

  lastInputDate;
  lastInputX = "right";
  lastInputY;

  constructor() {
    document.addEventListener("DOMContentLoaded", () => {
      this.btnEvents();
      this.btnPressEvents();
    });
  }

  /**
   * Adds event listeners for "keydown" & "keyup" events to handle keyboard inputs.
   */
  btnEvents() {
    window.addEventListener("keydown", (e) => {
      this.btnKeyDownArrowUp(e);
      this.btnKeyDownArrowDown(e);
      this.btnKeyDownArrowRight(e);
      this.btnKeyDownArrowLeft(e);
      this.btnKeyDownArrowSpace(e);
    });

    window.addEventListener("keyup", (e) => {
      this.btnKeyUpArrowUp(e);
      this.btnKeyUpArrowDown(e);
      this.btnKeyUpArrowRight(e);
      this.btnKeyUpArrowLeft(e);
      this.btnKeyUpArrowSpace(e);
    });
  }

  btnKeyDownArrowUp(e) {
    if (e.code === "ArrowUp" || e.code === "KeyW") {
      this.UP = true;
      this.MOVE = true;
      this.lastInput = "up";
      this.lastInputY = "up";
      this.lastInputDate = new Date().getTime();
    }
  }

  btnKeyDownArrowDown(e) {
    if (e.code === "ArrowDown" || e.code === "KeyS") {
      this.DOWN = true;
      this.MOVE = true;
      this.lastInput = "down";
      this.lastInputY = "down";
      this.lastInputDate = new Date().getTime();
    }
  }

  btnKeyDownArrowRight(e) {
    if (e.code === "ArrowRight" || e.code === "KeyD") {
      this.RIGHT = true;
      this.MOVE = true;
      this.lastInput = "right";
      this.lastInputX = "right";
      this.lastInputDate = new Date().getTime();
    }
  }

  btnKeyDownArrowLeft(e) {
    if (e.code === "ArrowLeft" || e.code === "KeyA") {
      this.LEFT = true;
      this.MOVE = true;
      this.lastInput = "left";
      this.lastInputX = "left";
      this.lastInputDate = new Date().getTime();
    }
  }

  btnKeyDownArrowSpace(e) {
    if (e.code === "Space") {
      this.SPACE = true;
      this.lastInputDate = new Date().getTime();
    }
  }

  btnKeyUpArrowUp(e) {
    if (e.code === "ArrowUp" || e.code === "KeyW") {
      this.UP = false;
      this.MOVE = false;
      this.lastInputDate = new Date().getTime();
    }
  }

  btnKeyUpArrowDown(e) {
    if (e.code === "ArrowDown" || e.code === "KeyS") {
      this.DOWN = false;
      this.MOVE = false;
      this.lastInputDate = new Date().getTime();
    }
  }

  btnKeyUpArrowRight(e) {
    if (e.code === "ArrowRight" || e.code === "KeyD") {
      this.RIGHT = false;
      this.MOVE = false;
      this.lastInputDate = new Date().getTime();
    }
  }

  btnKeyUpArrowLeft(e) {
    if (e.code === "ArrowLeft" || e.code === "KeyA") {
      this.LEFT = false;
      this.MOVE = false;
      this.lastInputDate = new Date().getTime();
    }
  }

  btnKeyUpArrowSpace(e) {
    if (e.code === "Space") {
      this.SPACE = false;
      this.lastInputDate = new Date().getTime();
    }
  }

  /**
   * Initializes event listeners for touchstart and touchend on game control buttons.
   * It sets the appropriate class properties based on the button pressed, allowing
   * for game control through touch inputs. It also ensures that default actions are
   * prevented when the event is cancelable, avoiding unintended behaviors like scrolling.
   */
  btnPressEvents() {
    const buttons = [
      {
        id: "btn-left",
        action: () => {
          this.LEFT = true;
          this.MOVE = true;
          this.lastInput = "left";
          this.lastInputX = "left";
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
          this.lastInput = "right";
          this.lastInputX = "right";
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
          this.lastInput = "up";
          this.lastInputY = "up";
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
          this.lastInput = "down";
          this.lastInputY = "down";
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
        this.lastInputDate = new Date().getTime();
      });

      button.addEventListener("touchend", (e) => {
        if (e.cancelable) {
          e.preventDefault();
        }
        actionEnd();
        this.lastInputDate = new Date().getTime();
      });
    });
  }

  /**
   * Checks whether a specific key has been pressed on the keyboard.
   *
   * @param {string} btn - The key to be checked
   * @returns {boolean} true or false
   */
  btnPressed(btn) {
    return world.keyboard[btn];
  }
}
