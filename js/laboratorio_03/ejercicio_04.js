let edad = parseInt(prompt("Ingresar su edad"));
let pais = prompt("Ingresar su pais")

if (edad >= 65 && pais === "Peru"   ) {
    console.log("Accede al bono");
} else {
    console.log("No accede al bono");
}