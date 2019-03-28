function login() {



    let email = document.querySelector('#email').value
    let password = document.querySelector('#password').value
    console.log(email)
    console.log(password)
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(err => {
        console.log(err.message);
      });
  }