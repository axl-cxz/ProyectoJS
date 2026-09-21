const numeroUno = 24;
const numeroDos = 47;

console.log("Números ingresados:", numeroUno, "y", numeroDos);

if (numeroUno === numeroDos) {
    console.log("Son iguales.");
} else {
    console.log("No son iguales.");
}

if (numeroUno > numeroDos) {
    console.log("El primero es mayor que el segundo.");
} else if (numeroDos > numeroUno) {
    console.log("El segundo es mayor que el primero.");
}

if (numeroUno >= numeroDos) {
    console.log("El primero es mayor o igual que el segundo.");
}

if (numeroDos >= numeroUno) {
    console.log("El segundo es mayor o igual que el primero.");
}