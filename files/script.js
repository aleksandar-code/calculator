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

// Step 3. 