// Escribe un programa que le pida al usuario ingresar un número.

// Si el número es múltiplo de 3 debe imprimir en la consola bing.
// Si el número es múltiplo de 5 debe imprimir en la consola bong.
// Si el número es múltiplo tanto de 3 como de 5 debe imprimir en la consola bingbong.
// Si no cumple ninguna de las condiciones anteriores debe imprimir el mismo número.

number = prompt('ingresa un numero')
number = Number(number)

if(number % 15 == 0) {
    console.log('bing bong')
} else if (number % 3 == 0){
    console.log('bing')
} else if (number % 5 == 0){
    console.log('bong')
} else {
    console.log(`el numero ${number} no es multiplo ni de 5 ni de 3`)
}