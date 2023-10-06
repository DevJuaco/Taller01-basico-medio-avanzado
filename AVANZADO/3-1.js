// Dibujar las siguentes lineas en un cuadrado que equivale a un área de 
// 10 por 10 asteriscos. El resultado debe ser como el que se muestra 
// a continuación de cada reto.

// El reto es dibujar todas las filas pares.

// **********

// **********

// **********

// **********

// **********

//dibuja el cuadrado de 10 * 10

const alto = 10
const ancho = 10 

// for (i = 0; i< alto; i++) {
//     let cuadrado = ''

//     for (j = 0; j < ancho; j++) {
//         cuadrado = cuadrado + '*'
//     }
//     console.log(cuadrado)
// }

// dibuja filas pares

for (i = 0; i< alto; i++) {
    let cuadrado = ''
    for (j = 0; j < ancho; j++) {
        if (i % 2 == 0){
        cuadrado = cuadrado + ''
    } else {
        cuadrado = cuadrado + '*'
    }
    }
    console.log(cuadrado)
    }





