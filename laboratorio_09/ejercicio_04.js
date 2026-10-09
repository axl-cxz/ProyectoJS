const descuento = 0.15;

let carritoCompras = [
    ["GTAIV", 110.00],
    ["Crash bandicoot 4", 90.00],
    ["Cyberpunk", 55.00],
    ["Resident Evil Requiem", 260.00]
];

let totalPagar = 0;

for (let i = 0; i < carritoCompras.length; i++) {
        let precio = carritoCompras[i][1];


    if (precio > 100) {
    let precioDescuento = precio - (precio * descuento);
        totalPagar += precioDescuento;
        console.log(`Precio producto: ${precioDescuento}`);
    } else {
        totalPagar += precio;
        console.log(`Precio producto: ${precio}`);
    }
}

console.log("Total a pagar S/", totalPagar);

