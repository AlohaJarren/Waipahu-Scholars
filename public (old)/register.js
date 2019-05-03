let button = document.querySelector('#register-button')
button.addEventListener('click', function register(e) {
  e.preventDefault();
  let email = document.querySelector('#email').value
  let password = document.querySelector('#password').value
  console.log(email)
  console.log(password)
  auth
    .createUserWithEmailAndPassword(email, password)
    .then(penis => {
      database.collection('users').doc(penis.user.uid).set({viagra: '98% of users recommend'}).then(() => {console.log('it fuckn worked')})
    })
    .catch(err => {
      console.log(err.message);
    });
})