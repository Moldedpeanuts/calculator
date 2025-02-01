let num1;
let num2;

let add = '+';
let subtract = '-';
let divide = '/'; 
let multiply = '*';


// Starting operating functions

function addition(num1, num2) {
    return (+num1 + +num2);
}

function subtraction(num1, num2) {
    return num1 - num2;
}

function multiplication(num1, num2) {
    return num1 * num2;
}

function division(num1, num2) {
    if(num2 === '0') {
        return "LOL";
    }
    return num1 / num2;
}


function operate(num1, num2, operator) {
    if(operator === add) {
        return addition(num1, num2);

    } else if(operator === subtract) {
        return subtraction(num1, num2);

    } else if(operator === multiply) {
        return multiplication(num1, num2);

    } else if(operator === divide) {
        return division(num1, num2)
    }
}


// Digit Buttons logic: role only to append number content to display

let buttonsDigit = document.querySelectorAll('.digit');

buttonsDigit = Array.from(buttonsDigit);  // now buttonsDigits is a true Array

buttonsDigit = buttonsDigit.reduce((acc, button) => {
        acc[button.id] = button;

        return acc;
}, {});   // buttonsDigit object with digit buttons Nodes


const display = document.querySelector('.display');


for(let button in buttonsDigit) {
    buttonsDigit[button].addEventListener('click', () => {
        if(operator === undefined && result === undefined) {
            display.textContent += buttonsDigit[button].textContent;
            num1 = display.textContent;          // first round of calculations, both operator and result are undefined
        }
        if(operator && result === undefined ) {
            if(display.textContent === operator) {
                display.textContent = '';   // empty display if it has the text of an operator button
            } 
            display.textContent += buttonsDigit[button].textContent;
            num2 = display.textContent;   // works
        }

        
    });
}


// Operator buttons logic: handling operations between numbers

let buttonsSymbol = document.querySelectorAll('.operator');

buttonsSymbol = Array.from(buttonsSymbol); // convert NodeList to true Array

buttonsSymbol = buttonsSymbol.reduce((acc, button) => {
        acc[button.id] = button;

        return acc;
}, {});


let operator;

for(let button in buttonsSymbol) {
    buttonsSymbol[button].addEventListener('click', () => {
        operator = buttonsSymbol[button].textContent;
        display.textContent = operator;
    });
}


// Calling operate

let assign = document.querySelector('.assign');


let result;

assign.addEventListener('click', () => {
    result = operate(num1, num2, operator);
    display.textContent = result;
    result = null;
    operator = null;
    if(operator && result === null) {
        num1 = result;
    }
});