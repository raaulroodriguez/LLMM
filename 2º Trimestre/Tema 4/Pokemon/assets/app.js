const btn = document.querySelector("#btn");
btn.addEventListener("click", buscarPokemon);

async function buscarPokemon() {
  const namePokemon = document.querySelector("#buscador").value;

  const url = `https://pokeapi.co/api/v2/pokemon/${namePokemon}`;

  const nombre = document.querySelector("#nombre");
  const imagen = document.querySelector("#imagen");
  const altura = document.querySelector("#altura");
  const tipos = document.querySelector("#tipos");

  try {
    const response = await fetch(url);
    const data = await response.json();

    nombre.innerHTML = `<h3>${data.name}</h3>`;

    const imgElement = document.createElement("img");
    imgElement.src = data.sprites.front_default;
    imagen.innerHTML = "";
    imagen.appendChild(imgElement);

    altura.innerHTML = `<h3>Altura: ${data.height}</h3>`;

    data.types.forEach((element) => {
      tipos.innerHTML = tipos.innerHTML + `<li>${element.type.name}</li>`;
    });
  } catch (error) {
    imagen.innerHTML = "";
    tipos.innerHTML = "";
    altura.innerHTML = "";
    nombre.innerHTML = "<p>No se encontró el pokemon</p>";
    console.log("Error al obtener datos", error);
  }
}
