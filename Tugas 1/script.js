const display = document.querySelector('#display');
const keys = document.querySelector('.calculator-keys');

let currentInput = '';
let operator = '';
let shouldResetScreen = false;

keys.addEventListener('click', function(event) {
  const { target } = event;
  const { value } = target;
  
  if (!target.matches('button')) {
    return;
  }

  switch (value) {
    case '+':
    case '-':
    case '*':
    case '/':
    case '%':
    case '^':
      handleOperator(value);
      break;
    case '=':
      calculate();
      break;
    case 'AC':
      clearDisplay();
      break;
    case '.':
      inputDecimal();
      break;
    default:
      inputDigit(value);
  }
  updateDisplay();
});

function handleOperator(nextOperator) {
  if (shouldResetScreen) {
    shouldResetScreen = false;
    currentInput = '';
  }

  if (currentInput === '') return;
  if (operator) {
    calculate();
  }

  currentInput += nextOperator;
  operator = nextOperator;
}

function calculate() {
  try {
    const result = eval(currentInput.replace('^', '**'));
    currentInput = `${result}`;
    operator = '';
    shouldResetScreen = true;
  } catch (error) {
    currentInput = 'Error';
    shouldResetScreen = true;
  }
}

function inputDigit(digit) {
  if (shouldResetScreen) {
    currentInput = '';
    shouldResetScreen = false;
  }
  currentInput += digit;
}

function inputDecimal() {
  if (!currentInput.includes('.')) {
    currentInput += '.';
  }
}

function clearDisplay() {
  currentInput = '';
  operator = '';
  shouldResetScreen = false;
}

function updateDisplay() {
  display.value = currentInput || '0';
}
