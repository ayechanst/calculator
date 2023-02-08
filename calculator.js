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

let operator = '';
let a = '';
let b = '';
let answer;
let runningTotal = 0;

function test() {
    console.log('a: ' + a);
    console.log('b: ' + b);
    console.log('running total: ' + runningTotal);
    console.log('operator: ' + operator);
}

clearButton.addEventListener('click', () => {    //clears all values
    clear();
})

numButtons.forEach((button) => {                            //gets the numbers
    button.addEventListener('click', () => {
        let num = button.innerHTML; 
        if (!operator) {
            a += num;
            display.innerHTML = `${a}`;
        }
        else {
            b += num;
            display.innerHTML = `${a} ${operator} ${b}`;
        }
        test();
    })
})

operatorButtons.forEach((button) => {                   //gets the operator sign(s)
    button.addEventListener('click', () => {
        if (!operator) {
            operator = button.innerHTML;
            display.innerHTML = `${a} ${operator}`;
        } else {
            runningTotal = operate(operator, a, b);   //if theres already an operator, getting a running total
            operator = button.innerHTML;
        }
        test();
    })
})

equalsButton.addEventListener('click', () => {          //calculates result
    answer = operate(operator, a, b);
    display.innerHTML = `${answer}`;
    test();
})

//    ``
