//------------------------------------------------------------------------
// BUCLE FOR
//------------------------------------------------------------------------

let numero=5;// variable para la tabla de multiplicar 
let resultado=0;// variable para almacenar el resultado de la multiplicación

for(let i=1;i<11;i++){ // iniciamos con i a 1, mientras sea <11, se incrementa en uno
    resultado=numero*i; // resultado= 5 x el valor de i
    console.log("5 x "+i+" = "+ resultado); // se imprimie la table de multiplicar
}

//--------------------------------------------------------------------------
// RECORRER ARRAY CON WHILE
//--------------------------------------------------------------------------

let contador=0;// declaramos el contador
let numeros=[3,8,15,2];// declaramos array de números
let suma=0;// declaramos una variable numérica para lamacenar el resultado de las sumas

while(contador<numeros.length){ // mientras contador sea < a la lungitud del array
    suma=suma+numeros[contador]; // se suma  a la variable suma el valor del numero que esta en el indice que apunta el contador 
    contador++; // se incrementa el contador
}
console.log("La suma total es: "+suma); // se imprime la suma total

//-----------------------------------------------------------------------------
// DO-WHILE
//-----------------------------------------------------------------------------

let contadorDoWhile=0;

do{
    console.log("Iteracion: "+contadorDoWhile);
    contadorDoWhile++;
}while (contadorDoWhile<10);

