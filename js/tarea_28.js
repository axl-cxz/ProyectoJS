let sueldoBasico = 1000; 
let aniosServicio = 3;

let porcentajeAumento = 0;
let montoAumento = 0;

if (aniosServicio < 4) {
  
    porcentajeAumento = 0.15;
    montoAumento = sueldoBasico * porcentajeAumento;
} else {

    porcentajeAumento = 0.12 * aniosServicio;
    montoAumento = sueldoBasico * porcentajeAumento;
}

let montoACobrar = sueldoBasico + montoAumento;

console.log("Sueldo básico:", sueldoBasico);
console.log("Años de servicio:", aniosServicio);
console.log("Monto del aumento:", montoAumento);
console.log("Monto total a cobrar:", montoACobrar);