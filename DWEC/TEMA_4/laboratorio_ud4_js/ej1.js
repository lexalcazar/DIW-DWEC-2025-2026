/** @author Alex Alcázar
 * Ejercicio 1 - Funciones
 */ 

// declaramos variable tipo texto
let texto = "8.4";


//función para convertir tipo texto a float
// esta función convierte el texto a número float
texto=parseFloat(texto);



//función para redondear el número float
// esta función redondea el número float, hacia el entero más cercano
// y lo guarda en la misma variable
texto=Math.round(texto);

// función mostrarResultado para mostrar el resultado por consola
// se le pasa por parámetro el número redondeado
// y se muestra por consola
function mostrarResultado(numero){
    console.log("El resultado es: " + numero);
}

//llamamos a la función
mostrarResultado(texto);