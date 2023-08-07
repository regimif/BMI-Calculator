//COLORS
    // Result Color
function fGetColorForResult(bmi) {
  if (bmi < 18.5) {
    return "under-weight";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    return "normal-weight";
  } else if (bmi >= 25 && bmi <= 29.9) {
    return "over-weight";
  } else if (bmi >= 30 && bmi <= 34.9) {
    return "obesity-class1";
  } else if (bmi >= 35 && bmi <= 39.9) {
    return "obesity-class2";
  } else if (bmi >= 40) {
    return "obesity-class3";
  }
}

    // Table Color
function fGetColorForTable(bmi) {
  if (bmi < 18.5) {
    return "color-underweight";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    return "color-normal";
  } else if (bmi >= 25 && bmi <= 29.9) {
    return "color-overweight";
  } else if (bmi >= 30 && bmi <= 34.9) {
    return "color-obesity-1";
  } else if (bmi >= 35 && bmi <= 39.9) {
    return "color-obesity-2";
  } else if (bmi >= 40) {
    return "color-obesity-3";
  }
}

export {fGetColorForResult, fGetColorForTable}