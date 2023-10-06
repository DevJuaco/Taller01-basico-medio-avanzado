// Ingresar tres calificaciones, calcular el promedio y determinar si 
// el alumno aprobó la materia (3.5 es la nota mínima para pasar).

function getNotas() {
    let notas = []

    for (i = 0; i < 3; i++) {
        const nota = prompt('ingresa tu nota')
        
        if(nota > 5 || nota < 0){
            throw new Error ('recuerda que el rango es entre 0 y 5')
        } else {
            notas.push(nota)
        }
    }
    return notas
}

function getPromedio() {
    let calificaciones = getNotas()
    let suma = 0

    for(i = 0; i < calificaciones.length; i++) {
    suma += parseInt(calificaciones[i])
    }
    promedio = suma / 3

    promedio < 3.5 
    ? console.log(`${promedio}, lo siento, no aprobaste`) 
    : console.log(`${promedio}, felicidades, aprobaste`)
}

getPromedio()