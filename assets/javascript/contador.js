var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;

function adicionar() {
    currentNumber = currentNumber + 1;
    currentNumber.innerHTML = currentNumber;
}

function subtrair() {
    currentNumber = currentNumber - 1;
    currentNumber.innerHTML = currentNumber;
}