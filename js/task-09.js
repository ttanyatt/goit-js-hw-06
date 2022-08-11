function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyRef = document.querySelector('body');
const spanRef = document.querySelector('.color');
const buttonRef = document.querySelector('.change-color');

buttonRef.addEventListener('click', changeBodyColor);

function changeBodyColor() {
  const randomColor = getRandomHexColor();
  bodyRef.style.backgroundColor = randomColor;
  spanRef.textContent = randomColor;
}