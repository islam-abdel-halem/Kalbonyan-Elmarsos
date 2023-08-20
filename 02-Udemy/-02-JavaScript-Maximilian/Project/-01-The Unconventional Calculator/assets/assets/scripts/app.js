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

function calculate(operation) {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  let operator;
  if (operation === "ADD") {
    currentResult += enteredNumber;
    operator = "+";
  } else if (operation === "SUBTRACT") {
    currentResult -= enteredNumber;
    operator = "-";
  } else if (operation === "MULTIPLY") {
    currentResult *= enteredNumber;
    operator = "*";
  } else {
    currentResult /= enteredNumber;
    operator = "/";
  }
  createAndWriteOutput(operator, initialResult, enteredNumber);
  writeToLog(operation, initialResult, enteredNumber, currentResult);
}


addBtn.addEventListener("click", calculate.bind(this, "ADD"));
subtractBtn.addEventListener("click", calculate.bind(this, "SUBTRACT"));
multiplyBtn.addEventListener("click", calculate.bind(this, "MULTIPLY"));
divideBtn.addEventListener("click", calculate.bind(this, "DIVIDE"));