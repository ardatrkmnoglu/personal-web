const display = document.getElementById("display");

function appendToDisplay(input) {
  if (display.value == "Error" ||
    display.value == "NaN" ||
    display.value == "Infinity" ||
    display.value == "undefined") {
    clearDisplay();
  }
  display.value += input;
}

function calculate() {
  if (display.value == "Error" ||
    display.value == "NaN" ||
    display.value == "Infinity" ||
    display.value == "undefined") {
    clearDisplay();
  }
  try {
    display.value = eval(display.value);
  }
  catch (error) {
    display.value = "Error";
  }
}

function clearDisplay() {
  display.value = "";
}
