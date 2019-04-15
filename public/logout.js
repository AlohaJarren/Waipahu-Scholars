function logout(){
  console.log('Logging out')
  fire
    .logout()
    .then(localStorage.removeItem('user'))
}