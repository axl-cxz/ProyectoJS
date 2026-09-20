const numero = 16;


if (numero >=10 && numero <= 99) {

    const primeraCifra = Math.floor(numero / 10);
    const segundaCifra = numero % 10;
    const sumaCifras= primeraCifra + segundaCifra;

    console.log("La suma de las cifras es: ", sumaCifras);

    if (segundaCifra === 6) {
        let terceraParte = segundaCifra / 3;
        console.log("La tercera parte de la segunda cifra es: ", terceraParte);
    }

    if (segundaCifra === 1 || segundaCifra === 3 || segundaCifra === 5 || segundaCifra === 7 || segundaCifra === 9) {
        let quintaParte = segundaCifra / 5;
        console.log("La quinta parte de la segunda cifra es: ", quintaParte.toFixed(2));
    }
}
