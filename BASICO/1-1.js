// Escribe un programa que pida al usuario ingresar un número, luego pide un segundo número e imprime 
// en la consola la suma de los dos números ingresados.

number1 = prompt('Ingresa un numero')
number1 = Number (number1)

number2 = prompt('Ingresa otro numero')
number2 = Number (number2)

function suma () {
    result = number1 + number2
    console.log(`la suma de ${number1} + ${number2} es igual a ${result}`)
}

suma()