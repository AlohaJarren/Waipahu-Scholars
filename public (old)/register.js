const button = document.querySelector('#register-button')
let email;
let password;
let question1;


// This give you access to firebase database
const database = firebase.database();

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

  // Allows you to access current user information
  var userId = firebase.auth().currentUser.uid;

  // Stores user information plus quiz information in database
  firebase.database().ref(`users/${userId}`).set({
    userId: userId,
    email: email,
    gpa: question1
    //some more user data
  });

})