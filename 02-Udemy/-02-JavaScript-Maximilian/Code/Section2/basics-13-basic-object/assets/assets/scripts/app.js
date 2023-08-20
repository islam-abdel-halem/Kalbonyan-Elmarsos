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

function add() {
  const enteredNumber = getUserNumberInput();
  const initialRsult = currentResult;
  currentResult = currentResult + enteredNumber;
  createAndWriteOutput("+", initialRsult, enteredNumber);
  writeToLog("ADD", initialRsult, enteredNumber, currentResult);
} 

function subtract() {
  const enteredNumber = getUserNumberInput();
  const initialRsult = currentResult;
  currentResult = currentResult - enteredNumber;
  createAndWriteOutput("-", initialRsult, enteredNumber);
  writeToLog("SUBTRACT", initialRsult, enteredNumber, currentResult);
}

function multiply() {
  const enteredNumber = getUserNumberInput();
  const initialRsult = currentResult;
  currentResult = currentResult * enteredNumber;
  createAndWriteOutput("*", initialRsult, enteredNumber);
  writeToLog("MULTIPLY", initialRsult, enteredNumber, currentResult);
}

function divide() {
  const enteredNumber = getUserNumberInput();
  const initialRsult = currentResult;
  currentResult = currentResult / enteredNumber;
  createAndWriteOutput("/", initialRsult, enteredNumber);
  writeToLog("DIVIDE", initialRsult, enteredNumber, currentResult);
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
