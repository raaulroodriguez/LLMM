/** Ejercicio 1 */
const nombre = "Éxarion";
const arma_principal = "Espada del Destino";
let arma_secundaria = "Arco simple";
let nivel = 5;
let vida = 100;
let armadura = true;

console.log("Estado del héroe: ");
console.log("Nombre: " + nombre);
console.log("Nivel: " + nivel);
console.log("Puntos de vida: " + vida);
console.log("Arma principal: " + arma_principal);
console.log("Arma secundaria: " + arma_secundaria);
console.log("Tiene Armadura: " + armadura);

nivel += 1;
vida -= 30;

console.log();
console.log("Estado del héroe después del combate: ");
console.log("Nombre: " + nombre);
console.log("Nivel: " + nivel);
console.log("Puntos de vida: " + vida);

/** Ejercicio 2 */

let nivelCadena = nivel.toString();
let puntosVida = parseFloat(vida);

console.log();
console.log("Nivel Cadena: " + nivelCadena);
console.log("Puntos float: " + puntosVida);

let dañoBase = 50;
let multCritico = 2;
let probCritico = 0.5;
let esCritico = probCritico > Math.random();

let dañoTotal = esCritico ? dañoBase * multCritico : dañoBase;

console.log();
console.log("Nivel Cadena: " + nivelCadena);
console.log("Puntos float: " + puntosVida);
console.log(
  "El héroe inflige " +
    dañoTotal +
    " puntos de daño porque esCritico tiene valor " +
    esCritico
);

/** Ejercicio 3 */

let dificultad = 1;
let experienciaActual = 90;
let experienciaGanada = 30;
let experienciaParaSiguienteNivel = 100;

if (experienciaActual + experienciaGanada >= experienciaParaSiguienteNivel) {
  nivel += 1;
  experienciaActual =
    experienciaActual + experienciaGanada - experienciaParaSiguienteNivel;
}

if (dificultad == 1) {
  nivelDificultad = "Novato";
} else if (dificultad == 2) {
  nivelDificultad = "Media";
} else if (dificultad == 3) {
  nivelDificultad = "Profesional";
}

console.log();
console.log("Nivel de Dificultad: " + nivelDificultad);
console.log("Nivel: " + nivel);
console.log("Experiencia Actual: " + experienciaActual);

/** Ejercicio 4 */

let monedasCofre = [10, 20, 50, 100, 200, 500];

let atuendos = ["Duende", "Arquero", "Caballero"];

let sumaMonedas = 0;
for (let monedas of monedasCofre) {
  sumaMonedas += monedas;
}

console.log();
console.log("Total Monedas: " + sumaMonedas);

atuendos.push("Mago");

console.log();
atuendos.forEach((atuendo, indice) => {
  console.log("Atuendo " + indice + ": " + atuendo);
});

/** Ejercicio 5 */

let cura = 30;
const vidaMaxima = 100;

function curar(vida, cura) {
  return Math.min(vida + cura, vidaMaxima);
}

console.log();
console.log("Vida antes de curar: " + vida);
vida = curar(vida, cura);
console.log("Vida después de curar: " + vida);
