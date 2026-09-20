const trabajadorUno = "Juan";
const trabajadorDos = "María";
const trabajadorTres = "Carlos";
const trabajadorCuatro = "Alberto";

let ventasUno = 1500;
let ventasDos = 2000;
let ventasTres = 3500;
let ventasCuatro = 1700;

let comisionUno = 500;
let comisionDos = 650;
let comisionTres = 300;
let comisionCuatro = 450;

const sumaVentas = ventasUno + ventasDos + ventasTres + ventasCuatro;
const mediaAritmetica = sumaVentas / 4;

let comisionFinalUno;
let comisionFinalDos;
let comisionFinalTres;
let comisionFinalCuatro;

if (ventasUno > mediaAritmetica) {
    comisionFinalUno = comisionUno * 2;
} else if (ventasUno < mediaAritmetica) {
    comisionFinalUno = comisionUno / 2;
}
if (ventasDos > mediaAritmetica) {
    comisionFinalDos = comisionDos * 2;
} else if (ventasDos < mediaAritmetica) {
    comisionFinalDos = comisionDos / 2;
}
if (ventasTres > mediaAritmetica) {
    comisionFinalTres = comisionTres * 2;
} else if (ventasTres < mediaAritmetica) {
    comisionFinalTres = comisionTres / 2;
}
if (ventasCuatro > mediaAritmetica) {
    comisionFinalCuatro = comisionCuatro * 2;
} else if (comisionCuatro < mediaAritmetica) {
    comisionFinalCuatro = comisionCuatro / 2;
}

    console.log("La comision final de ", trabajadorUno, " es: ", comisionFinalUno);
    console.log("La comision final de ", trabajadorDos, " es: ", comisionFinalDos);
    console.log("La comision final de ", trabajadorTres, " es: ", comisionFinalTres);
    console.log("La comision final de ", trabajadorCuatro, " es: ", comisionFinalCuatro);