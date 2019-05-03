const checkbox1 = document.querySelector('#box1')
const checkbox2 = document.querySelector('#box2')
const checkbox3 = document.querySelector('#box3')

checkbox1.onclick = function(){
    console.log('Activate')
    checkbox1.style.border= '5px solid red';
}

checkbox2.onclick = function(){
    console.log('Activate')
    checkbox2.style.border= '5px solid red';
}

checkbox3.onclick = function(){
    console.log('Activate')
    checkbox3.style.border= '5px solid red';
}