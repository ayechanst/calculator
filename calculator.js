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

let numButtons = document.querySelectorAll('.numBtn');
let operationButtons = document.querySelectorAll('.opBtn');
let clearButton = document.getElementById('clear');
let equalsButton = document.getElementById('equals');
let standbyForCalculation = [];

function buildOperand() {
    let numberString = '';
    let prepareNumber = [];
    let nonNumBtnWasClicked = false;
    numButtons.forEach((button) => {
        button.addEventListener('click', function makeNum() {
            display.innerHTML = `${button.innerHTML}`;
            prepareNumber.push(`${button.innerHTML}`);
            console.log(prepareNumber);

            operationButtons.forEach((opButton) => {             //checks if non-num button was clicked
                opButton.onclick = () => {       
                    nonNumBtnWasClicked = true;                       
                }
            })
            if (nonNumBtnWasClicked) {
                button.removeEventListener('click', makeNum)
                prepareNumber.forEach((number) => {
                    numberString += number;
                })
                standbyForCalculation.push(Number(numberString));
                }
    
            //pushes number type into standbyForCalcualtion at some point
        })
    })
}

function getOperator() {
    operationButtons.forEach((button) => {
        button.addEventListener('click', () => {
            standbyForCalculation.push(`${button.innerHTML}`);
        })
    })
}

buildOperand();
console.log(standbyForCalculation);