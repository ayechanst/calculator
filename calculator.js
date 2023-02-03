'use strict'

const display = document.getElementById('display');

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a/b;
}

function operate(operation, a, b) {
    return operation(a, b);
}

let buttons = document.querySelectorAll('.btn');
let clearButton = document.getElementById('clear');
let equalsButton = document.getElementById('equals');
let standbyForCalculation = [];

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        function doWhileLoop() {
            let arrayOfStrings = [];
            let numberString = '';
            while (!isNaN(button.innerHTML)) {  
                arrayOfStrings.push(button.innerHTML);
                // if (isNaN(button.innerHTML)) {
                //     arrayOfStrings.forEach((item) => numberString += item);
                //     break;
                // }
            }
            console.log(arrayOfStrings);
            console.log(numberString);
            console.log(Number(numberString));
            return Number(numberString);
        }
        doWhileLoop();
    })
})

//    ``