let currentInput = '';
let resultDisplayed = false;

// Current input
function appendOperation(value) {
    if (resultDisplayed) {
        currentInput = document.getElementById('input').value + value;
        resultDisplayed = false;
    }
    else {
        currentInput += value;
    }
    document.getElementById('input').value = currentInput
}

// Clear the input
function clearInput() {
    currentInput = '';
    resultDisplayed = false;
    document.getElementById('input').value = '0';
}

// Calculate the result
function calculate() {
    try {
        currentInput = eval(currentInput).toString();
        document.getElementById('input').value = currentInput;
        resultDisplayed = true;
    }
    catch (error) {
        document.getElementById('input').value = 'Invalid';
        currentInput = '';
        resultDisplayed = false;
    }
}