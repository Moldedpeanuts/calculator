let num1;  // declared globally to access later
let num2;

let add = '+';
let subtract = '-';
let multiply = '*';
let divide = '/';



function addition(num1, num2) {
    return num1 + num2;
}

function subtraction(num1, num2) {
    return num1 - num2;
}

function multiplication(num1, num2) {
    return num1 * num2;
}

function division(num1, num2) {
    if(num2 === 0) {
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



// Creating a buttonsDigit object that contains references to all buttons except = and clear button

let buttons = document.querySelectorAll('.displaybtn');

buttons = Array.from(buttons);  // now buttonsDigits is a true Array

buttons = buttons.reduce((acc, button) => {
        acc[button.id] = button;

        return acc;
}, {});


// Creating a link to display div

const display = document.querySelector('.display');

// loop over object and attach Event Listeners to each digit button

let totalNumber;

for(let button in buttons) {
    buttons[button].addEventListener('click', () => {
        display.textContent += buttons[button].textContent;

        totalNumber = display.textContent;
    });
}


