/**
 * Ejercicio 2
 * @author Alexander Alcázar Cecilia
 */

//console.log(window.innerWidth);

document.writeln("<p> innerWidth: "+window.innerWidth+"</p>");// muestra el ancho visible dentro del navegador
document.writeln("<p> innerHeight: "+window.innerHeight+"</p>");// muestra el alto visible dentro del navegador
document.writeln("<p> screenX: "+window.screenX+"</p>");//posición horizontal de la ventana en la pantalla
document.writeln("<p> screenY: "+window.screenY+"</p>");//posición vertical de la ventana en la pantalla

// botón

function redimensionar(){
    window.resizeTo(600, 600);// redimensiona la ventana a 600 x 600
    console.log("ventana cambiada a 600x600");
}
function mover(){
    window.moveTo(100,100); // mueve la ventana
    console.log("Ventana movida");
}