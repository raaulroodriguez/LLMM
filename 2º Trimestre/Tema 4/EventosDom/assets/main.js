const cambioParrafo = document.querySelector("#g1");
const invisible = document.querySelector("#g3");
const btnEdad = document.querySelector("#btn");
const cambioFondo = document.querySelector(".g7");
const fondo = document.querySelectorAll(".fondo");
const cambioCapa = document.querySelector(".g9 .div2");
const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");

// Cambio color del parrafo al entrar y salir

cambioParrafo.addEventListener("mouseenter", () => {
  cambiaParrafoAzul();
});

cambioParrafo.addEventListener("mouseleave", () => {
  cambiaParrafoNegro();
});

// Cambio de imagen al pasar por encima

invisible.addEventListener("mouseover", () => {
  cambiaImagen();
});

// Comprueba edad entre 1 y 100

btnEdad.addEventListener("click", () => {
  compruebaEdad();
});

// Cambio de color de los fondos pares

cambioFondo.addEventListener("click", () => {
  cambioColor();
});

// Cambiar capa

btn1.addEventListener("click", () => {
  resetearClases();
  cambioCapa.classList.toggle("negro-blanco");
});

btn2.addEventListener("click", () => {
  resetearClases();
  cambioCapa.classList.toggle("blanco-negro");
});

btn3.addEventListener("click", () => {
  resetearClases();
  cambioCapa.classList.toggle("gris-rojo");
});

// Funciones para cambiar el color del parrafo

function cambiaParrafoAzul() {
  cambioParrafo.style.color = "blue";
}

function cambiaParrafoNegro() {
  cambioParrafo.style.color = "black";
}

// Funcion para cambiar la imagen

function cambiaImagen() {
  const nombreImagen = invisible.src.split("/assets/img/").pop();
  if (nombreImagen === "invisible.jpg") {
    invisible.src = "/assets/img/robot.jpg";
  } else {
    invisible.src = "/assets/img/invisible.jpg";
  }
}

// Función para comprobar la edad

function compruebaEdad() {
  let edad = document.querySelector("#edad");
  let mensaje = document.querySelector("#mensaje");
  let valor = parseInt(edad.value);

  if (isNaN(valor)) {
    mensaje.textContent = "Introduce un número válido";
    mensaje.style.color = "red";
    edad.style.border = "2px solid red";
  } else if (valor < 1 || valor > 100) {
    mensaje.textContent = "Introduce un valor entre 1 y 100";
    mensaje.style.color = "red";
    edad.style.border = "2px solid red";
  } else {
    mensaje.textContent = "Número correcto";
    mensaje.style.color = "green";
    edad.style.border = "2px solid green";
  }
}

// Función para cambiar el color de los bloques

function cambioColor() {
  fondo.forEach((bloque) => {
    if (bloque.style.backgroundColor === "red") {
      bloque.style.backgroundColor = "black";
    } else {
      bloque.style.backgroundColor = "red";
    }
  });
}

// Función para resetear las clases

function resetearClases() {
  cambioCapa.classList.remove("negro-blanco", "blanco-negro", "gris-rojo");
}
