let display = document.getElementById('result');
let operand1 = '';
let operator = '';
let operand2 = '';

function appendNumber(number) {
    if (operator === '') {
        operand1 += number;
        display.value = operand1;
    } else {
        operand2 += number;
        display.value = operand2;
    }
}

function appendDecimal() {
    if (operator === '' && !operand1.includes('.')) {
        operand1 += '.';
        display.value = operand1;
    } else if (operator !== '' && !operand2.includes('.')) {
        operand2 += '.';
        display.value = operand2;
    }
}

function setOperator(op) {
    operator = op;
}

function calculate() {
    let result;
    switch (operator) {
        case '+':
            result = parseFloat(operand1) + parseFloat(operand2);
            break;
        case '-':
            result = parseFloat(operand1) - parseFloat(operand2);
            break;
        case '*':
            result = parseFloat(operand1) * parseFloat(operand2);
            break;
        case '/':
            result = parseFloat(operand1) / parseFloat(operand2);
            break;
    }
    display.value = result;
}

function clearDisplay() {
    display.value = '';
    operand1 = '';
    operator = '';
    operand2 = '';
}