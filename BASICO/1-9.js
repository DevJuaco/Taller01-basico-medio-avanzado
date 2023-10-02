// Escribe un programa que:

// Le pida al usuario un número y cree un arreglo de números empezando en 
// el 1 hasta el número que el usuario ingrese (incluyéndolo)
// Elimine el segundo elemento.
// Recorra e imprima el arreglo.

// Ingresa un número> 5
//     1
//     3
//     4
//     5

number = prompt('ingresa un numero')
number = Number(number)

numbers = []

for(i = 1; i <= number; i++) {
   numbers.push(i)
   delete(numbers[1])
}

console.log(numbers)