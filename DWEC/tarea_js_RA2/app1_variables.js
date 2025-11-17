//---------------------------------
//Declaracion de variables
//---------------------------------
// Las variables tipo let las utilizamos para que su valor prevalezca en todo el script 
// y no sólo en determinados bloques.
//Declaramos una variable numerica edad en la que guardaremos números.
let edad=40;
//Declaramos una variable tipo String en la que se guarda texto.
let nombre="Alex";
// Declaramos una variable booleana con el valor true.
let esMayorDeEdad=true;
// Declaramos una variable const tipo float. 
// este tipo de variable se declara cuando el valor que almacenamos no va a cambiar
// ni vamos a realizar ningun tipo de operacion que lo vaya a modificar.
const iva=0.21;

//------------------------------------------------------------------
//Operadores
//-----------------------------------------------------------------

let numero1=10;
let numero2=5;
let resultado=0;
resultado=numero1+numero2;// suma
console.log("Resultado de la suma: "+ numero1+" + "+numero2+" = "+resultado);

resultado=numero1-numero2;//resta
console.log("Resultado de la resta: "+ numero1+" - "+numero2+" = "+resultado);

resultado=numero1*numero2;//multiplicación
console.log("Resultado de la multiplicación: "+ numero1+" * "+numero2+" = "+resultado);

resultado=numero1/numero2;//división
console.log("Resultado de la división: "+ numero1+" / "+numero2+" = "+resultado);

// variables iva

let precioSinIva=100;// precio base sin Iva
let precioConIva=0;// declaramos esta variable a 0 para después darle el valor de la operación
precioConIva=precioSinIva+(precioSinIva*iva); // multiplicamos el iva por el precio base y lo sumamos al precio sin IVA
console.log("Hola "+"Alexander "+"el precio final es: "+precioConIva);// concatenación

//---------------------------------------------------------------------
//Ámbito de variables
//---------------------------------------------------------------------

let contador=0;
if(true){
    let contador=99;
    console.log("Contador dentro del if: "+contador);// Contador declarado dentro del if
}
console.log("Contador fuera del if: "+contador); // contador de fuera

//---------------------------------------------------
//Convarsión de tipos
//---------------------------------------------------

let numeroComoTexto="50";// declaramos la variable
numeroComoTexto=numeroComoTexto+1;// ambos se tratan como un texto y se concatenan
console.log("Sumando uno a 50 en tipo texto: "+numeroComoTexto);
console.log("Tipo de dato: "+typeof numeroComoTexto);// tipo de dato almacenado

numeroComoTexto=Number(numeroComoTexto);//conversión a número
console.log("Tipo de dato tras la conversión: "+typeof numeroComoTexto);
numeroComoTexto=numeroComoTexto+6;// aqui se suma uno 
console.log("Sumando seis a 501 en tipo número: "+numeroComoTexto);
