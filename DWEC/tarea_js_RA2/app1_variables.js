//---------------------------------
//Declaracion de variables
//---------------------------------
// Las variables tipo let las utilizamos cuando va a variar el valor de la variable
// además si declaramos una variable con let dentro de un bloque respeta el valor dentro de él.

// Las variables tipo const se declaran cuando el valor que almacenamos no va a cambiar.
//-----------------------------------------------------------------------------------------------

//Declaramos una variable numérica edad en la que guardaremos números.
let edad=40;
//Declaramos una variable tipo String en la que se guarda texto.
let nombre="Alex";
// Declaramos una variable booleana con el valor true.
let esMayorDeEdad=true;
// Declaramos una variable const tipo float. 
const iva=0.21;

//------------------------------------------------------------------
//Operadores
//-----------------------------------------------------------------
console.log("--------------------------------");
console.log("Operadores");
console.log("--------------------------------");
let numero1=10;// declaramos el primer número
let numero2=5;// declaramos el segundo número

// declaramos variable tupo number para almacenar el resultado de las operaciones
let resultado=0;

resultado=numero1+numero2;// realizamos la suma

// imprimimos el resultado de la suma
console.log("Resultado de la suma: "+ numero1+" + "+numero2+" = "+resultado);

resultado=numero1-numero2;// realizamos la resta

// imprimimos el resultado de la resta
console.log("Resultado de la resta: "+ numero1+" - "+numero2+" = "+resultado);

resultado=numero1*numero2;// realizamos la multiplicación

// imprimimos el resultado de la multiplicación
console.log("Resultado de la multiplicación: "+ numero1+" * "+numero2+" = "+resultado);

resultado=numero1/numero2;//realizamos la división

// imprimimos el resultado de la división
console.log("Resultado de la división: "+ numero1+" / "+numero2+" = "+resultado);

//----------------------------------------------------------------------------------
// variables iva
//-----------------------------------------------------------------------------------
console.log("--------------------------------");
console.log("Cálculo de  Iva");
console.log("--------------------------------");

let precioSinIva=100; // variable con el precio base
let precioConIva=0; // variable que almacenará el resultado del calculo con el iva
precioConIva=precioSinIva+(precioSinIva*iva);// calcúlamos el iva
// imprimimos el resultado final
console.log("Hola "+"Alexander "+"el precio final es: "+precioConIva);

//---------------------------------------------------------------------
//Ámbito de variables
//---------------------------------------------------------------------
console.log("--------------------------------");
console.log("Ámbito de variables");
console.log("--------------------------------");

let contador=0;// valor fuera del bucle
if(true){
    let contador=99;// valor dentro del bucle
    console.log("Contador dentro del if: "+contador);
}
console.log("Contador fuera del if: "+contador);

//---------------------------------------------------
//Convarsión de tipos de datos
//---------------------------------------------------
console.log("--------------------------------");
console.log("Conversión de tipos de datos");
console.log("--------------------------------");

let numeroComoTexto="50";
numeroComoTexto=numeroComoTexto+1;// ambos se tratan como un texto y se concatenan
console.log("Visualizamos que se han concatenado: "+numeroComoTexto);
console.log("Tipo de dato: "+typeof numeroComoTexto);// tipo de dato almacenado
numeroComoTexto=Number(numeroComoTexto);//conversión a número
console.log("Tipo de dato: "+typeof numeroComoTexto);
numeroComoTexto=numeroComoTexto+6;// aqui se suma seis
console.log("Visualizamos la suma: "+numeroComoTexto);
