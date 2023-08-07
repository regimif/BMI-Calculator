// INPUT VALIDATION
function fInputRestriction() {
  const heightInput = document.getElementById("height");
  const heightInchesInput = document.getElementById("height-inches");
  const weightInput = document.getElementById("weight");

  heightInput.addEventListener("input", fRestrictDigits);
  heightInchesInput.addEventListener("input", fRestrictDigits);
  weightInput.addEventListener("input", fRestrictDigits);

  heightInput.addEventListener("keypress", fSetOnlyNumbers);
  heightInchesInput.addEventListener("keypress", fSetOnlyNumbers);
  weightInput.addEventListener("keypress", fSetNumbersDot);
}

  //  Allow only integer numeric characters
function fSetOnlyNumbers(e) {
  var theEvent = e || window.event;
  var key = theEvent.keyCode || theEvent.which;
  key = String.fromCharCode(key);
  var regex = /^[0-9]+$/;
  if (!regex.test(key)) {
    theEvent.returnValue = false;
    if (theEvent.preventDefault) theEvent.preventDefault();
  }
}

  // Allow numeric characters and dot/comma (for decimal values)
function fSetNumbersDot(e) {
  var theEvent = e || window.event;
  var key = theEvent.keyCode || theEvent.which;
  key = String.fromCharCode(key);
  var regex = /^[0-9,.]+$/;
  if (!regex.test(key)) {
    theEvent.returnValue = false;
    if (theEvent.preventDefault) theEvent.preventDefault();
  }
}

function fRestrictDigits(e) {
  const input = e.target;
  const maxDigits = 5;

  if (input.value.length > maxDigits) {
    input.value = input.value.slice(0, maxDigits);
  }
}
//

  // Remove Input Block
function fRemoveInputBlock() {
  document.getElementById("height").classList.remove("input-block");
  document.getElementById("height-inches").classList.remove("input-block");
  document.getElementById("weight").classList.remove("input-block");
}
//

export {fInputRestriction, fRemoveInputBlock};
