// Escribe un programa que pida al usuario su año de nacimiento y nombre e imprime su edad actual en la consola 
// con la frase Hola X, grandioso! Tienes X años. Asume que el año actual es 2020 y el usuario ingresa 2000, 
// el programa debe imprimir en la consola: Hola Juan, grandioso! Tienes 20 años

name = prompt('ingresa tu nombre')

fecha = prompt('ingresa tu año de nacimiento')
fecha = Number(fecha)

edad = 2023 - fecha
console.log(`Hola ${name}, grandioso! Tienes ${edad} años`)