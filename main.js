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
    switch (operator){
        case 'add':
            add(num1, num2);
            break;
        case 'subtract':
            subtract(num1, num2);
            break;
        
    }
}