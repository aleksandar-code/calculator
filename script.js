
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
  result =  Math.round(result * 100) / 100;
  console.log(result)
     return result;
}

let btnNumber = document.getElementById('buttons');
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

returnVariable = false;
topdis.textContent = ""

function checkTopDis(topdis) {
    if (topdis.textContent.length > 22) {
        returnVariable = true;
    }
    else {
        returnVariable = false;
    }
}

btnNumber.addEventListener('click', (e) => {
    checkTopDis(topdis)
    if (returnVariable == true) return
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
     if (isNaN(result)) {
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
