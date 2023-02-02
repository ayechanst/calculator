'use strict'

const display = document.getElementById('display');
//operations
const addBtn = document.getElementById('add');
const substractBtn = document.getElementById('subtract');
const multiplyBtn = document.getElementById('multiply');
const divideBtn = document.getElementById('divide');
const equalsBtn = document.getElementById('equals');
const clearBtn = document.getElementById('clear');
const functionBtns = [addBtn, substractBtn, multiplyBtn, divideBtn, equalsBtn, clearBtn];
//number buttons
const zeroBtn = document.getElementById('zero');
const oneBtn = document.getElementById('one');
const twoBtn = document.getElementById('two');
const threeBtn = document.getElementById('three');
const fourBtn = document.getElementById('four');
const fiveBtn = document.getElementById('five');
const sixBtn = document.getElementById('six');
const sevenBtn = document.getElementById('seven');
const eightBtn = document.getElementById('eight');
const nineBtn = document.getElementById('nine');
const numberBtns = [zeroBtn, oneBtn, twoBtn, threeBtn, fourBtn, fiveBtn, sixBtn, sevenBtn, eightBtn, nineBtn];


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
let a;
let b;
let prepareFirstNumber = [];
let prepareSecondNumber = [];
let standbyForOperation = [];

//helper functions
function clearCalculator() {
    prepareFirstNumber, prepareSecondNumber, standbyForOperation = [];
    a, b = null;
    display.innerHTML = 'Wrath of God';
}

//while operation button is not clicked, keep adding nums to a list 

function buildNumber() {
    let prepareNumber = [];    
    buttons.forEach((button) => {
        button.addEventListener('click', function() {
            display.innerHTML = `${button.innerHTML}`;
            while (isNaN(button.innerHTML)) {
                prepareNumber.push(button.innerHTML);
            }
            let number = ''; 
            prepareNumber.forEach((num) => number += num);     //trying to have one function that just makes a number
            console.log(prepareNumber);
            console.log(Number(number));
            return Number(number);
        })
    })
}
buildNumber();

buttons.forEach((button) => {
    button.addEventListener('click', function() {   //everytime is button is clicked, do this:
        display.innerHTML = `${button.innerHTML}`;

        //need to find a way to switch between accepting numbers and operations. try array.lengths?

        if (!isNaN(button.innerHTML) && standbyForOperation.length < 2) {             
            prepareFirstNumber.push(button.innerHTML);
            console.log(prepareFirstNumber);      
        } else if (isNaN(button.innerHTML) && button.innerHTML !== 'equals') {     
            let firstNumber = '';        
            prepareFirstNumber.forEach((num) => firstNumber += num);
            a = Number(firstNumber);    
            console.log(standbyForOperation);       
        } else if (!isNaN(button.innerHTML) && standbyForOperation.length < 2) {
            let secondNumber = '';        
            prepareSecondNumber.forEach((num) => secondNumber += num);
            b = Number(secondNumber);
            standbyForOperation.push(String(button.innerHTML), a, b);
            console.log(standbyForOperation);
        } else if (button.innerHTML === 'equals') {
            let operation = standbyForOperation[1];
            operate(operation, a, b);
        }
    })
})
