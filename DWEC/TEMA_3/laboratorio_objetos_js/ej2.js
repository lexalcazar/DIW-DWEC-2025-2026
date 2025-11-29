/**
 * Ejercicio 2
 * @author Alexander Alcázar Cecilia
 */

//console.log(window.innerWidth);

document.writeln("<p> innerWidth: "+window.innerWidth+"</p>");
document.writeln("<p> innerHeight: "+window.innerHeight+"</p>");
document.writeln("<p> screenX: "+window.screenX+"</p>");
document.writeln("<p> screenY: "+window.screenY+"</p>");

// botón

function redimensionar(){
    window.resizeTo(100, 100);
    console.log("ventana cambiada a 600x600");
}
function mover(){
    window.moveTo(100,100);
    console.log("Ventana movida");
}