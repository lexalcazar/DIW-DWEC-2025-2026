/** @author Alex Alcázar */
// Ejercicio 2: Arrays
// Crea un array de números que represente notas de alumnos (al menos 5 valores).
let notas = [7.5, 8.0, 6.5, 9.0, 5.5, 4, 3.5];

//Muestra el array completo por consola.
console.log("Notas originales:", notas);


//usar filter para obtener notas aprobadas
// filter devuelve un nuevo array con los elementos que cumplen la condición
// en este caso, notas mayores o iguales a 5.
let notasAprobadas = notas.filter(nota => nota >= 5);

// Muestra las notas aprobadas por consola.
console.log("Notas aprobadas:", notasAprobadas);

// usar recude para calcular la media de las notas
// reduce acumula un valor (en este caso la suma de las notas) 
// luego se divide por el número de notas para obtener la media.
let sumaNotas = notas.reduce((acumulador, nota) => acumulador + nota, 0);
let mediaNotas = sumaNotas / notas.length;


// redondear la media a 2 decimales
// Multiplicamos por 100, redondeamos y luego dividimos por 100
// para obtener dos decimales.
mediaNotas = Math.round(mediaNotas * 100) / 100; 

// Muestra la media de las notas por consola.
console.log("Media final:", mediaNotas);