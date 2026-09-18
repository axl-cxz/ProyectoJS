const producto = "Sandalias";
const productoDos = "Medias";

let precioProducto = 35;
let incremento = 0.4;
let precioProductDos = 28;


let precioOriginal = precioProducto + 0;
let incrementoP = precioProducto * incremento;
let valorAumentado = precioOriginal + incrementoP;
let precioOriginalDos = precioProductDos + 0;


console.log("Producto comprado: ", producto);
console.log("Precio producto: ", valorAumentado);
console.log("Producto comprado: ", productoDos);
console.log("Precio producto: ", precioOriginalDos);

const valorLimite = 30;


if (valorLimite < producto) {
    producto >= valorLimite;
    console.log("No hay incremento de precio.");
    
} else {
    console.log("Incremento de precio")
}
