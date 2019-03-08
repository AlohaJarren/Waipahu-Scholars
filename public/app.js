postSubmit.addEventListener('click', (event) => {
    event.preventDefault();
    axios
        .post(`https://7wlk7u9840.execute-api.us-east-1.amazonaws.com/dev/post`, {
            password: password.value,
            email: email.value,
            first_name: firstName.value,
            last_name: lastname.value
        })
        .then((response)=>{
            console.log(response.data.message);
        })
        .catch((error)=>{
            console.log('error', error);
        })
})

function makeid() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  
    for (var i = 0; i < 5; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
  
    return text;
}
  
console.log(makeid());