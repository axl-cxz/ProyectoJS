const sueldoColaboradores = [
    2500, 1300, 4000, 5300, 1200, 5000, 1380, 6899, 4578, 5487, 1350, 4200, 1850, 5300, 2100, 3400, 1600, 4800, 2750, 5900, 1420, 3100, 4500, 1980, 5600, 2300, 3850, 1500, 4100, 2900, 5150, 1730, 3600, 4950, 2450, 5750, 2050, 3300, 1650, 4400, 2800, 5250, 1900, 3700, 4600, 2200, 5450, 2600, 3950, 6000
];
const porcentajeAguinaldo = 0.20;

for (let i = 0; i < sueldoColaboradores.length; i++) {
        let sueldoBase = sueldoColaboradores[i];
        let aguinaldo = sueldoBase * porcentajeAguinaldo;
        let totalPagar = sueldoBase + aguinaldo;

    console.log("Sueldo Base: " ,  sueldoBase);
    console.log("Aguinldo ", aguinaldo.toFixed(2));
    console.log("Total a pagar: " , totalPagar.toFixed(2))
}