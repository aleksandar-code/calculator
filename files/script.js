// Step 1. create basic math functions

function add(x, y) {
    return x + y;
}

function substract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    return x / y;
}
// Step 2. create the function operate, 
// takes an operator and two numbers as parameters. 
// And then calls the functions on the numbers
// if operator + add(x, y); so operator variable will be a number
// 0 will be add, 1 substract 2 multiply 3 divide
// at the end of operation return the result

function operate(x, y, operator) {
    
    if (operator == 0) {
        return add(x, y);
    }

    if (operator == 1) {
        return substract(x, y);
    }

    if (operator == 2) {
        return multiply(x, y);
    }

    if (operator == 3) {
        return divide(x, y);
    }
    return 'error';
}

// Step 3. html & css 

// Step 4. create funcitons that populate the display
// when a button number is clicked
// and store the textContent of it 
// in a variable called n1

let btnNumber = document.getElementById('buttons');

let theDisplay = document.getElementById('display');

// input of user 
let n1;
let operator;

var hasNumber = /\d/;  
theDisplay.textContent = n1;

btnNumber.addEventListener('click', (e) => {
    let verifyContent = e.target.textContent;
    if (!(hasNumber.test(verifyContent))) {
        operator = e.target.textContent;
       
       console.log(theDisplay)

    }
});

btnNumber.addEventListener('click', (e) => {
    let verifyContent = e.target.textContent;
    console.log(verifyContent)
    if (hasNumber.test(verifyContent)) 
       {
            n1 = e.target.textContent;
            theDisplay.textContent = n1;
            console.log(theDisplay)
    }
   
});

