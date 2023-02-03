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
let operator = '';
let aArray = [];
let bArray = [];
let aString = '';
let bString = '';
let a;
let b;

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (!isNaN(button.innerHTML) && operator == false) {
            aArray.push(button.innerHTML);
        } else if (isNaN(button.innerHTML)) { 

            operator = button.innerHTML;

            // if (button.innerHTML === '+') {
            //     operator = 'add';
            // } else if (button.innerHTML === '-') {
            //     operator = 'subtract';
            // } else if (button.innerHTML === '*') {
            //     operator = 'multiply';
            // } else if (button.innerHTML === '/') {
            //     operator = 'divide';
            // }

        } else {
            bArray.push(button.innerHTML);
        }

        if (button.innerHTML === '=') {
            aArray.forEach((aNum) => {
                aString += aNum;
            })
            a = Number(aString);
            
            bArray.forEach((bNum) => {
                bString += bNum;
            })
            b = Number(bString);

            // let answer;
            // answer = operate(operator, a, b)
            // display.innerHTML = answer;
        }


        console.log('a array: ' + aArray);
        console.log('a string: ' + aString);
        console.log('a: ' + a);
        console.log('operator: ' + operator);
        console.log('b array: ' + bArray);
        console.log('b string: ' + bString);
        console.log('b: ' + b);
    })
})

//    ``