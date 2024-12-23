import { fRemoveInputBlock } from "../classes/input-validation.js";
import { fToggleVisibility } from "../classes/handle-content.js";

// BUTTONS
    // Reset Button
function fReset() {
  const heightInput = document.getElementById("height");
  const weightInput = document.getElementById("weight");
  const heightInchesInput = document.getElementById("height-inches");

  heightInput.value = "";
  heightInchesInput.value = "";
  weightInput.value = "";

  fRemoveInputBlock();
}

document.getElementById("reset").addEventListener("click", fReset);
    //

    // Back Button Event
document.getElementById("back").addEventListener("click", () => {
  const calculatorContainer = document.querySelector(".calculator-container");
  const informationTable = document.querySelector(".bmi-information");

  fToggleVisibility(calculatorContainer);
  fToggleVisibility(informationTable);

  informationTable.classList.add("hidden");
  informationTable.classList.remove("visible");

  fRemoveInputBlock();
});
    //
//
export { fReset }
