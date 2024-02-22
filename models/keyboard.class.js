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

  /**
   * This method initializes the interactions for mobile inputs.
   */
  btnPressEvents() {
    this.setButtonActionStart("btn-up", "UP");
    this.setButtonActionStart("btn-down", "DOWN");
    this.setButtonActionStart("btn-right", "RIGHT");
    this.setButtonActionStart("btn-left", "LEFT");
    this.setButtonActionStart("btn-shoot", "SPACE");

    this.setButtonActionEnd("btn-up", "UP");
    this.setButtonActionEnd("btn-down", "DOWN");
    this.setButtonActionEnd("btn-right", "RIGHT");
    this.setButtonActionEnd("btn-left", "LEFT");
    this.setButtonActionEnd("btn-shoot", "SPACE");
  }

  /**
   * Registers a 'touchstart' event on a specific button to start a game action.
   *
   * @param {string} buttonId - The ID of the button
   * @param {string} actionType - The type of action
   */
  setButtonActionStart(buttonId, actionType) {
    const button = document.getElementById(buttonId);
    button.addEventListener("touchstart", (e) => {
      if (e.cancelable) {
        e.preventDefault();
      }
      this[actionType] = true;
      this.MOVE = actionType !== "SPACE";
      this.lastInput =
        actionType === "SPACE" ? "space" : actionType.toLowerCase();
      this.lastInputX =
        actionType === "RIGHT" || actionType === "LEFT"
          ? actionType.toLowerCase()
          : this.lastInputX;
      this.lastInputY =
        actionType === "UP" || actionType === "DOWN"
          ? actionType.toLowerCase()
          : this.lastInputY;
      this.lastInputDate = new Date().getTime();
    });
  }

  /**
   * Registers a 'touchend' event on a specific button to end a game action.
   *
   * @param {string} buttonId - The ID of the button
   * @param {string} actionType - The type of action
   */
  setButtonActionEnd(buttonId, actionType) {
    const button = document.getElementById(buttonId);
    button.addEventListener("touchend", (e) => {
      if (e.cancelable) {
        e.preventDefault();
      }
      this[actionType] = false;
      if (!this.UP && !this.DOWN && !this.LEFT && !this.RIGHT) {
        this.MOVE = false;
      }
      this.lastInputDate = new Date().getTime();
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

  /**
   * Processes pressing the up arrow key or the W key.
   *
   * @param {KeyboardEvent} e - The KeyboardEvent.
   */
  btnKeyDownArrowUp(e) {
    if (e.code === "ArrowUp" || e.code === "KeyW") {
      this.UP = true;
      this.MOVE = true;
      this.lastInput = "up";
      this.lastInputY = "up";
      this.lastInputDate = new Date().getTime();
    }
  }

  /**
   * Processes pressing the down arrow button or the S button.
   *
   * @param {KeyboardEvent} e - The KeyboardEvent.
   */
  btnKeyDownArrowDown(e) {
    if (e.code === "ArrowDown" || e.code === "KeyS") {
      this.DOWN = true;
      this.MOVE = true;
      this.lastInput = "down";
      this.lastInputY = "down";
      this.lastInputDate = new Date().getTime();
    }
  }

  /**
   * Processes pressing the right arrow key or the D key.
   *
   * @param {KeyboardEvent} e - The KeyboardEvent.
   */
  btnKeyDownArrowRight(e) {
    if (e.code === "ArrowRight" || e.code === "KeyD") {
      this.RIGHT = true;
      this.MOVE = true;
      this.lastInput = "right";
      this.lastInputX = "right";
      this.lastInputDate = new Date().getTime();
    }
  }

  /**
   * Processes pressing the left arrow key or the A key.
   *
   * @param {KeyboardEvent} e - The KeyboardEvent.
   */
  btnKeyDownArrowLeft(e) {
    if (e.code === "ArrowLeft" || e.code === "KeyA") {
      this.LEFT = true;
      this.MOVE = true;
      this.lastInput = "left";
      this.lastInputX = "left";
      this.lastInputDate = new Date().getTime();
    }
  }

  /**
   * Processes the pressing of the space bar.
   *
   * @param {KeyboardEvent} e - The KeyboardEvent.
   */
  btnKeyDownArrowSpace(e) {
    if (e.code === "Space") {
      this.SPACE = true;
      this.lastInputDate = new Date().getTime();
    }
  }

  /**
   * Processes the release of the up arrow key or the W key.
   *
   * @param {KeyboardEvent} e - The KeyboardEvent.
   */
  btnKeyUpArrowUp(e) {
    if (e.code === "ArrowUp" || e.code === "KeyW") {
      this.UP = false;
      this.MOVE = false;
      this.lastInputDate = new Date().getTime();
    }
  }

  /**
   * Processes the release of the up arrow button or the S button.
   *
   * @param {KeyboardEvent} e - The KeyboardEvent.
   */
  btnKeyUpArrowDown(e) {
    if (e.code === "ArrowDown" || e.code === "KeyS") {
      this.DOWN = false;
      this.MOVE = false;
      this.lastInputDate = new Date().getTime();
    }
  }

  /**
   * Processes the release of the up arrow key or the D key.
   *
   * @param {KeyboardEvent} e - The KeyboardEvent.
   */
  btnKeyUpArrowRight(e) {
    if (e.code === "ArrowRight" || e.code === "KeyD") {
      this.RIGHT = false;
      this.MOVE = false;
      this.lastInputDate = new Date().getTime();
    }
  }

  /**
   * Processes the release of the up arrow button or the A button.
   *
   * @param {KeyboardEvent} e - The KeyboardEvent.
   */
  btnKeyUpArrowLeft(e) {
    if (e.code === "ArrowLeft" || e.code === "KeyA") {
      this.LEFT = false;
      this.MOVE = false;
      this.lastInputDate = new Date().getTime();
    }
  }

  /**
   * Processes the release of the space bar.
   *
   * @param {KeyboardEvent} e - The KeyboardEvent.
   */
  btnKeyUpArrowSpace(e) {
    if (e.code === "Space") {
      this.SPACE = false;
      this.lastInputDate = new Date().getTime();
    }
  }
}
