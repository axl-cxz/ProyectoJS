const productos = [
    ["Shampoo", 38.00],
    ["Acondicionador", 32.00],
    ["Crema de peinar", 24.00],
    ["Peine", 0],
    ["Inkakola", 5],
    ["Jabon", 7]
]

let i = 0;

while (i < productos.length) {

    const nombre = productos[i][0];
    const precio = productos[i][1];

    if (precio > 0) {
        console.log("Precio no encontrado, sistema detenido");
    } else {
        console.log(`Precio del producto: ${precio[1]}`);
    }
    i++;
}