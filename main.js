var num1 = null;
var num2 = null;
var operator = null;
var prevKey = null;
const toolKeys = ["add","subtract","divide","multiply","clear","percent","change-sign","equal"];
const numKeys = ["1","2","3","4","5","6","7","8","9","0", "."];

const numberButtons = document.querySelectorAll('.num-keys');
const numInput = document.querySelector('.inputs');
numberButtons.forEach((numKey) => {
    numKey.addEventListener('click', (numKey) => {
        var number = numInput.textContent.trim();
        var numKeyPressed = numKey.target.id;

        if (toolKeys.includes(prevKey)){
            if (prevKey === "equal"){
                clearNum();
            }
                clearScreen();
        }
        if (numKeyPressed === "."){
            if (!hasDecimal(number) && lengthGood(number)){
                numInput.innerHTML += numKey.target.id;
                prevKey = numKeyPressed;
            }
        } else {
            if (lengthGood(number)){
                numInput.innerHTML += numKey.target.id;
                prevKey = numKeyPressed;
            }
        }
        console.log(num1 + " " + num2 + " " + operator)
    })
})

const toolButtons = document.querySelectorAll('.tool-keys');
toolButtons.forEach((toolKey) => {
    toolKey.addEventListener('click', (toolKey) => {
        var toolKeyPressed = toolKey.target.id;
        var currNumber = numInput.textContent.trim();
        if (toolKeyPressed === "clear"){
            clearScreen();
            clearNum();
            prevKey = toolKeyPressed;
        } else if (toolKeyPressed === "add"){
            if (num1 != null){
                num2 = currNumber
                num1 = operate(num1, num2, operator);
                numInput.innerHTML = num1;
            } else {
                num1 = currNumber
            }
            operator = "add";
            prevKey = toolKeyPressed;
        } else if (toolKeyPressed === "subtract"){
            if (num1 != null){
                num2 = currNumber
                num1 = operate(num1, num2, operator);
                numInput.innerHTML = num1;
            } else {
                num1 = currNumber
            }
            operator = "subtract";
            prevKey = toolKeyPressed;
        } else if (toolKeyPressed === "equal"){
            num2 = currNumber;
            let result = operate(num1, num2, operator);
            numInput.innerHTML = result;
            prevKey = toolKeyPressed;
            num1 = num2;
            num2 = result;
        }
        console.log(num1 + " " + num2 + " " + operator)
    });
});


function clearScreen (){
    numInput.innerHTML = "";
}

function clearNum (){
    num1 = null;
    num2 = null;
    operator = null;
}

function lengthGood (num){
    if (num.length >= 11){
        return false;
    }
    return true;
}

function hasDecimal (num){
    if (num.includes('.')){
        return true;
    }
    return false;
}

function add(num1, num2){
    return num1 + num2;
}

function subtract (num1, num2){
    return num1 - num2;
}

function multiply (num1 , num2){
    return num1 * num2;
}

function divide (){
    return num1 / num2;
}   

function operate (num1, num2, operator){
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    switch (operator){
        case 'add':
            return add(num1, num2);
        case 'subtract':
            return subtract(num1, num2);
        case 'multiply':
            return multiply(num1. num2);
        case 'divide':
            return divide(num1, num2);
    }
}

