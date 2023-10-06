// Ingresar una calificación y determinar si el alumno aprobó o reprobó la materia
// (3.5 es la nota mínima para pasar).

calificacion = prompt('ingresa tu nota')
calificacion = Number(calificacion)

if(calificacion > 5 || calificacion < 0){
    throw new Error ('recuerda que el rango es entre 0 y 5')
}


calificacion < 3.5 
? console.log(`${calificacion}, lo siento, no aprobaste`) 
: console.log(`${calificacion}, felicidades, aprobaste`)