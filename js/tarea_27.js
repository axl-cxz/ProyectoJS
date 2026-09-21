const numero = -9;

let paridad = "";
let signo = "";

if (numero % 2 === 0) {
    paridad = "Par";
} else {
    paridad = "Impar";
}

if (numero > 0) {
    signo = "Positivo";
} else if (numero < 0) {
    signo = "Negativo";
} else {
    signo = "Nulo";
}

console.log("Número ingresado:", numero);
console.log("El número es:", paridad);
console.log("El número es:", signo);