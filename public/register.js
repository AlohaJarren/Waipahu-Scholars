const button = document.querySelector('#register-button')
let email;
let password;
let question1;


// This give you access to firebase database
const database = firebase.database();

button.addEventListener('click', function register(e) {
  e.preventDefault();
  email = document.querySelector('#email').value
  password = document.querySelector('#password').value
  question1 = document.querySelector('#quiz-question1').value;

  // Allows you to create email & Password
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
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