const solucion = document.querySelector("#solucion");
const btnNumero = document.querySelectorAll("button[id='numero']");
const btnOperador = document.querySelectorAll("button[id='oper']");
const btnCalcular = document.querySelector("#calcular");
const btnLimpiar = document.querySelector("#limpiar");

let primerNumero = null;
let operador = null;
let nuevoNumero = true;

btnNumero.forEach((boton) => {
  boton.addEventListener("click", function () {
    if (nuevoNumero || solucion.value === "0") {
      solucion.value = boton.value;
      nuevoNumero = false;
    } else {
      solucion.value += boton.value;
    }
  });
});

btnOperador.forEach((boton) => {
  boton.addEventListener("click", function () {
    if (primerNumero === null) {
      primerNumero = parseFloat(solucion.value);
      operador = boton.value;
      solucion.value = `${operador}`;
    } else if (operador) {
      const segundoNumero = parseFloat(solucion.value);
      realizarCalculo(segundoNumero);
      operador = boton.value;
      solucion.value = `${operador}`;
    }
    nuevoNumero = true;
  });
});

btnCalcular.addEventListener("click", function () {
  if (primerNumero !== null && operador) {
    const segundoNumero = parseFloat(solucion.value);
    realizarCalculo(segundoNumero);
    operador = null;
  }
});

btnLimpiar.addEventListener("click", function () {
  solucion.value = "0";
  primerNumero = null;
  operador = null;
  nuevoNumero = false;
});

function realizarCalculo(segundoNumero) {
  let resultado;

  switch (operador) {
    case "+":
      resultado = primerNumero + segundoNumero;
      break;
    case "-":
      resultado = primerNumero - segundoNumero;
      break;
    case "*":
      resultado = primerNumero * segundoNumero;
      break;
    case "/":
      if (segundoNumero === 0) {
        solucion.value = "Error";
        primerNumero = null;
        operador = null;
        nuevoNumero = false;
        return;
      }
      resultado = primerNumero / segundoNumero;
      break;
    default:
      return;
  }

  primerNumero = resultado;
  solucion.value = `${resultado}`;
  nuevoNumero = true;
}
