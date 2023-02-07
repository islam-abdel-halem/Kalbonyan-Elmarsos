const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

function getUserNumberInput(){
    return parseInt(userInput.value);
}

function createAndWriteOutput(operator, resultBeforecalc, calcNumber) {
    const calcDescription = `${resultBeforecalc} ${operator} ${calcNumber}`
    outputResult(currentResult, calcDescription);
}

function add() {
    const enteredNumber = getUserNumberInput();
    const initialRsult = currentResult;
    currentResult = currentResult + enteredNumber;
    createAndWriteOutput('+', initialRsult, enteredNumber);
    logEntries.push(enteredNumber);
    console.log(logEntries)
}

function subtract() {
    const enteredNumber = getUserNumberInput();
    const initialRsult = currentResult;
    currentResult = currentResult - enteredNumber;
    createAndWriteOutput('-', initialRsult, enteredNumber);
}

function multiply() {
    const enteredNumber = getUserNumberInput();
    const initialRsult = currentResult;
    currentResult = currentResult * enteredNumber;
    createAndWriteOutput('*', initialRsult, enteredNumber);
}

function divide() {
    const enteredNumber = getUserNumberInput();
    const initialRsult = currentResult;
    currentResult = currentResult / enteredNumber;
    createAndWriteOutput('/', initialRsult, enteredNumber);
}

addBtn.addEventListener('click',add);
subtractBtn.addEventListener('click',subtract);
multiplyBtn.addEventListener('click',multiply);
divideBtn.addEventListener('click',divide);