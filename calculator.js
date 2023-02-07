'use strict'

const display = document.getElementById('display');
const smallDisplay = document.getElementById('secondary-display');
const testDisplay = document.querySelector('.test');

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

function clear() {
    operator = '';
    a = '';
    b = '';
    display.innerHTML = '';
    smallDisplay.innerHTML = '';
}

function operate(operation, a, b) {
    a = Number(a);
    b = Number(b);
    if (operation === '+') {
        return add(a, b);
    } else if (operation === '-') {
        return subtract(a, b);
    } else if (operation === '*') {
        return multiply(a, b);
    } else if (operation === '/') {
        return divide(a, b);
    } else {
        return 'ERROR: operation function';
    }
}

let numButtons = document.querySelectorAll('.number');
let operatorButtons = document.querySelectorAll('.operator');
let clearButton = document.getElementById('clear');
let equalsButton = document.getElementById('equals');

let stack = [];  //there should never be more than 3 values in here
let operator = '';
let a = '';
let b = '';
let answer;
let runningTotal = 0;

clearButton.addEventListener('click', () => {
    clear();
})

numButtons.forEach((button) => {                            //gets the numbers
    button.addEventListener('click', () => {
        let num = button.innerHTML;  //technically a string
        if (!operator) {
            a += num;
            display.innerHTML = `${a}`;
        }
        else {
            b += num;
            display.innerHTML = `${a} ${operator} ${b}`;
        }
    })
})

operatorButtons.forEach((button) => {                   //gets the operator sign(s)
    button.addEventListener('click', () => {
        operator = button.innerHTML;
        display.innerHTML = `${a} ${operator}`;
    })
})


equalsButton.addEventListener('click', () => {          //calculates result
    answer = operate(operator, a, b);
    display.innerHTML = `${answer}`;
})

//    ``
console.log('a: ' + a);
console.log('b: ' + b);
console.log('operator: ' + operator);