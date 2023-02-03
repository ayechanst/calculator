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


let buttons = document.querySelectorAll('.btn');
let operator = '';
let aArray = [];
let bArray = [];
let aString = '';
let bString = '';
let a;
let b;

buttons.forEach((button) => {
    button.addEventListener('click', () => {

        function clear() {
            operator = '';
            aArray = [];
            bArray = [];
            aString = '';
            bString = '';
            a = null;
            b = null;
        }
        
        if (button.innerHTML === 'clear') {
            clear();
            console.log('clear has been clicked');
        }
        
        if (!isNaN(button.innerHTML) && operator == false) {
            aArray.push(button.innerHTML);
        } else if (isNaN(button.innerHTML)) { 
            
            if (button.innerHTML !== '=' && button.innerHTML !== 'clear') {
                operator = button.innerHTML;
            }
            
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
            
            let answer = operate(operator, a, b);
            display.innerHTML = `${answer}`;
            
        }

        console.log('a array: ' + aArray);
        //console.log('a string: ' + aString);
        console.log('a: ' + a);
        console.log('operator: ' + operator);
        console.log('b array: ' + bArray);
        //console.log('b string: ' + bString);
        console.log('b: ' + b);
    })
})

//    ``