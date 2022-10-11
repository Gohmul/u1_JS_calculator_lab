const equals = document.querySelectorAll(".equal");
const plus = document.getElementById("plus");
const decimal = document.getElementById("decimal");
const minus = document.getElementById("minus");
const multiply = document.getElementById("multiply");
const divide = document.getElementById("divide");
const numbers = document.querySelectorAll(".number");
const buttons = document.querySelectorAll(".button");
let input1 = [];
let input2 = [];
let turn = input1;
let screen = document.getElementById("screen");
let moreData = [];
let toStr = 0;
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
    console.log("input 3: " + combined);
  }
}

function symbolClick(event) {
  const symbol = event.target;
  const symbolClicked = symbol.innerText;
  if (symbolClicked === multiply.innerText && moreData === toStr) {
    symbolText = "**";
    console.log(symbolText);
    turn = moreData;
    input2.splice(0, input2.length);
    console.log("input 3: " + input2);
    console.log(moreData);
  } else if (symbolClicked === divide.innerText && moreData === toStr) {
    symbolText = "//";
    console.log(symbolText);
    turn = moreData;
    input2.splice(0, input2.length);
    console.log("input 3: " + input2);
    console.log(moreData);
  } else if (symbolClicked === minus.innerText && moreData === toStr) {
    symbolText = "--";
    console.log(symbolText);
    turn = moreData;
    input2.splice(0, input2.length);
    console.log("input 3: " + input2);
    console.log(moreData);
  } else if (symbolClicked === plus.innerText && moreData === toStr) {
    symbolText = "++";
    console.log(symbolText);
    turn = moreData;
    input2.splice(0, input2.length);
    console.log("input 3: " + input2);
    console.log(moreData);
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
  console.log(moreData);
}

function equalsClick() {
  if (symbolText === "*") {
    toStr = input1.join("") * input2.join("");
    screen.innerText = toStr;
    console.log("output: " + toStr);
    moreData = toStr;
  } else if (symbolText === "**") {
    toStr = moreData * input2.join("");
    screen.innerText = toStr;
    console.log("output: " + toStr);
    moreData = toStr;
  } else if (symbolText === "/") {
    toStr = input1.join("") / input2.join("");
    screen.innerText = toStr;
    console.log("output: " + toStr);
    moreData = toStr;
  } else if (symbolText === "//") {
    toStr = moreData / input2.join("");
    screen.innerText = toStr;
    console.log("output: " + toStr);
    moreData = toStr;
  } else if (symbolText === "+") {
    input1add = Number(input1.join(""));
    input2add = Number(input2.join(""));
    toStr = input1add + input2add;
    screen.innerText = toStr;
    console.log("output: " + toStr);
    moreData = toStr;
  } else if (symbolText === "++") {
    input1add = Number(input1.join(""));
    input2add = Number(input2.join(""));
    toStr = moreData + input2add;
    screen.innerText = toStr;
    console.log("output: " + toStr);
    moreData = toStr;
  } else if (symbolText === "-") {
    input1Minus = Number(input1.join(""));
    input2Minus = Number(input2.join(""));
    toStr = input1Minus - input2Minus;
    screen.innerText = toStr;
    console.log("output: " + toStr);
    moreData = toStr;
  } else if (symbolText === "--") {
    input1add = Number(input1.join(""));
    input2add = Number(input2.join(""));
    toStr = moreData - input2add;
    screen.innerText = toStr;
    console.log("output: " + toStr);
    moreData = toStr;
  }
}

numbers.forEach((num) => num.addEventListener("click", numberClick));
buttons.forEach((symbol) => symbol.addEventListener("click", symbolClick));
equals.forEach((equal) => equal.addEventListener("click", equalsClick));
