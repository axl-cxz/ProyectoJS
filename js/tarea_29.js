const montoInicial = 500;
const descuento = 0.18

if (montoInicial > 300) {
    const montoFinal = montoInicial - (montoInicial * descuento);
    console.log("El monto final con descuento aplicado es: S/", montoFinal);
} else {
    console.log("El monto final es: S/", montoInicial);
}