document.getElementById('calculate').addEventListener('click', function() {
    let firstNumber = parseFloat(document.getElementById('firstNumber').value);
    let secondNumber = parseFloat(document.getElementById('secondNumber').value);
    
    if (isNaN(firstNumber)) firstNumber = 0;
    if (isNaN(secondNumber)) secondNumber = 0;
    
    let sum = firstNumber + secondNumber;
    document.getElementById('result').textContent = sum;
});

document.getElementById('reset').addEventListener('click', function() {
    document.getElementById('firstNumber').value = '';
    document.getElementById('secondNumber').value = '';
    document.getElementById('result').textContent = '0';
});
