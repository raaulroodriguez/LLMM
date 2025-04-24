const btn = document.querySelector("#btn");
btn.addEventListener("click", buscarPalabra);

async function buscarPalabra() {
  const palabraBuscada = document.querySelector("#buscador").value;
  const palabra = document.querySelector(".palabra");
  const definicion = document.querySelector(".definicion");
  const selectDefinicion = document.querySelector("#definicion");
  const buscar = document.querySelector(".buscar2");

  const url = `https://rae-api.com/api/words/${palabraBuscada}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    palabra.innerHTML =
      `${data.data.word}` + " (" + `${data.data.meanings[0].origin.raw}` + ")";

    /** EJERCICIO 2

    definicion.innerHTML = "";
    data.data.meanings[0].senses.forEach((sense) => {
    definicion.innerHTML += `<p>${sense.raw}</p>`;
    });
    
     */

    definicion.innerHTML = "";
    data.data.meanings[0].senses.forEach((sense) => {
      let option = document.createElement("option");
      option.value = sense.raw;
      option.text = `${sense.raw}`;
      selectDefinicion.appendChild(option);
      buscar.style.width = "70%";
    });
  } catch (error) {
    palabra.innerHTML = `<p style="color: red;">Palabra no encontrada</p>`;
    definicion.innerHTML = "";
    buscar.style.width = "20%";
    console.error("Error en la búsqueda:", error);
  }
}
