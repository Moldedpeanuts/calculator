let num1;
let num2;

let add = '+';
let subtract = '-';
let multiply = '*';
let divide = '/';


// Starting operating functions

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





// Digit Buttons logic: role only to append number content to display

let buttonsDigit = document.querySelectorAll('.digit');

buttonsDigit = Array.from(buttonsDigit);  // now buttonsDigits is a true Array

buttonsDigit = buttonsDigit.reduce((acc, button) => {
        acc[button.id] = button;

        return acc;
}, {});

const display = document.querySelector('.display');

for(let button in buttonsDigit) {
    buttonsDigit[button].addEventListener('click', () => {
        num1 = display.textContent += buttonsDigit[button].textContent;
    });
}



// Symbol buttons logic: handling operations between numbers

