const obrero = "Juan"
const prendasConfec = 20;

const tarifaPaga = 10;
const conceptoImpuestos = 0.03;
const impuestos = 0.02;
const solidaridad = 0.01;
const bonificacion = 0.05;

let pagaTotal = prendasConfec * tarifaPaga;
let descuentoImpuestos = pagaTotal * conceptoImpuestos;
let descuentoSeguro = pagaTotal * impuestos;
let descuentoSolidaridad = pagaTotal * solidaridad;
let descuentoTotal = descuentoImpuestos + descuentoSeguro + descuentoSolidaridad;

let bono = pagaTotal * bonificacion;

let pagaFinal = pagaTotal - descuentoTotal + bono;

console.log("nombre del obrero", obrero);
console.log("prendas creadas", prendasConfec);
console.log("sueldo inicial S/ ", pagaTotal);
console.log("descuento final S/ ", descuentoTotal);
console.log("Bonificacion S/ ", bono);
console.log("Sueldo final S/ ", pagaFinal);






