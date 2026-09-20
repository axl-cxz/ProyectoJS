const persona = "Gamboa";
let velocidad = 100;

let multa = 180;

if (velocidad > 80 && velocidad < 120) {
    multa = 180;
} else if (velocidad < 80 || velocidad > 120) {
    multa = 0;
}
console.log("Persona: ", persona);
console.log("Velocidad: ", velocidad);
console.log("Multa a pagar por exceso de velocidad: S/", multa);