/**
 * Ejercicio 6
 * @author Alexander Alcázar Cecilia
 */

let nombreGuardado=localStorage.getItem("nombre"); // cargamos en esta variable si hay o no datos guardados

// revisamos si hay algun nombre guardado

if(nombreGuardado){ // hay datos guardados
    alert("Hola "+nombreGuardado);// mensaje de bienvenida
    console.log("Nombre del usuario = "+nombreGuardado);// mensaje en consola
}else{ // no hay datos guardados
    let nombre=prompt("¿Como te llamas?"); // pormpt preguntando el nombre
    localStorage.setItem("nombre", nombre); // se guarda
}

// funcion para borrar datos (la activa el boton del HTML)

function borrarDatos(){ 
    localStorage.removeItem("nombre"); // borra el dato almacenado
    alert("Datos borrados"); // mensaje de confirmacion
    console.log("Datos del usuario borrados") // mensaje en la consola
}

