const checkInput = document.querySelector('#validation-input');

checkInput.addEventListener('blur', () => {
  if (checkInput.value.length !== Number(checkInput.dataset.length)) {
    checkInput.classList.add('invalid');
    checkInput.classList.remove('valid');
  } else {
    checkInput.classList.add('valid');
    checkInput.classList.remove('invalid');
    }
    
});