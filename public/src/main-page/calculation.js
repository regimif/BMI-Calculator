import { fResult } from "./result.js";
import { fToggleVisibility } from "../classes/handle-content.js";
import { isMetric } from "../classes/handle-content.js";

// INPUT CALCULATION
function fCalculate() {
  const weight = document.getElementById("weight").value;
  let bmi;

  if (isMetric) {
    // Metric system calculation
    const height = document.getElementById("height").value;
    const heightConversor = height / 100;
    bmi = (weight / heightConversor ** 2).toFixed(1);
  } else {
    // Imperial system calculation
    const feet = parseInt(document.getElementById("height").value);
    const inches = parseInt(document.getElementById("height-inches").value);
    const heightInches = feet * 12 + inches;
    const weightPounds = parseInt(weight);
    bmi = ((weightPounds / heightInches ** 2) * 703).toFixed(1);
  }

  return bmi;
}

// Calculate Button Event
document.getElementById("calculate").addEventListener("click", () => {
  const getHeight = document.getElementById("height").value;
  const getHeightInches = document.getElementById("height-inches").value;
  const getWeight = document.getElementById("weight").value;

  // Shows error stylization on empty fields for Metric system
  if (isMetric && (getHeight === "" || getWeight === "")) {
    if (getHeight === "") {
      document.getElementById("height").classList.add("input-block");
    }
    if (getWeight === "") {
      document.getElementById("weight").classList.add("input-block");
    }

    return;
  }

  // Shows error stylization on empty fields for Imperial system
  if (
    !isMetric && (getHeight === "" || getHeightInches === "" || getWeight === "")
  ) {
    if (getHeight === "") {
      document.getElementById("height").classList.add("input-block");
    }
    if (getHeightInches === "") {
      document.getElementById("height-inches").classList.add("input-block");
    }
    if (getWeight === "") {
      document.getElementById("weight").classList.add("input-block");
    }

    return;
  }

  const calculatedBmi = fCalculate();
  fResult(calculatedBmi);

  // Switch container content with ToggleVisibility (handle-content.js)
  const calculatorContainer = document.querySelector(".calculator-container");
  const informationTable = document.querySelector(".bmi-information");

  fToggleVisibility(calculatorContainer);
  fToggleVisibility(informationTable);

  informationTable.classList.remove("hidden");
  informationTable.classList.add("visible");
});
//

export {fCalculate};