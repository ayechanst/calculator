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
    aArray = bArray = [];
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
let operator = [];
let aArray = [];
let bArray = [];
let aString = '';
let bString = '';
let answer;
let runningTotal;
let a;
let b;

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
            display.innerHTML = a;
        } 
        

        else if (isNaN(button.innerHTML)) {     //if user already has a sign, calculate function and add this sign
            if (operator == true) {                         //this will always be true due to the line above it 
                //do another caclulation according to the sign
                // testDisplay.innerHTML = 'test has worked'
            }

            if (button.innerHTML !== '=' && button.innerHTML !== 'clear') {   
                //we want to add the operator to an array so check how big it is later
                if (operator.length > 1) {
                    answer = operate(button.innerHTML, runningTotal, b) //3rd param... how do we get that?
                    display.innerHTML = `${answer}`;    //THIS IS WHERE WE LEFT OFF
                }
                operator += button.innerHTML;
                testDisplay.innerHTML = operator;
                display.innerHTML = `${a} ${operator}`;
            }
        } 
        
        else {
            bArray.push(button.innerHTML);                         //get second number
            bString += bArray[bArray.length - 1];
            b = Number(bString);
            display.innerHTML = `${a} ${operator} ${b}`;
        }
        
        //End collect numbers and display data phase 
        
        if (button.innerHTML === '=') {                             //calculate answer using operate(opertor, a, b)
            
            answer = operate(operator[operator.length - 1], a, b);
            smallDisplay.innerHTML = `${a} ${operator[operator.length - 1]} ${b} = `;
            display.innerHTML = `${answer}`;
            runningTotal = answer;
            //testDisplay.innerHTML = `${runningTotal}`;
        }

        //console.log('a array: ' + aArray);
        //console.log('a string: ' + aString);
        //console.log('a: ' + a);
        //console.log('operator: ' + operator);
        //console.log('b array: ' + bArray);
        //console.log('b string: ' + bString);
        //console.log('b: ' + b);
    })
})

//    ``