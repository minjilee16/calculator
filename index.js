const one = document.querySelector('#one');
const two = document.querySelector('#two');
const three = document.querySelector('#three');
const four = document.querySelector('#four');
const five = document.querySelector('#five');
const six = document.querySelector('#six');
const seven = document.querySelector('#seven');
const eight = document.querySelector('#eight');
const nine = document.querySelector('#nine');
const zero = document.querySelector('#zero');
const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');
const mutiply = document.querySelector('.mutiply');
const divide = document.querySelector('.divide');
const equal = document.querySelector('.equal');
const result = document.querySelector('.result');
const dot = document.querySelector('#dot');
const clear = document.querySelector('.clear');
let sum = ""; 

const numbersAndOperator = function () {
  const operators = "+-x÷";
  if( operators.indexOf(this.innerHTML) !== -1 && sum === "" ) {
    console.log('checking')
    result.innerHTML = "";
  }
  if( operators.indexOf(this.innerHTML) !== -1 && operators.indexOf(sum[sum.length-1]) !== -1 ) {
    let slicedSum = sum.slice(0, sum.length-1);
    slicedSum += this.innerHTML;
    sum = slicedSum;
    result.innerHTML = sum;
  } else {
    sum += this.innerHTML;
    result.innerHTML = sum;
  }
  result.style.color = "white";
}

const calculate = function () {
  const replacedDivideOperator= sum.replace("÷", "/").replace('x', "*");
  sum = eval(replacedDivideOperator);
  result.innerHTML = sum;
}

const clearString = function () {
  sum = "";
  result.innerHTML ="0";
  result.style.color ="#FEC5D6";
}

one.addEventListener('click', numbersAndOperator);
two.addEventListener('click', numbersAndOperator);
three.addEventListener('click', numbersAndOperator);
four.addEventListener('click', numbersAndOperator);
five.addEventListener('click', numbersAndOperator);
six.addEventListener('click', numbersAndOperator);
seven.addEventListener('click', numbersAndOperator);
eight.addEventListener('click', numbersAndOperator);
nine.addEventListener('click', numbersAndOperator);
zero.addEventListener('click', numbersAndOperator);
plus.addEventListener('click', numbersAndOperator);
minus.addEventListener('click', numbersAndOperator);
mutiply.addEventListener('click', numbersAndOperator);
divide.addEventListener('click', numbersAndOperator);
equal.addEventListener('click', calculate);
dot.addEventListener('click', numbersAndOperator);
clear.addEventListener('click', clearString);