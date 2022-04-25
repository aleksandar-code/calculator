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
let input = [];
let j = 0;
let n1 =[];
let counter;
let operator;
let n2 = [];
let n3 = [];
let keepGoing = true;
var hasNumber = /\d/;  
let result = 0;
let key = [];
let i = 0;


let equals = document.getElementById('equal');

let addi = document.getElementById('add');
let substracti = document.getElementById('substract');
let multiplyi = document.getElementById('multiply');
let dividei = document.getElementById('divide');

let decimal = document.getElementById('decimal');

equals.addEventListener('click', (e) => {
    
    console.log(e.target);
   
    key += e.target.textContent;
    
    result = operate(n1, n2, operator);
    console.log(result)
    if (key && operator == '+') {
        
        theDisplay.textContent = undefined;
        
        
        n1 = result;
        
    }
    if (key && operator == '-') {
        
        theDisplay.textContent = undefined;
        
        
        n1 = result;
        
    }
    if (key && operator == '*' ) {
        
        theDisplay.textContent = undefined;
        
       
        n1 = result;
        
    }
    if (key && operator == '/' ) {
        
        theDisplay.textContent = undefined;
        
        
        n1 = result;
        
    }
    
    
    getPreviousResult(result);
    theDisplay.textContent = result;

    
// do a function if click once to equals then n3, n3, operator

// do is it just multiply text ?
   

    
    
});
addi.addEventListener('click', (e) => {
    console.log(e.target);
    theDisplay.textContent = undefined;
    operator = e.target.textContent;
    
    
    
});
substracti.addEventListener('click', (e) => {
    console.log(e.target);
    theDisplay.textContent = undefined;
    operator = e.target.textContent;
    

});
multiplyi.addEventListener('click', (e) => {
    console.log(e.target);
    theDisplay.textContent = undefined;
    operator = e.target.textContent;
   

});
dividei.addEventListener('click', (e) => {
    console.log(e.target);
    theDisplay.textContent = undefined;
    operator = e.target.textContent;
    

});
decimal.addEventListener('click', (e) => {
    console.log(e.target);
    
  

    theDisplay.textContent += e.target.textContent;
    

});


btnNumber.addEventListener('click', (e) => {
    let verifyContent = e.target.textContent;
    console.log(verifyContent)
    
    if(hasNumber.test(verifyContent) && operator == undefined) {
        
        input[i] = e.target.textContent;
       
        theDisplay.textContent += e.target.textContent
        n1 = theDisplay.textContent;
          
        ++i;
        
        
    }
    else if (operator && hasNumber.test(verifyContent)) {
        
        input[j] = e.target.textContent;
       
        theDisplay.textContent += e.target.textContent;
        n2 = theDisplay.textContent;
        

        ++j;
        
    }
    



});


function getPreviousResult(a) {
    n3 += a;


}
