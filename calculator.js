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
    operator = aString = bString = '';
    aArray = bArray = stack = trashStack = [];
    a = b = answer = runningTotal = null;
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
let answer;
let runningTotal;
let a;
let b;
let stack = [];  //there should never be more than 3 values in here
let trashStack = [];
let stackComponentA;
let stackComponentB

let currentNum

buttons.forEach((button) => {
    button.addEventListener('click', () => {

        
        if (button.innerHTML === 'clear') {
            clear();
            display.innerHTML = '0';
        }
        
        //Collect numbers and display data
        
        if (!isNaN(button.innerHTML) && operator == false) {        //get first number
            aArray.push(button.innerHTML);
            aString += aArray[aArray.length - 1];
            a = Number(aString);
            trashStack.push(a); //we want to slice this each time btn is clicked so there is only 1 value
            stackComponentA = trashStack.pop();
            display.innerHTML = a;
        } 
        
        
        else if (isNaN(button.innerHTML)) { 
            if (button.innerHTML !== '=' && button.innerHTML !== 'clear') {   
                operator = button.innerHTML
                trashStack.push(button.innerHTML);
                
                display.innerHTML = `${a} ${operator}`;
            }
        } 
        
        else {
            bArray.push(button.innerHTML);                   //get second number
            bString += bArray[bArray.length - 1];
            b = Number(bString);
            trashStack.push(b);
            display.innerHTML = `${a} ${operator} ${b}`;
        }
        
        if (button.innerHTML === '=') {         //this should execute the stack, so make sure stack looks good first
            
            answer = operate(operator, a, b);
            smallDisplay.innerHTML = `${a} ${operator} ${b} = `;
            display.innerHTML = `${answer}`;
            testDisplay.innerHTML = `${stack}`;
        }
        
        console.log('a array: ' + aArray);
        console.log('a string: ' + aString);
        console.log('a: ' + a);
        console.log('b array: ' + bArray);
        console.log('b string: ' + bString);
        console.log('b: ' + b);
        console.log('operator: ' + operator);
        console.log(trashStack);
        console.log(stack);
        
    })
})

//    ``