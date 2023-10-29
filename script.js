import * as math from 'mathjs';


const screenDisplay = document.querySelector(".screen");
let calculation = '';
let accumulativeCalculation = '';

export function calculate(button) {
  const value = button.textContent;

  if (value === "CLEAR") {
    calculation = '';
    accumulativeCalculation = '';
    screenDisplay.textContent = "0";
  } else if (value === "CE") {
    calculation = '';
    screenDisplay.textContent = "0";
  } else if (value === "=") {
    try {
      const result = math.evaluate(accumulativeCalculation);
      screenDisplay.textContent = result;
      calculation = result.toString();
    } catch (error) {
      screenDisplay.textContent = 'Error';
    }
  } else {
    calculation += value;
    accumulativeCalculation = calculation;
    screenDisplay.textContent = accumulativeCalculation;
  }
}

// Math.round(math.evaluate(accumulativeCalculation) * 100) / 100;