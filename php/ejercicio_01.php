<?php
// FASE DE ENTRADA: DECLARACIÓN DE VARIABLES Y PREGUNTAS
// let producto ="Zapatillas Adidas":

$producto = "Zapatillas Adidas";
// const curso = "Lógica y Programación";
$precio = 350;
$descuento = 0.08;
$igv = 0.18;

// FASE DE PROCESO: ES LA LÓGICA DEL PROGRAMA
$precioIGV = $precio * $igv;
$precioDescuento = $precio * $descuento;
$precioFinal = $precio + $precioIGV + $precioDescuento;

// FASE DE SALIDA: IMPRESIÓN DE RESULTADOS.
// Modo JavaScript: console.log("El precio del producto es: ", precio);
echo "El precio del producto es: S/ " . $precio. "<br>";
echo "El iGV es: S/ " . $precioIGV. "<br>";
echo "El descuento es :S/" . $precioDescuento. "<br>";
echo "El precio final es: S/ " . $precioFinal. "<br>"; 
