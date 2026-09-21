const numero = 150;

if (numero >= 100) 
    function convertirARomanos(num) {
        const centenas = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
        const decenas  = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
        const unidades = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];

        const c = Math.floor(num / 100);
        const d = Math.floor((num % 100) / 10);
        const u = num % 10;

        return centenas[c] + decenas[d] + unidades[u];
    }

 
    const numeroRomano = convertirARomanos(numero);

    console.log("El numero normal es: ", numero)
    console.log("El número en romano es: ", numeroRomano);
