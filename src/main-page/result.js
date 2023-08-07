import { fGetColorForResult } from "../colors/colors.js";

// RESULT
  // Result
function fResult(bmi) {
  // Show result and bmi color
  const resultElement = document.getElementById("result");
  resultElement.textContent = "BMI: " + bmi;

  const resultColor = fGetColorForResult(bmi);
  const resultClasses = [
    "under-weight",
    "normal-weight",
    "over-weight",
    "obesity-class1",
    "obesity-class2",
    "obesity-class3",
  ];
  resultElement.classList.remove(...resultClasses);
  resultElement.classList.add(resultColor);

  // Show table color
  fInsertColorOnTable(bmi);
}



  // Table
function fInsertColorOnTable(bmi){
  const tableElements = document.querySelectorAll(
    ".table-underweight, .table-normal, .table-overweight, .table-obesity-1, .table-obesity-2, .table-obesity-3"
  );

  tableElements.forEach((cell) => {
    cell.classList.remove(
      "color-underweight",
      "color-normal",
      "color-overweight",
      "color-obesity-1",
      "color-obesity-2",
      "color-obesity-3"
    );
  });

  if (bmi < 18.5) {
    const underweightCells = document.querySelectorAll(".table-underweight");
    underweightCells.forEach((cell) => {
      cell.classList.add("color-underweight");
    });
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    const normalCells = document.querySelectorAll(".table-normal");
    normalCells.forEach((cell) => {
      cell.classList.add("color-normal");
    });
  } else if (bmi >= 25 && bmi <= 29.9) {
    const overweightCells = document.querySelectorAll(".table-overweight");
    overweightCells.forEach((cell) => {
      cell.classList.add("color-overweight");
    });
  } else if (bmi >= 30 && bmi <= 34.9) {
    const obesity1Cells = document.querySelectorAll(".table-obesity-1");
    obesity1Cells.forEach((cell) => {
      cell.classList.add("color-obesity-1");
    });
  } else if (bmi >= 35 && bmi <= 39.9) {
    const obesity2Cells = document.querySelectorAll(".table-obesity-2");
    obesity2Cells.forEach((cell) => {
      cell.classList.add("color-obesity-2");
    });
  } else if (bmi >= 40) {
    const obesity3Cells = document.querySelectorAll(".table-obesity-3");
    obesity3Cells.forEach((cell) => {
      cell.classList.add("color-obesity-3");
    });
  }
}
//

export { fResult };