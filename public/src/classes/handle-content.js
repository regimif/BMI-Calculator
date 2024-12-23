import { fRemoveInputBlock } from "./input-validation.js";

// HANDLE CONTENT
let isMetric = true;

// Switch Content
function fToggleVisibility(element) {
  element.classList.toggle("hidden");
}
//

// Handle and Switch Unit of Measurement
document.getElementById("metric").addEventListener("click", () => {
  if (!isMetric) {
    isMetric = true; // Defines the system as metric

    // Clear height and weight input fields
    document.getElementById("height").value = "";
    document.getElementById("weight").value = "";

    // Updates the placeholders for height and weight inputs
    document.getElementById("height").placeholder = "180";
    document.getElementById("weight").placeholder = "80";

    // Updates currently active unit of measurement symbol
    document.getElementById("height-type").textContent = "cm";
    document.getElementById("weight-type").textContent = "kg";

    // Hides the addittional field 'inches' for imperial system button
    fToggleVisibility(document.getElementById("height-inches"));
    fToggleVisibility(document.getElementById("height-type-inches"));

    fRemoveInputBlock();
  }
});

document.getElementById("imperial").addEventListener("click", () => {
  if (isMetric) {
    isMetric = false; // Defines the system as imperial

    // Clear height and weight input fields
    document.getElementById("height").value = "";
    document.getElementById("height-inches").value = "";
    document.getElementById("weight").value = "";

    // Updates the placeholders for height and weight inputs
    document.getElementById("height").placeholder = "5";
    document.getElementById("weight").placeholder = "145";

    // Updates currently active unit of measurement symbol
    document.getElementById("height-type").textContent = "ft";
    document.getElementById("weight-type").textContent = "lbs";

    // Shows an additional field 'inches' for imperial system button
    fToggleVisibility(document.getElementById("height-inches"));
    fToggleVisibility(document.getElementById("height-type-inches"));

    fRemoveInputBlock();
  }
});
//

export {fToggleVisibility, isMetric}