let counterValue = 0;

const valueRef = document.querySelector("#value");

const incrementBtnRef = document.querySelector("[data-action=increment]");
const decrementBtnRef = document.querySelector("[data-action=decrement]");


incrementBtnRef.addEventListener("click", () => {
  counterValue += 1;
  valueRef.textContent = counterValue;
});

decrementBtnRef.addEventListener("click", () => {
  counterValue -= 1;
  valueRef.textContent = counterValue;
});
