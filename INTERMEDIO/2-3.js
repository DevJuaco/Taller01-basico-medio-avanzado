// Ingresar el nombre de un alumno y tres notas por materia 
// (en total tres materias) y determinar qué materias aprobó y cuáles reprobó.

class Estudiante {
    constructor(nombre) {
        this.nombre = nombre
    }
    getNombre() {
        nombre = prompt('ingresa tu nombre')
        return this.nombre
    }
}

class Materias extends Estudiante {
    constructor (nombre, materia, nota) {
        super(nombre)
        this.materia = materia
        this.nota = nota
    }
    getMaterias () {
        const nombrePorMateria = {
            nombre: []
        }
        for (i = 0; i < 3; i++){
            materia = prompt('ingresa el nombre de la materia')
            nombrePorMateria.nombre.push(materia)
        }
        return (nombrePorMateria.nombre)
    }
}