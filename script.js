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
    
    counter = 1;
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
    
    

     return result;
}

// Step 3. html & css 



// Step 4. create funcitons that populate the display
// when a button number is clicked
// and store the textContent of it 
// in a variable called n1

let btnNumber = document.getElementById('buttons');



// input of user 
let input = [];
let j = 0;
let n1 =[];
let counter = 0;
let operator;
let n2 = [];
let n3 = [];
var hasNumber = /\d/;  
let result = null;
let key = null;
let i = 0;

// topdis output the numbers and botdis output result
let topdis = document.getElementById('topdisplay');
let botdis = document.getElementById('botdisplay');


let clear = document.getElementById('clear');

let equals = document.getElementById('equal');

let addi = document.getElementById('add');
let substracti = document.getElementById('substract');
let multiplyi = document.getElementById('multiply');
let dividei = document.getElementById('divide');

let decimal = document.getElementById('decimal');

equals.addEventListener('click', (e) => {
    
    console.log(e.target);
//    may be this function isn't the best way to get the desired output 

    key = e.target.textContent;
    
    result = operate(n1, n2, operator);
    console.log(result)
    if (key && operator == '+') {
        
        topdis.textContent = undefined;
        
        
        n1 = result;
        
    }
    if (key && operator == '-') {
        
        topdis.textContent = undefined;
        
        
        n1 = result;
        
    }
    if (key && operator == '*' ) {
        
        topdis.textContent = undefined;
        
       
        n1 = result;
        
    }
    if (key && operator == '/' ) {
        
        topdis.textContent = undefined;
        
        
        n1 = result;
        
    }
    
    
    getPreviousResult(result);
    botdis.textContent = n1;
    operator = null;
    key = null;
  
    


    
// do a function if click once to equals then n3, n3, operator

// do is it just multiply text ?
   


});

clear.addEventListener('click', (e) => {
    n1 = null;
    n2 = null;
    result = null;
    topdis.textContent = null;
    botdis.textContent = null;
    operator = null;
    key = null;
});

addi.addEventListener('click', (e) => {
    console.log(e.target);
    topdis.textContent = undefined;
    if (operator && counter != 1 && n2 != null ) {
        result = operate(n1,n2,operator)
        n1 = result;
        botdis.textContent = n1
    }
    operator = e.target.textContent;
    counter = 0;
    
    
});
substracti.addEventListener('click', (e) => {
    console.log(e.target);
    topdis.textContent = undefined;
    if (operator && counter != 1 && n2 != null ) {
        result = operate(n1,n2,operator)
        n1 = result;
        botdis.textContent = n1
    }
    operator = e.target.textContent;
    counter = 0;

});
multiplyi.addEventListener('click', (e) => {
    console.log(e.target);
    topdis.textContent = undefined;
    if (operator && counter != 1 && n2 != null) {
        result = operate(n1,n2,operator)
        n1 = result;
        botdis.textContent = n1
    }
    operator = e.target.textContent;
    counter = 0;
    
    
});
dividei.addEventListener('click', (e) => {
    console.log(e.target);
    topdis.textContent = undefined;
    if (operator && counter != 1 && n2 != null) {
        result = operate(n1,n2,operator)
        n1 = result;
        botdis.textContent = n1
    }
    operator = e.target.textContent;
    counter = 0;
    

});
decimal.addEventListener('click', (e) => {
    console.log(e.target);
    
    if (topdis.textContent.match((/\./))) {
        alert("You can't input more than 1 dot");
        return 0;
   }
   
   
   
   
   topdis.textContent += e.target.textContent;
   
   
});


btnNumber.addEventListener('click', (e) => {
    let verifyContent = e.target.textContent;
    console.log(verifyContent)
    if (key != null && result != null) {
        operator = null;
    }
    
    if(hasNumber.test(verifyContent) && operator == null) {
        
        input[i] = e.target.textContent;
        
        topdis.textContent += e.target.textContent
        
        n1 = topdis.textContent;
        
        ++i;
        
        
    }
   
    if (operator && hasNumber.test(verifyContent)) {
        
        input[j] = e.target.textContent;
       
        topdis.textContent += e.target.textContent;
        n2 = topdis.textContent;
        

        ++j;
        
    }
    
    
    if (result == Infinity) {
        botdis.textContent = "Stop it get some help";
        n1 = null;
        n2 = null;
        result = null;
        alert('The result is 0 lmao');
    }
    else if (isNaN(result)) {
        botdis.textContent = "Stop it get some help";
        n1 = null;
        n2 = null;
        result = null;
        alert('ERROR, launching the missiles');
    }
    

});


function getPreviousResult(a) {
    n3 += a;


}
