/**
 * Ejercicio 4
 * @author Alexander Alcázar Cecilia
 */

let nombre= prompt("Como te llamas?");// Creamos el promt para preguntar el nombre
alert("Hola "+nombre);// Mostramos el mensaje personalizado

let cambiarFondo=confirm("Quires cambiar el color de fondo?");// ¿Cambio de fondo?
if(cambiarFondo){ // si
    let color=prompt("Elige un color: red, green,black");// elegir color
    if(color){// si se elige color
        document.body.style.backgroundColor=color; // ponemos el color de fondo que nos indica el usuario
        console.log("Se cambia el color a "+color);// mostramos en consola este mensaje
        let cambioColor=document.createElement("p");// creamos un parrafo en el documento 
        cambioColor.textContent="Se cambia el color a "+color; // con este contenido
        document.body.appendChild(cambioColor);
    }
    //document.body.style.backgroundColor="black";
    //document.body.style.color="white";
}else{ // no hay cambio de color
    console.log("No se cambia el color");// se muestra esto en consola
    let noColor=document.createElement("p");// creamos un p en el documento
    noColor.textContent="No se cambia el color";// con este texto
    document.body.appendChild(noColor);
}