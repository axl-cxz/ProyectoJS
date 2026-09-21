let nota1 = 14;
let nota2 = 12;
let nota3 = 15;
let nota4 = 13;

let menorNota = Math.min(nota1, nota2, nota3, nota4);
let sumaNotas = nota1 + nota2 + nota3 + nota4;

let promedio = (sumaNotas - menorNota) / 3;

let condicion = "";
let certificado = "";

if (promedio >= 13) {
    condicion = "APROBADO";
    certificado = "Certificado en MS-OFFICE";
} else if (promedio >= 11) {
    condicion = "APROBADO";
    certificado = "Sin certificado";
} else {
    condicion = "DESAPROBADO";
    certificado = "Sin certificado";
}

console.log("Notas:", nota1, nota2, nota3, nota4);
console.log("Nota eliminada (no tomada en cuenta):", menorNota);
console.log("Promedio obtenido:", promedio);
console.log("Condición del alumno:", condicion);

if (certificado !== "Sin certificado") {
    console.log("Mensaje especial:", certificado);
}