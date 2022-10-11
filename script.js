const equals = document.querySelectorAll(".equal");
const plus = document.getElementById("plus");
const decimal = document.getElementById("decimal");
const minus = document.getElementById("minus");
const multiply = document.getElementById("multiply");
const divide = document.getElementById("divide");
const numbers = document.querySelectorAll(".number");
const buttons = document.querySelectorAll(".button");
const restarts = document.getElementById("reset");
let input1 = [];
let input2 = [];
let turn = input1;
let screen = document.getElementById("screen");
let moreData = [];
let answer = 0;
let symbolText = "";
function numberClick(event) {
  const num = event.target;
  const numClicked = num.innerText;
  if (turn === input1) {
    attach = input1.push(numClicked);
    combined = input1.join("");
    screen.innerText = combined;
    console.log("input 1: " + combined);
  } else if (turn === input2) {
    attach = input2.push(numClicked);
    combined = input2.join("");
    screen.innerText = combined;
    console.log("input 2: " + combined);
  } else if (turn === moreData) {
    attach = input2.push(numClicked);
    combined = input2.join("");
    screen.innerText = combined;
    console.log("input 2: " + combined);
  }
}

function symbolClick(event) {
  const symbol = event.target;
  const symbolClicked = symbol.innerText;
  if (symbolClicked === multiply.innerText && moreData === answer) {
    symbolText = "**";
    console.log(symbolText);
    turn = moreData;
    input2.splice(0, input2.length);
  } else if (symbolClicked === divide.innerText && moreData === answer) {
    symbolText = "//";
    console.log(symbolText);
    turn = moreData;
    input2.splice(0, input2.length);
  } else if (symbolClicked === minus.innerText && moreData === answer) {
    symbolText = "--";
    console.log(symbolText);
    turn = moreData;
    input2.splice(0, input2.length);
  } else if (symbolClicked === plus.innerText && moreData === answer) {
    symbolText = "++";
    console.log(symbolText);
    turn = moreData;
    input2.splice(0, input2.length);
  } else if (symbolClicked === multiply.innerText) {
    symbolText = "*";
    console.log(symbolText);
    turn = input2;
  } else if (symbolClicked === divide.innerText) {
    symbolText = "/";
    console.log(symbolText);
    turn = input2;
  } else if (symbolClicked === minus.innerText) {
    symbolText = "-";
    console.log(symbolText);
    turn = input2;
  } else if (symbolClicked === plus.innerText) {
    symbolText = "+";
    console.log(symbolText);
    turn = input2;
  }
}

function equalsClick() {
  if (symbolText === "*") {
    answer = input1.join("") * input2.join("");
    screen.innerText = answer;
    console.log("output: " + answer);
    moreData = answer;
  } else if (symbolText === "**") {
    answer = moreData * input2.join("");
    screen.innerText = answer;
    console.log("output: " + answer);
    moreData = answer;
  } else if (symbolText === "/") {
    answer = input1.join("") / input2.join("");
    screen.innerText = answer;
    console.log("output: " + answer);
    moreData = answer;
  } else if (symbolText === "//") {
    answer = moreData / input2.join("");
    screen.innerText = answer;
    console.log("output: " + answer);
    moreData = answer;
  } else if (symbolText === "+") {
    input1add = Number(input1.join(""));
    input2add = Number(input2.join(""));
    answer = input1add + input2add;
    screen.innerText = answer;
    console.log("output: " + answer);
    moreData = answer;
  } else if (symbolText === "++") {
    input1add = Number(input1.join(""));
    input2add = Number(input2.join(""));
    answer = moreData + input2add;
    screen.innerText = answer;
    console.log("output: " + answer);
    moreData = answer;
  } else if (symbolText === "-") {
    input1Minus = Number(input1.join(""));
    input2Minus = Number(input2.join(""));
    answer = input1Minus - input2Minus;
    screen.innerText = answer;
    console.log("output: " + answer);
    moreData = answer;
  } else if (symbolText === "--") {
    input1add = Number(input1.join(""));
    input2add = Number(input2.join(""));
    answer = moreData - input2add;
    screen.innerText = answer;
    console.log("output: " + answer);
    moreData = answer;
  } else if (symbolText === "") {
    restartClick();
  }
}

function restartClick() {
  input1.splice(0, input1.length);
  input2.splice(0, input2.length);
  moreData = [];
  screen.innerText = "0";
  turn = input1;
}

restarts.addEventListener("click", restartClick);
numbers.forEach((num) => num.addEventListener("click", numberClick));
buttons.forEach((symbol) => symbol.addEventListener("click", symbolClick));
equals.forEach((equal) => equal.addEventListener("click", equalsClick));
