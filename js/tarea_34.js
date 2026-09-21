const numero = 76

const decenas = Math.floor(numero / 10)
const unidades = numero % 10;

const numeroInvertido = unidades * 10 + decenas;

console.log("El numero normal es: ", numero);
console.log("El numero invertido es: ", numeroInvertido);