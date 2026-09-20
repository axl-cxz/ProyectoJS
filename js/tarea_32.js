const madre = "Sabrina";
let estadoCivil = "Viuda";
let cantidadHijos = 3;
const trabajo = "Planilla";

let bono = 0;

if (estadoCivil === "Viuda") {
    bono = bono + 70;
} else if (estadoCivil === "Casada") {
    bono = bono + 0;
}
if (cantidadHijos > 0) {
    bono = bono + (20 * cantidadHijos);
}
if (trabajo === "Planilla") {
    bono = bono + 50;
}
if (trabajo === "Contrato") {
    bono = bono + 0;
}   

console.log("Nombre de la madre: ", madre);
console.log("Estado Civil: ", estadoCivil);
console.log("Cantidad de hijos: ", cantidadHijos);
console.log("Tipo de trabajo: ", trabajo);
console.log("Bono a recibir: ", bono);