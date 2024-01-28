let currentOperand = '';
let previousOperand = '';
let operator = '';

const outputPrevious = document.querySelector('.previous');
const outputCurrent = document.querySelector('.current');
const clearAllButton = document.querySelector('[clearAll]');
const deleteDataButton = document.querySelector('[deleteData]');
const numberButtons = document.querySelectorAll('[number]');
const operatorButtons = document.querySelectorAll('[operator]');
const equalButton = document.querySelector('[equal]');

numberButtons.forEach(button => {
    button.addEventListener('click', function () {
        appendNumber(button.innerText);
        updateDisplay();
    });
});

operatorButtons.forEach(button => {
    button.addEventListener('click', function () {
        setOperator(button.innerText);
        updateDisplay();
    });
});

equalButton.addEventListener('click', function () {
    calculate();
    updateDisplay();
});

clearAllButton.addEventListener('click', function () {
    clearAll();
    updateDisplay();
});

deleteDataButton.addEventListener('click', function () {
    deleteData();
    updateDisplay();
});

function appendNumber(number) {
    currentOperand += number;
}

function setOperator(op) {
    if (currentOperand === '') return;
    if (previousOperand !== '') {
        calculate();
    }
    operator = op;
    previousOperand = currentOperand;
    currentOperand = '';
}

function calculate() {
    let result;
    const prev = parseFloat(previousOperand);
    const current = parseFloat(currentOperand);
    if (isNaN(prev) || isNaN(current)) return;

    switch (operator) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = prev / current;
            break;
        default:
            return;
    }

    currentOperand = result.toString();
    operator = '';
    previousOperand = '';
}

function clearAll() {
    currentOperand = '';
    previousOperand = '';
    operator = '';
}

function deleteData() {
    currentOperand = currentOperand.slice(0, -1);
}

function updateDisplay() {
    outputCurrent.innerText = currentOperand;
    outputPrevious.innerText = previousOperand + (operator ? ' ' + operator : '');
}