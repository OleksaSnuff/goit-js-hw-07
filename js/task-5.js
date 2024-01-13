function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const button = document.querySelector(".change-color");
const body = document.querySelector("body");
const outputColor = document.querySelector(".color");
function onButtonClick() {
  const currentColor = getRandomHexColor();
  body.style.backgroundColor = currentColor;
  outputColor.textContent = currentColor;
}

button.addEventListener("click", onButtonClick);
