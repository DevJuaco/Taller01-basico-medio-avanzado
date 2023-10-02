// Crea un programa a partir de las siguientes instrucciones:

// Crea una variable llamada nombres con un arreglo que tenga los siguientes elementos: "Pedro", "Pablo", "María", "Juan", "Diana".
// Pídele al usuario que ingrese un nombre e insértalo al final del arreglo que creaste en el paso 1.
// Pídele al usuario que ingrese otro nombre y reemplaza la tercera posición del arreglo con este valor.
// Recorre el arreglo e imprímelo.
// Un ejemplo de cómo se comportaría el programa en la consola sería el siguiente:

// Ingresa un nombre > Camilo
// Ingresa otro nombre > Ariel
// Pedro
// Pablo
// Ariel
// Juan
// Diana
// Camilo

nombres = ["Pedro", "Pablo", "María", "Juan", "Diana"]

nombre = prompt('ingresa un nombre')
list = nombres.push(nombre)

nombre2 = prompt('ingresa un nombre para reemplazar')
nombres[2] = nombre2


console.log(nombres)




