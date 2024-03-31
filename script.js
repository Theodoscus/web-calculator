const resultScreen = document.getElementById('result');
const calcScreen = document.getElementById('calculation');
const ac = document.getElementById('ac');
const c = document.getElementById('c');
const btn0 = document.getElementById('0');
const btn1 = document.getElementById('1');
const btn2 = document.getElementById('2');
const btn3 = document.getElementById('3');
const btn4 = document.getElementById('4');
const btn5 = document.getElementById('5');
const btn6 = document.getElementById('6');
const btn7 = document.getElementById('7');
const btn8 = document.getElementById('8');
const btn9 = document.getElementById('9');
const btndot = document.getElementById('dot');
const btnequal = document.getElementById('equal');
const btnadd = document.getElementById('add');
const btnsub = document.getElementById('substract');
const btnmul = document.getElementById('multiply');
const btndiv = document.getElementById('divide');

resultScreen.textContent = '0';
calcScreen.textContent ='0';
let calcflag = false;
let dotflag = false;
let num1 = 0;
let num2 = 0;
let calculation = '';
let negativenum = false;

ac.addEventListener('click', function() {
    resultScreen.textContent = '0';
    calcScreen.textContent ='0';
    calcflag = false;
    equalflag = false;
    num1 = 0;
    num2 = 0;
    calculation = '';
});

c.addEventListener('click', function() {
    // if (calcScreen.textContent!=0){
    //     let numbers = calcScreen.textContent.match(/(\d+(\.\d+)?)([+\-x\/]?)(\d+(\.\d+)?)/);
    //     console.log(numbers);
    //     let onlynum = numbers[0]
    //     let firstnum = numbers[1];
    //     let operator = numbers[3];
    //     let secondnum = numbers[4];
    //     console.log(numbers[1]);
    //     console.log(numbers[3]);
    //     console.log(numbers[4]);
        
    //     if (secondnum!=='' && operator!==''){
    //         calcScreen.textContent=firstnum+operator;
            
    //     }else if (operator!=='' && secondnum===''){
    //         calcScreen.textContent=onlynum;
    //         calcflag=false;}
    //      }else{
    //          calcScreen.textContent=0;

        
    // }
    if (calcScreen.textContent.length > 1 && calcScreen.textContent!=0) {
        const lastChar = calcScreen.textContent[calcScreen.textContent.length - 1];
        if (lastChar === '+' || lastChar === '-' || lastChar === 'x' || lastChar === '/') {
            calcflag = false;
        }
        string = calcScreen.textContent.slice(0, -1);
        calcScreen.textContent = string;}else{
            calcScreen.textContent=0;
        }
});

btnadd.addEventListener('click', function() {
    if ((calcflag==false)&&(calcScreen.textContent.length<19)){
        calcScreen.textContent += '+';
        calculation='add';
        calcflag=true;
    }
    
});

btnsub.addEventListener('click', function() {
    if ((calcflag==false)&&(calcScreen.textContent.length<19)){
        calcScreen.textContent += '-';
        calculation='substract';
        calcflag=true;
    }
    
});

btnmul.addEventListener('click', function() {
    if ((calcflag==false)&&(calcScreen.textContent.length<19)){
        calcScreen.textContent += 'x';
        calculation='multiply';
        calcflag=true;
    }
    
});

btndiv.addEventListener('click', function() {
    if ((calcflag==false)&&(calcScreen.textContent.length<19)){
        calcScreen.textContent += '/';
        calculation='divide';
        calcflag=true;
    }
    
});

btndot.addEventListener('click', function() {
    const dotRegex = /\./g;
    const dotCount = (calcScreen.textContent.match(dotRegex) || []).length;
    if(calcScreen.textContent.length<19){
        if(dotCount==0 && calcflag==false){
            calcScreen.textContent += '.';
            dotflag=false;
        }else if(dotCount==0 && calcflag==true){
            calcScreen.textContent += '.';
            dotflag = true;
        }else if(dotCount==1 && calcflag==true &&dotflag==false){
            calcScreen.textContent += '.';
        }
        console.log(calcflag);
        }
});


btnequal.addEventListener('click', function() {
    if((calcflag==true)&&(calculation=='add')){
        const regex = /(-?\d+(\.\d+)?)\+(\d+(\.\d+)?)/; 
        const match = calcScreen.textContent.match(regex);
        num1 = parseFloat(match[1]); 
        num2 = parseFloat(match[3]);
        const sum = add(num1, num2);
        if (sum.toString().length>18){
            resultScreen.textContent="Error"
        } else {
        resultScreen.textContent=sum;
        calcScreen.textContent=sum;
        calcflag=false;
    }

    }else if((calcflag==true)&&(calculation=='substract')){
        const regex = /(-?\d+(\.\d+)?)\-(\d+(\.\d+)?)/; 
        const match = calcScreen.textContent.match(regex);
        num1 = parseFloat(match[1]); 
        num2 = parseFloat(match[3]);
        console.log(num1, num2)
        const sum = substract(num1, num2);
        if (sum.toString().length>18){
            resultScreen.textContent="Error"
        } else {
        resultScreen.textContent=sum;
        calcScreen.textContent=sum;
        calcflag=false;
    }
    }else if((calcflag==true)&&(calculation=='multiply')){
        const regex = /(-?\d+(\.\d+)?)\x(\d+(\.\d+)?)/; 
        const match = calcScreen.textContent.match(regex);
        num1 = parseFloat(match[1]); 
        num2 = parseFloat(match[3]);
        const sum = multiply(num1, num2);
        if (sum.toString().length>18){
            resultScreen.textContent="Error"
        } else {
        resultScreen.textContent=sum;
        calcScreen.textContent=sum;
        calcflag=false;
    }
    }else if((calcflag==true)&&(calculation=='divide')){
        const regex = /(-?\d+(\.\d+)?)\/(\d+(\.\d+)?)/; 
        const match = calcScreen.textContent.match(regex);
        num1 = parseFloat(match[1]); 
        num2 = parseFloat(match[3]);
        if(num2!=0){
            const sum = divide(num1, num2);
            console.log(sum.length);
            if (sum.toString().length>16){
                resultScreen.textContent="Error"
            } else {
            resultScreen.textContent=sum;
            calcScreen.textContent=sum;
            calcflag=false;}
        }else{
            resultScreen.textContent='MathError';
        }
    }
});

btn0.addEventListener('click', function() {
    if((calcScreen.textContent!='0')&&(calcScreen.textContent.length<20)){
        calcScreen.textContent = calcScreen.textContent+0;
    }
});

btn1.addEventListener('click', function() {
    if(calcScreen.textContent=='0'){
        calcScreen.textContent='1'  
    }else if(calcScreen.textContent.length<20){
        calcScreen.textContent=calcScreen.textContent+1;
    }
});

btn2.addEventListener('click', function() {
    if(calcScreen.textContent=='0'){
        calcScreen.textContent='2'  
    }else if(calcScreen.textContent.length<20){
        calcScreen.textContent=calcScreen.textContent+2;
    }
});

btn3.addEventListener('click', function() {
    if(calcScreen.textContent=='0'){
        calcScreen.textContent='3'  
    }else if(calcScreen.textContent.length<20){
        calcScreen.textContent=calcScreen.textContent+3;
    }
});

btn4.addEventListener('click', function() {
    if(calcScreen.textContent=='0'){
        calcScreen.textContent='4'  
    }else if(calcScreen.textContent.length<20){
        calcScreen.textContent=calcScreen.textContent+4;
    }
});

btn5.addEventListener('click', function() {
    if(calcScreen.textContent=='0'){
        calcScreen.textContent='5'  
    }else if(calcScreen.textContent.length<20){
        calcScreen.textContent=calcScreen.textContent+5;
    }
});

btn6.addEventListener('click', function() {
    if(calcScreen.textContent=='0'){
        calcScreen.textContent='6'  
    }else if(calcScreen.textContent.length<20){
        calcScreen.textContent=calcScreen.textContent+6;
    }
});

btn7.addEventListener('click', function() {
    if(calcScreen.textContent=='0'){
        calcScreen.textContent='7'  
    }else if(calcScreen.textContent.length<20){
        calcScreen.textContent=calcScreen.textContent+7;
    }
});

btn8.addEventListener('click', function() {
    if(calcScreen.textContent=='0'){
        calcScreen.textContent='8'  
    }else if(calcScreen.textContent.length<20){
        calcScreen.textContent=calcScreen.textContent+8;
    }
});

btn9.addEventListener('click', function() {
    if(calcScreen.textContent=='0'){
        calcScreen.textContent='9'  
    }else if(calcScreen.textContent.length<20){
        calcScreen.textContent=calcScreen.textContent+9;
    }
});

function add(num1, num2){
    return num1+num2;
}

function substract(num1, num2){
    return num1-num2;
}

function multiply(num1, num2){
    return num1*num2;
}

function divide(num1, num2){
    return num1/num2;
}