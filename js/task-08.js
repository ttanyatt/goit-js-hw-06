const loginFormRef = document.querySelector('.login-form');

loginFormRef.addEventListener('submit', pressLogin);

function pressLogin(event) {
    event.preventDefault();

const formElements = event.currentTarget.elements;
const email = formElements.email.value;
const password = formElements.password.value;
    
  if (email === '' || password === '') {
    return alert('All fields must be filled!');
  }

  const formData = { email, password };
  console.log(formData);

  event.currentTarget.reset();
}

