const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");
const inputTextHandle = (e) => {
  output.textContent =
    e.currentTarget.value.trim() === ""
      ? "Anonymous"
      : e.currentTarget.value.trim();
};
input.addEventListener("input", inputTextHandle);
