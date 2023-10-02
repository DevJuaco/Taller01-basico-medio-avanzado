// Escribe un programa para la consola que le pida al usuario dos números e imprima en la consola los números en ese rango. 
// Por ejemplo, si el usuario ingresa 5 como primer número y 10 como segundo número, el programa debe imprimir:
// 5, 6, 7, 8, 9, 10

number1 = prompt('ingresa un numero')
number1 = Number(number1)

number2 = prompt('ingresa un numero')
number2 = Number(number2)

for (i = number1; i <= number2; i++) {
    console.log(number1++)
}