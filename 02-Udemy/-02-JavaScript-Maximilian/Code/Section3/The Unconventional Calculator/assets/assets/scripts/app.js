const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

function getUserNumberInput() {
  return parseInt(userInput.value);
}

function createAndWriteOutput(operator, resultBeforecalc, calcNumber) {
  const calcDescription = `${resultBeforecalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription);
}

function writeToLog(
  operationIdentifier,
  prevRedult,
  operstionNumber,
  newResult
) {
  const logEntry = {
    operation: operationIdentifier,
    prevResult: prevRedult,
    number: operstionNumber,
    Result: newResult,
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}

function calculatorResult(calculationType) {
  const enteredNumber = getUserNumberInput();
  const initialRsult = currentResult;
  let mathOperator;
  if (calculationType === "ADD") {
    currentResult += enteredNumber;
    mathOperator = "+";
  } else if (calculationType === "SUBTRACT") {
    currentResult -= enteredNumber;
    mathOperator = "-";
  } else if (calculationType === "MULTIPLY") {
    currentResult *= enteredNumber;
    mathOperator = "*";
  } else if (calculationType === "DIVIDE") {
    currentResult /= enteredNumber;
    mathOperator = "/";
  }
  createAndWriteOutput(mathOperator, initialRsult, enteredNumber);
  writeToLog(calculationType, initialRsult, enteredNumber, currentResult);
}

function add() {
  calculatorResult("ADD");
}

function subtract() {
  calculatorResult("SUBTRACT");
}

function multiply() {
  calculatorResult("MULTIPLY");
}

function divide() {
  calculatorResult("DIVIDE");
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
