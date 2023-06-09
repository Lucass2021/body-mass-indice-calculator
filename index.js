const btnEl = document.querySelector(".btn");
const bmiResult = document.querySelector("#bmi-result");
const weightCondition = document.querySelector("#weight-condition");

function calculateBMI() {
  const heightValue = document.querySelector("#height").value / 100;
  const weightValue = document.querySelector("#weight").value;

  const bmiValue = (weightValue / (heightValue * heightValue)).toFixed(2);
  bmiResult.disabled = false;
  bmiResult.value = bmiValue;

  if (bmiValue < 18.5) {
    weightCondition.innerText = "Under Weight";
  } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
    weightCondition.innerText = "Normal Weight";
  } else if (bmiValue >= 25 && bmiValue <= 29.9) {
    weightCondition.innerText = "Overweight";
  } else if (bmiValue >= 30) {
    weightCondition.innerText = "Obesity";
  }
}

btnEl.addEventListener("click", calculateBMI);
