const alumno = "Marco";
const nota = 15;

let letra = "";

if (nota >= 17 && nota <= 20) {
    letra= "A";
}
else if (nota >= 14 && nota <= 16) {
    letra= "B";
}
else if (nota >= 11 && nota <= 13) {
    letra= "C";
}
else if (nota >= 8 && nota <= 10) {
    letra= "D";
}
else if (nota >= 0 && nota <= 7) {
    letra= "F";
    }
  console.log("Alumno: ", alumno);
    console.log("Nota: ", nota);
    console.log("Letra: ", letra);


