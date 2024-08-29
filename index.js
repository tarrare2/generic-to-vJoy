let controllerIndex = null;

window.addEventListener("gamepadconnected", (event) => {
  handleConnectDisconnect(event, true);
});
window.addEventListener("gamepaddisconnected", (event) => {
  handleConnectDisconnect(event, false);
});

function handleConnectDisconnect(event, connected) {
  const controllerAreaConnected = document.getElementById(
    "controller-connected-area"
  );

  const gamepad = event.gamepad;
  console.log(gamepad);

  if (connected) {
    controllerIndex = gamepad.index;
    controllerAreaConnected.style.display = "block";
    createButtonLayout(gamepad.buttons);
    createAxesLayout(gamepad.axes);
  }
}


function createButtonLayout(buttons) {
  const buttonArea = document.getElementById("buttons");
  buttonArea.innerHTML = "";
  for (let i = 0; i < buttons.length; i++) {
    buttonArea.innerHTML += createButtonHtml(i, 0);
  }
}
function createButtonHtml(index, value) {
  return `<div class="button" id="button-${index}">${value.toFixed(2)}</div>`;
}

function updateButtonOnGrid(index, value) {
  const buttonArea = document.getElementById(`button-${index}`);
  buttonArea.innerHTML = value.toFixed(2);
}
function handleButtons(buttons) {
  for (let i = 0; i < buttons.length; i++) {
    const buttonValue = buttons[i].value;
    updateButtonOnGrid(i, buttonValue);
  }
}

function handleSticks(axes) {
  updateAxesGrid(axes);
}
function createAxesLayout(axes) {
    const buttonsArea = document.getElementById("buttons");
    for (let i = 0; i < axes.length; i++) {
        buttonsArea.innerHTML += `<div class='axis' id=axis-${i}>${axes[i].toFixed(4)}</div> `;
    }
}

function updateAxesGrid(axes) {
  for (let i = 0; i < axes.length; i++) {
    const axis = document.querySelector(`#axis-${i}`);
    const value = axes[i];
    // if (value > 0.06 || value < -0.06) {
    axis.innerHTML = value.toFixed(4);
    // }
  }
}




function gameLoop() {
  if (controllerIndex !== null) {
    const gamepad = navigator.getGamepads()[controllerIndex];
    handleButtons(gamepad.buttons);
    handleSticks(gamepad.axes);
  }
  requestAnimationFrame(gameLoop);
}

gameLoop();
