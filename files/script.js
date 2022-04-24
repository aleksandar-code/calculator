// Step 1. create basic math functions

function add(x, y) {
    let result = (+x) + (+y);

    return result;
    
}

function substract(x, y) {
    let result = (+x) - (+y);

    return result;
}

function multiply(x, y) {
    let result = (+x) * (+y);

    return result;
}

function divide(x, y) {
    let result = (+x) / (+y);

    return result;
}
// Step 2. create the function operate, 
// takes an operator and two numbers as parameters. 
// And then calls the functions on the numbers
// if operator + add(x, y); so operator variable will be a number
// 0 will be add, 1 substract 2 multiply 3 divide
// at the end of operation return the result

function operate(x, y, operator) {
    let result = 0;
    

    if (operator === '+') {
        result = add(x, y);
    }

    if (operator == "-") {
        result = substract(x, y);
    }

    if (operator == "*") {
        result = multiply(x, y);
    }

    if (operator == "/") {
        result = divide(x, y);
    }
     return +result;
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
let n2;
let rounder = 0;
var hasNumber = /\d/;  
let result = 0;
let key;

let equals = document.getElementById('equal');

let addi = document.getElementById('add');
let substracti = document.getElementById('substract');
let multiplyi = document.getElementById('multiply');
let dividei = document.getElementById('divide');
equals.addEventListener('click', (e) => {
    console.log(e.target);
    key = e.target.textContent;
    
});
addi.addEventListener('click', (e) => {
    console.log(e.target);
    operator = e.target.textContent;
    theDisplay.textContent = undefined;
});
substracti.addEventListener('click', (e) => {
    console.log(e.target);
    operator = e.target.textContent;
    theDisplay.textContent = undefined;
});
multiplyi.addEventListener('click', (e) => {
    console.log(e.target);
    operator = e.target.textContent;
    theDisplay.textContent = undefined;         

});
dividei.addEventListener('click', (e) => {
    console.log(e.target);
    operator = e.target.textContent;
    theDisplay.textContent = undefined;
});


btnNumber.addEventListener('click', (e) => {
    let verifyContent = e.target.textContent;
    console.log(verifyContent)
    
    if (hasNumber.test(verifyContent)) {
            

        if (!(n2))
            {

                theDisplay.textContent += e.target.textContent;
                n1 = theDisplay.textContent;
                
            }


        if(!(n2) && operator != undefined){
            n2 = e.target.textContent;
            
            }
       {    
            
    }}


    
    
    if (hasNumber.test(n2) && operator != undefined && key == '=') {
        
       result += operate(n1, n2, operator);
       theDisplay.textContent = result;
       
    }
     
   
});

