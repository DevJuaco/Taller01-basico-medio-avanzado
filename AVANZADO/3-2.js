// El reto es dibujar todas las columnas impares.

const alto = 10
const ancho = 10 

    
for (i = 0; i< alto; i++) {
    let cuadrado = ''
    for (j = 0; j < ancho; j++) {
        if (j % 2 == 0){
        cuadrado = cuadrado + ''
    } else {
        cuadrado = cuadrado + '*'
    }
    }
    console.log(cuadrado)
    }