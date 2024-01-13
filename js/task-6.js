function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const inputNum = document.querySelector("#controls input");
const create = document.querySelector("button[data-create]");
const destroy = document.querySelector("button[data-destroy]");
const boxes = document.querySelector("#boxes");

function createBoxes(amount) {
  destroyBoxes();
  const arr = [];
  for (let i = 0; i < amount; i++) {
    const newElem = `<div style="background-color:${getRandomHexColor()}; width:${
      i * 10 + 30
    }px; height:${i * 10 + 30}px"></div>`;
    arr.push(newElem);
  }

  boxes.insertAdjacentHTML("beforeend", arr.join(""));
  inputNum.value = "";
}

function destroyBoxes() {
  boxes.innerHTML = "";
}

create.addEventListener("click", () => {
  if (inputNum.value > 0 && inputNum.value <= 100) {
    createBoxes(inputNum.value);
  }
});

destroy.addEventListener("click", destroyBoxes);
