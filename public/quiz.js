let button = document.querySelector('#submit-button')

button.addEventListener('click', processData)

function processData() {
    let question1 = parseInt(document.querySelector('#question-1').value)
    
    console.log(question1)
    let gpa = question1 + 1
    console.log(gpa)
}