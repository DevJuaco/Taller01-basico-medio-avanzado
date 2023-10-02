// Escribe un programa que le pida al usuario una frase y un número. 
// El programa debe imprimir la frase en la consola el número de veces que ingresó el usuario. 
// Por ejemplo, si el usuario ingresó la frase Hola Mundo y el número 5, el programa debe imprimir Hola Mundo 5 veces:

frase = prompt('ingresa una frase')

number = prompt('ingresa un numero')
number = Number(number)

for (i = 0; i < number; i++) {
    console.log(frase)
}