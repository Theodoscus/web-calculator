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
let equalflag = false;
let num1 = 0;
let num2 = 0;
let calculation = '';

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
    resultScreen.textContent = '0';
    calcScreen.textContent ='0';
});

btnadd.addEventListener('click', function() {
    if (calcflag==false){
        calcScreen.textContent += '+';
        calculation='add';
        calcflag=true;
    }
    
});

btnsub.addEventListener('click', function() {
    if (calcflag==false){
        calcScreen.textContent += '-';
        calculation='substract';
        calcflag=true;
    }
    
});

btnmul.addEventListener('click', function() {
    if (calcflag==false){
        calcScreen.textContent += 'x';
        calculation='multiply';
        calcflag=true;
    }
    
});

btndiv.addEventListener('click', function() {
    if (calcflag==false){
        calcScreen.textContent += '/';
        calculation='divide';
        calcflag=true;
    }
    
});

btndot.addEventListener('click', function() {
        calcScreen.textContent += '.';
});


btnequal.addEventListener('click', function() {
    if((calcflag==true)&&(calculation=='add')){
        const regex = /(\d+(\.\d+)?)\+(\d+(\.\d+)?)/; 
        const match = calcScreen.textContent.match(regex);
        num1 = parseFloat(match[1]); 
        num2 = parseFloat(match[3]);
        const sum = add(num1, num2);
        resultScreen.textContent=sum;

    }else if((calcflag==true)&&(calculation=='substract')){
        const regex = /(\d+(\.\d+)?)\-(\d+(\.\d+)?)/; 
        const match = calcScreen.textContent.match(regex);
        num1 = parseFloat(match[1]); 
        num2 = parseFloat(match[3]);
        const sum = substract(num1, num2);
        resultScreen.textContent=sum;
    }else if((calcflag==true)&&(calculation=='multiply')){
        const regex = /(\d+(\.\d+)?)\x(\d+(\.\d+)?)/; 
        const match = calcScreen.textContent.match(regex);
        num1 = parseFloat(match[1]); 
        num2 = parseFloat(match[3]);
        const sum = multiply(num1, num2);
        resultScreen.textContent=sum;
    }else if((calcflag==true)&&(calculation=='divide')){
        const regex = /(\d+(\.\d+)?)\/(\d+(\.\d+)?)/; 
        const match = calcScreen.textContent.match(regex);
        num1 = parseFloat(match[1]); 
        num2 = parseFloat(match[3]);
        if(num2!=0){
            const sum = divide(num1, num2);
            resultScreen.textContent=sum;
        }else{
            resultScreen.textContent='MathError';
        }
    }
});

btn0.addEventListener('click', function() {
    if((calcScreen.textContent!='0')&&(calcScreen.textContent.length<12)){
        calcScreen.textContent = calcScreen.textContent+0;
    }
});

btn1.addEventListener('click', function() {
    if(calcScreen.textContent=='0'){
        calcScreen.textContent='1'  
    }else if(calcScreen.textContent.length<12){
        calcScreen.textContent=calcScreen.textContent+1;
    }
});

btn2.addEventListener('click', function() {
    if(calcScreen.textContent=='0'){
        calcScreen.textContent='2'  
    }else if(calcScreen.textContent.length<12){
        calcScreen.textContent=calcScreen.textContent+2;
    }
});

btn3.addEventListener('click', function() {
    if(calcScreen.textContent=='0'){
        calcScreen.textContent='3'  
    }else if(calcScreen.textContent.length<12){
        calcScreen.textContent=calcScreen.textContent+3;
    }
});

btn4.addEventListener('click', function() {
    if(calcScreen.textContent=='0'){
        calcScreen.textContent='4'  
    }else if(calcScreen.textContent.length<12){
        calcScreen.textContent=calcScreen.textContent+4;
    }
});

btn5.addEventListener('click', function() {
    if(calcScreen.textContent=='0'){
        calcScreen.textContent='5'  
    }else if(calcScreen.textContent.length<12){
        calcScreen.textContent=calcScreen.textContent+5;
    }
});

btn6.addEventListener('click', function() {
    if(calcScreen.textContent=='0'){
        calcScreen.textContent='6'  
    }else if(calcScreen.textContent.length<12){
        calcScreen.textContent=calcScreen.textContent+6;
    }
});

btn7.addEventListener('click', function() {
    if(calcScreen.textContent=='0'){
        calcScreen.textContent='7'  
    }else if(calcScreen.textContent.length<12){
        calcScreen.textContent=calcScreen.textContent+7;
    }
});

btn8.addEventListener('click', function() {
    if(calcScreen.textContent=='0'){
        calcScreen.textContent='8'  
    }else if(calcScreen.textContent.length<12){
        calcScreen.textContent=calcScreen.textContent+8;
    }
});

btn9.addEventListener('click', function() {
    if(calcScreen.textContent=='0'){
        calcScreen.textContent='9'  
    }else if(calcScreen.textContent.length<12){
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