const btn = document.querySelector("#btn");
btn.addEventListener("click", buscarPelicula);

const selectValoracion = document.querySelector("#valoracion");
const tdValoracion = selectValoracion.parentNode;

const resultadoValoracion = document.createElement("p");
resultadoValoracion.id = "resultadoValoracion";
tdValoracion.appendChild(resultadoValoracion);

const btnMostrarValoracion = document.createElement("button");
btnMostrarValoracion.textContent = "Mostrar Valoración";
tdValoracion.appendChild(btnMostrarValoracion);
btnMostrarValoracion.style.marginTop = "10px";

btnMostrarValoracion.addEventListener("click", mostrarValoracion);

async function buscarPelicula() {
  const namePelicula = document.querySelector("#buscador").value;

  const url = `https://www.omdbapi.com/?t=${namePelicula}&apikey=6bd47da3`;

  const titulo = document.querySelector("#titulo");
  const anyo = document.querySelector("#anyo");
  const duracion = document.querySelector("#duracion");
  const genero = document.querySelector("#genero");
  const director = document.querySelector("#director");
  const valoracion = document.querySelector("#valoracion");

  try {
    const response = await fetch(url);
    const data = await response.json();

    titulo.innerHTML = `<h3>${data.Title}</h3>`;
    anyo.innerHTML = `<h3>${data.Year}</h3>`;
    duracion.innerHTML = `<h3>${data.Runtime}</h3>`;
    director.innerHTML = `<h3>${data.Director}</h3>`;

    valoracion.innerHTML = "";
    data.Ratings.forEach((rating) => {
      let option = document.createElement("option");
      option.value = rating.Value;
      option.textContent = `${rating.Source}`;
      valoracion.appendChild(option);
    });
  } catch (error) {
    anyo.innerHTML = "";
    duracion.innerHTML = "";
    director.innerHTML = "";
    titulo.innerHTML = "<p>No se encontró la película</p>";
    selectValoracion.innerHTML = "<option value=''>Error al cargar</option>";
    resultadoValoracion.textContent = "";
    console.log("Error al obtener datos", error);
  }
}

function mostrarValoracion() {
  const selectValoracion = document.querySelector("#valoracion");
  const valorSeleccionado = selectValoracion.value;
  resultadoValoracion.textContent = `Puntuación: ${valorSeleccionado}`;
  resultadoValoracion.style.marginTop = "10px";
}
