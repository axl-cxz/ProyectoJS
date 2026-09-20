
const n1 = 5;
const n2 = 7;
const n3 = 10;

if (n3 > n1 && n3 > n2) {

    const promedio = (n1 + n2 + n3) / 3;
    console.log(`El tercer número es el mayor. El promedio es: ${promedio.toFixed(2)}`);
} else {

    if (n1 % 2 !== 0 && n2 % 2 !== 0 && n3 % 2 !== 0) {

        console.log("Los tres números son impares. Resultados con incremento del 89%:");
        console.log(`Número 1: ${(n1 * 1.89).toFixed(2)}`);
        console.log(`Número 2: ${(n2 * 1.89).toFixed(2)}`);
        console.log(`Número 3: ${(n3 * 1.89).toFixed(2)}`);
    } else {
        
        console.log("No se cumple ninguna de las condiciones planteadas.");
    }
}