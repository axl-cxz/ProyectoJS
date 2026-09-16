
// FASE DE ENTRADA: DECLARACIÓN DE VARIABLES:
const varones = 255;
const mujeres = 184;

// FASE DE PROCESO: LA LÓGICA U OPERACIÓN
const totalPersonas = varones + mujeres; 
let porcentajeVarones = (varones / totalPersonas) * 100;
let porcentajeMujeres = (mujeres / totalPersonas) * 100;

// FASE DE SALIDA SE HACE LAS IMPRESIONES EN CONSOLA
console.log("Total de Colaboradores: ", totalPersonas);
console.log("Porcentaje de Varones: ", porcentajeVarones.toFixed(2), "%");
console.log("Porcentaje de Mujeres: ", porcentajeMujeres.toFixed(2), "%");