const btn = document.querySelector("#btn");
btn.addEventListener("click", buscarPersonajes);

async function buscarPersonajes() {
  const numeroEpisodio = document.querySelector("#buscador").value;

  const url = `https://rickandmortyapi.com/api/episode/${numeroEpisodio}`;
  const tabla = document.querySelector(".tabla tbody");

  try {
    const response = await fetch(url);
    const data = await response.json();

    tabla.innerHTML = `
      <tr>
        <th>Nombre Personaje</th>
        <th>Imagen Personaje</th>
      </tr>
    `;

    data.characters.forEach(async (url2) => {
      const response2 = await fetch(url2);
      const data2 = await response2.json();

      let tr = document.createElement("tr");
      let td1 = document.createElement("td");
      let td2 = document.createElement("td");

      td1.textContent = data2.name;

      const imgElement = document.createElement("img");
      imgElement.src = data2.image;
      imgElement.style.width = "100px";

      td2.appendChild(imgElement);
      tr.appendChild(td1);
      tr.appendChild(td2);
      tabla.appendChild(tr);
    });
  } catch (error) {
    tabla.innerHTML = `
      <tr> 
        <td colspan="2">No se encontraron personajes</td>
      </tr>
    `;
    console.error("Error al obtener datos:", error);
  }
}
