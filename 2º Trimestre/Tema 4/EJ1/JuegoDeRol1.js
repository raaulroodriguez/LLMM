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

console.log("");
console.log("Estado del héroe después del combate: ");
console.log("Nombre: " + nombre);
console.log("Nivel: " + nivel);
console.log("Puntos de vida: " + vida);

let nivelCadena = nivel.toString();
let puntosVida = parseFloat(vida);

console.log("");
console.log("Nivel Cadena: " + nivelCadena);
console.log("Puntos float: " + puntosVida);

let dañoBase = 50;
let multCritico = 2;
let probCritico = 0.5;
let esCritico = probCritico > Math.random();

let dañoTotal = esCritico ? dañoBase * MultCritico : dañoBase;

console.log("");
console.log("Nivel Cadena: " + nivelCadena);
console.log("Puntos float: " + puntosVida);
console.log(
  "El héroe inflige " +
    dañoTotal +
    " puntos de daño porque esCritico tiene valor " +
    esCritico
);
