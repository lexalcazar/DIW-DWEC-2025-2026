/**
 * Ejercicio 1
 * @author Alexander Alcázar Cecilia
 */


//---------------------------
//Date
//-----------------------------
let fecha=new Date();//objeto tipo fecha
let anio= fecha.getFullYear();
let mes=fecha.getMonth()+1;
let dia=fecha.getDate();
console.log(fecha);
console.log("Fecha completa: "+dia+"/"+mes+"/"+anio);
document.writeln("<h2>Objeto date</h2>");
document.writeln("<p>Fecha completa: "+dia+"/"+mes+"/"+anio+"</p>")

//-----------------------------------------
//Math
//----------------------------------------

document.writeln("<h2>Objeto Math</h2>");

// random()
let aleatorio=Math.random();// numero aleatorio
console.log("Número aleatorio: "+aleatorio);// imprimimos por consola
document.writeln("<p>Número aleatorio: "+aleatorio);// imprimimos en el HTML

// Match.max()
let numeroMaximo=Math.max(378,689,1299,33);// numero máximo
console.log("El número mas alto es: "+numeroMaximo);// imprimimos por consola
document.writeln("<p> El número máximo es: "+numeroMaximo+"</p>");// imprimimos en el HTML

//Math.pow()
let potencia=Math.pow(3,2);// potencia
console.log("El resultado de elevar 3 al cuadrado es: "+potencia);// imprimimos por consola
document.writeln("<p> 3 al cuadrado es: "+potencia+"</p>");// imprimimos en el HTmL

//---------------------------------
//Array
//-----------------------------------
document.writeln("<h2>Objeto Array</h2>");

//push()
let miArray=["Hola","chanchito","marranito"];
console.log(miArray);
document.writeln("<p>Mi array contiene: " +miArray+ "</p>");
miArray.push("feliz");
document.writeln("<p> Añadimos contenido al array con push(): "+miArray.join(" ")+"</p>");
console.log(miArray);
console.log(miArray.join(" "));

//pop()
miArray.pop();
console.log(miArray);
document.writeln("<p>Quitamos un elemneto del array con pop(): "+miArray.join(" ")+"</p>");

//lenght
console.log("Longitud del array: "+miArray.length);// imrimimos por consola
document.writeln("<p> La longitud del Array es: "+ miArray.length+"</p>");// imprimimos en el HTML

//----------------------------------------------
//String: longitud, toUpperCase(), includes().
//-----------------------------------------------

document.writeln("<h2>Objeto String</h2>");
let miString= new String("Hola mundo");

// length
console.log("Longitud del String: "+miString.length);
document.writeln("<p> Longitud del String: "+miString.length+"</p>");

// toUpperCase()
console.log("Fase con toUperCase: "+miString.toUpperCase());
document.writeln("<p>Contenido del String en Mayúsculas: "+miString.toUpperCase()+"</p>");

// includes()
console.log("Bucamos en al String si contine la palabra mundo: "+miString.includes("mundo"));
document.writeln("<p>Buscamos en el texto con includes() la palabra mundo:"+miString.includes("mundo")+"</p>");
// ahora includes con una variable
let palabra="Hola";
console.log("buscamos la palabra "+palabra+" en nuestro String: "+miString.includes(palabra));
