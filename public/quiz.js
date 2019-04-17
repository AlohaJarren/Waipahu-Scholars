let button = document.querySelector('#submit-button')
let question1 = document.querySelector('#question-1').value

button.addEventListener('click', processData)

function processData() {
    console.log(question1)
    let gpa = question1 + 1
    console.log(gpa)
}