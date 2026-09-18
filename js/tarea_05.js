const alumno = "Pablo";

const cantidadExamenes = 3;
const examen1 = 17;
const examen2 = 13;
const examen3 = 19;

let sumaPro = examen1 + examen2 + examen3;
let notaFinal = sumaPro / cantidadExamenes;

console.log("Nombre de alumno: ", alumno);
console.log("Nota examen 1: ", examen1);
console.log("Nota examen 2: ", examen2);
console.log("Nota examen 3: ", examen3);
console.log("Promedio final: ", notaFinal.toFixed(1));