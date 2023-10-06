// El reto es dibujar la diagonal principal.

const alto = 10
const ancho = 10

for (i = 0; i< alto; i++) {
    let cuadrado = ''
    for (j = 0; j < ancho; j++) {
        if (i === j){
        cuadrado = cuadrado + '* '
    } else {
        cuadrado = cuadrado + '  '
    }
    }
    console.log(cuadrado)
    }