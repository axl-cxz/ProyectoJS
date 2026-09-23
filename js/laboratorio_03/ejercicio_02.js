// CLASIFICACIÓN DE RENDIMIENTO ACADÉMICO
let promedio = parseFloat(prompt("Ingrese su promedio: "));

if (promedio >= 18 && promedio <= 20) {
    console.log("Rendimiento ¡EXCELENTE!");
} else if (promedio >=14) {
    console.log("Rendimiento ¡BUENO!");
} else if (promedio >= 11) {
    console.log("Rendimiento ¡MALO!");
} else if (promedio >= 0) {
    console.log("Rendimiento ¡DESAPROBADO!");
} else {
    console.ing("Promedio ¡INVÁLIDO");
}