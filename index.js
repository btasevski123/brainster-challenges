const buttons = document.querySelectorAll(".btn");
const textarea = document.querySelector("textarea");

const spaceBtn = document.querySelector(".space");
const deleteBtn = document.querySelector(".delete");

let letter = [];
buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    textarea.value += btn.innerText;
    letter = textarea.value.split("");
  });
});

spaceBtn.addEventListener("click", () => {
  letter.push(" ");
  textarea.value = letter.join("");
});

deleteBtn.addEventListener("click", () => {
  letter.pop();
  textarea.value = letter.join("");
});
