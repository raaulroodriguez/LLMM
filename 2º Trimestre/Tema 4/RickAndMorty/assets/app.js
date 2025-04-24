const btn = document.querySelector("#btn");
btn.addEventListener("click", buscarPersonaje);

async function buscarPersonaje() {
  const namePersonaje = document.querySelector("#buscador").value;

  const url = `https://rickandmortyapi.com/api/character/${namePersonaje}`;

  const nombre = document.querySelector("#nombre");
  const especie = document.querySelector("#especie");
  const genero = document.querySelector("#genero");
  const imagen = document.querySelector("#imagen");
  const episodios = document.querySelector("#episodios");

  try {
    const response = await fetch(url);
    const data = await response.json();

    nombre.innerHTML = `<h3>${data.name}</h3>`;
    especie.innerHTML = `<h3>${data.species}</h3>`;
    genero.innerHTML = `<h3>${data.gender}</h3>`;

    const imgElement = document.createElement("img");
    imgElement.src = data.image;
    imagen.innerHTML = "";
    imagen.appendChild(imgElement);

    const numeroEpisodios = data.episode.length;
    episodios.innerHTML = `<h3>${numeroEpisodios} episodios</h3>`;

    const tabla = document.querySelector("table");

    if (data.gender == "Male") {
      tabla.classList.remove("tablaFemenino");
      tabla.classList.add("tablaMasculino");
    } else if (data.gender == "Female") {
      tabla.classList.remove("tablaMasculino");
      tabla.classList.add("tablaFemenino");
    }
  } catch (error) {
    imagen.innerHTML = "";
    especie.innerHTML = "";
    genero.innerHTML = "";
    episodios.innerHTML = "";
    nombre.innerHTML = "<p>No se encontró el personaje</p>";
    console.log("Error al obtener datos", error);
  }
}
