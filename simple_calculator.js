// ...existing code...
function getValues() {
  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);
  if (isNaN(num1) || isNaN(num2)) {
    document.getElementById('result').innerHTML = 'Skriv in två tal.';
    return null;
  }
  return { num1, num2 };
}

function calculate() {
  const v = getValues();
  if (!v) return;
  const op = document.getElementById('operator').value;
  let result;
  switch (op) {
    case '+':
      result = v.num1 + v.num2;
      break;
    case '-':
      result = v.num1 - v.num2;
      break;
    case '*':
      result = v.num1 * v.num2;
      break;
    case '/':
      if (v.num2 === 0) {
        document.getElementById('result').textContent = 'Kan inte dividera med 0.';
        return;
      }
      result = v.num1 / v.num2;
      break;
    default:
      document.getElementById('result').textContent = 'Okänt räknesätt.';
      return;
  }
  document.getElementById('result').textContent = 'Result: ' + result;
}

function updateSliderValue(sliderId, displayId) {
  const slider = document.getElementById(sliderId);
  const display = document.getElementById(displayId);
  display.textContent = slider.value;
}