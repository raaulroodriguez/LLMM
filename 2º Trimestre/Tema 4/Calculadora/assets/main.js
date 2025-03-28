const num1 = document.querySelector("#num1");
const num2 = document.querySelector("#num2");
const func = document.querySelector("#func");
const result = document.querySelector("#resul");
const btn = document.querySelector("#btn");
const error = document.querySelector(".error");

// Calcula

btn.addEventListener("click", function () {
  calcular();
});

// Función calcular

function calcular() {
  let n1 = parseFloat(num1.value);
  let n2 = parseFloat(num2.value);
  let f = func.value;

  error.textContent = "";

  if (isNaN(n1) || isNaN(n2)) {
    error.textContent = "Introduce un número válido";
    return;
  }

  let resultado;
  if (f == "+") {
    resultado = n1 + n2;
  } else if (f == "-") {
    resultado = n1 - n2;
  } else if (f == "*") {
    resultado = n1 * n2;
  } else if (f == "/") {
    if (n2 === 0) {
      error.textContent = "No se puede dividir por 0";
      return;
    }
    resultado = n1 / n2;
  }

  result.value = resultado;
}
