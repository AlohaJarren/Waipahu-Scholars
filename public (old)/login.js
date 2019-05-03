let button = document.querySelector('#login-button')
button.addEventListener('click', function login(e) {
  e.preventDefault();

  let email = document.querySelector('#email').value
  let password = document.querySelector('#password').value
  console.log(email)
  console.log(password)
  localStorage.setItem('user', email)
  window.location = 'goals.html'
  fire
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .catch(err => {
      console.log(err.message);
  });
  console.log('localStorage[user]', localStorage['user']);
})