
const fontSizeControlRef = document.querySelector('#font-size-control');
const textResultRef = document.querySelector('#text');

fontSizeControlRef.addEventListener('input', () => {
  textResultRef.style.fontSize = `${fontSizeControlRef.value}px`;
});

