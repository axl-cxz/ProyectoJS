const obrero = "Pablo";
let horasTrabajadas = 50;
const precioHora = 10;

let pagoExtra = 0;

if (horasTrabajadas > 40) {
    const horasExtras = horasTrabajadas - 40;
    if (horasExtras <= 8) {
        pagoExtra = horasExtras * (precioHora * 2);
    }

    else {
        const horasTriples = horasExtras - 8;
        pagoExtra = (horasTriples * (precioHora *3)) + (8 * (precioHora * 2));
    }

    montoInicial = horasTrabajadas * precioHora;
    montoTotal = montoInicial + pagoExtra;


    console.log("El obrero", obrero, "trabajó", horasTrabajadas, "horas.");
    console.log("Horas extras trabajadas:", horasExtras);
    console.log("Monto a recibir por horas extras: $", pagoExtra);
    console.log("Monto total a recibir: $", montoTotal);
}