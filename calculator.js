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

function clear() {
    operator = '';
    aArray = [];
    bArray = [];
    aString = '';
    bString = '';
    a = null;
    b = null;
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


        if (button.innerHTML === 'clear') {
            clear();
            display.innerHTML = '0';
        }

        //Collect numbers and display data

        if (!isNaN(button.innerHTML) && operator == false) {
            aArray.push(button.innerHTML);
            aString += aArray[aArray.length - 1];
            a = Number(aString);
            display.innerHTML = a;
        } 
        

        else if (isNaN(button.innerHTML)) { 
            if (button.innerHTML !== '=' && button.innerHTML !== 'clear') {
                operator = button.innerHTML;
            }
        } 
        
        
        else {
            bArray.push(button.innerHTML);
            bString += bArray[bArray.length - 1];
            b = Number(bString);
            display.innerHTML = b;
        }
        
        //End collect numbers and display data phase 
        
        if (button.innerHTML === '=') {
            
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