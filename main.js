var num1 = null;
var num2 = null;
var operator = null;
var prevKey = null;
var prevToolKey = null;
const basicToolKeys = ["add","subtract","divide","multiply","equal"];
const specialToolKeys = ["clear","percent","change-sign"]
const numKeys = ["1","2","3","4","5","6","7","8","9","0", "."];

const numberButtons = document.querySelectorAll('.num-keys');
const numInput = document.querySelector('.inputs');
numberButtons.forEach((numKey) => {
    numKey.addEventListener('click', (numKey) => {
        var number = numInput.textContent.trim();
        var numKeyPressed = numKey.target.id;

        if (basicToolKeys.includes(prevKey)){
            if (prevKey === "equal"){
                clearNum();
            }
            clearScreen();
            toolKeyPressColorChange(prevToolKey,"#FFC26F", "white");
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
        console.log(num1 + " " + operator + " " + num2)
    })
})

const toolButtons = document.querySelectorAll('.tool-keys');
toolButtons.forEach((toolKey) => {
    toolKey.addEventListener('click', (toolKey) => {
        var toolKeyPressed = toolKey.target.id;
        var currNumber = numInput.textContent.trim();
        if (toolKeyPressed === "clear"){
            resetAll();
            prevKey = toolKeyPressed;
        } else if (toolKeyPressed === "add"){
            if(prevToolKey != null && prevToolKey != toolKey ){
                toolKeyPressColorChange(prevToolKey,"#FFC26F", "white");
            }

            if (prevKey === "subtract" || prevKey === "multiply" || prevKey === "divide"){
                operator = "add";
            } else if (prevKey != "add" ){
                if (num1 === null || (num1 != null && prevKey === "equal")){
                    num1 = currNumber;
                } else if (num1 != null && num2 === null){
                    num2 = currNumber;
                    let result = operate(num1, num2, operator);
                    numInput.innerHTML = result;
                    num1 = result;
                    num2 = null;
                } 
            } 
            operator = "add";
            prevKey = toolKeyPressed;
            prevToolKey = toolKey;
            toolKeyPressColorChange(toolKey, "white","#FFC26F");
        } else if (toolKeyPressed === "subtract"){
            if(prevToolKey != null && prevToolKey != toolKey){
                toolKeyPressColorChange(prevToolKey,"#FFC26F", "white");
            }
            if (prevKey === "add" || prevKey === "multiply" || prevKey === "divide"){
                operator = "subtract";
            }else if (prevKey != "subtract"){
                if (num1 === null || (num1 != null && prevKey === "equal")){
                    num1 = currNumber;
                } else if (num1 != null && num2 === null){
                    num2 = currNumber;
                    let result = operate(num1, num2, operator);
                    numInput.innerHTML = result;
                    num1 = result;
                    num2 = null;
                } 
            }
            operator = "subtract";
            prevKey = toolKeyPressed;
            prevToolKey = toolKey;
            toolKeyPressColorChange(toolKey, "white","#FFC26F");
        } else if (toolKeyPressed === "multiply"){
            if(prevToolKey != null && prevToolKey != toolKey){
                toolKeyPressColorChange(prevToolKey,"#FFC26F", "white");
            }
            
            if (prevKey === "divide" || prevKey === "add" || prevKey === "subtract"){
                operator = "multiply";
            }else if (prevKey != "multiply"){
                if (num1 === null || (num1 != null && prevKey === "equal")){
                    num1 = currNumber;
                } else if (num1 != null && num2 === null){
                    num2 = currNumber;
                    console.log("hi")
                    let result = operate(num1, num2, operator);
                    numInput.innerHTML = result;
                    num1 = result;
                    num2 = null;
                } 
            }
            operator = "multiply";
            prevKey = toolKeyPressed;
            prevToolKey = toolKey;
            toolKeyPressColorChange(toolKey, "white","#FFC26F");
        } else if (toolKeyPressed === "divide"){
            if(prevToolKey != null && prevToolKey != toolKey){
                toolKeyPressColorChange(prevToolKey,"#FFC26F", "white");
            }

            if (prevKey === "add" || prevKey === "multiply" || prevKey === "subtract"){
                operator = "divide";
            }else if (prevKey != "divide"){
                if (num1 === null || (num1 != null && prevKey === "equal")){
                    num1 = currNumber;
                } else if (num1 != null && num2 === null){
                    num2 = currNumber;
                    let result = operate(num1, num2, operator);
                    numInput.innerHTML = result;
                    num1 = result;
                    num2 = null;
                } 
            }
            operator = "divide";
            prevKey = toolKeyPressed;
            prevToolKey = toolKey;
            toolKeyPressColorChange(toolKey, "white","#FFC26F");
        } else if (toolKeyPressed === "equal"){
            if (num2 === null){
                num2 = currNumber;
            }
            let result = operate(num1, num2, operator);
            if (!lengthGood(result.toString())){
                result = parseFloat(result.toString().substring(0,11));
            }
            
            numInput.innerHTML = result;
            prevKey = toolKeyPressed;
            num1 = result;
            num2 = null;
        }
        console.log(num1 + " " + operator + " " + num2)
    });
});

function resetAll (){
    clearNum();
    clearScreen();
    toolButtons.forEach((keys) => {
        if (basicToolKeys.includes(keys.id)){
            keys.style.backgroundColor = "#FFC26F";
        }
        keys.style.color = "white";
    })
}
function clearScreen (){
    numInput.innerHTML = "";
}

function toolKeyPressColorChange(toolKey, backgroundColor, fontColor){
    toolKey.target.style.backgroundColor = backgroundColor;
    toolKey.target.style.color = fontColor;
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
            return multiply(num1, num2);
        case 'divide':
            return divide(num1, num2);
    }
}

