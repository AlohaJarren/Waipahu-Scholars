let button = document.querySelector('#register-button')
button.addEventListener('click', function register(e) {
  e.preventDefault()
  let email = document.querySelector('#email').value
  let password = document.querySelector('#password').value
  console.log(email)
  console.log(password)
  fire
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .catch(err => {
      console.log(err.message);
  });
  window.location.replace = './quiz.html';
})