/**
 * Ejercicio 3
 * @author Alexander Alcázar Cecilia
 */


// Creacion de h1

let titulo=document.createElement("h1"); // declaramos la variable que contendra el elemento
titulo.textContent="Encabezaso creado con JavaScript";// añadimos contenido
document.body.appendChild(titulo);// Lo añadimos al body del HTML 

// creacion de p

let parrafo=document.createElement("p");
parrafo.textContent="Parrafo creado en JavaScript de manera dinámica";
document.body.appendChild(parrafo);

// creacion de una lista

let lista=document.createElement("ul"); // ceram,os el elemento lista

for(let i=0; i<3;i++){ // ejecutamos este bucle tres veces
    let item=document.createElement("li");// creamos un item para la lista
    item.textContent="elemento de la lista "+(i+1);// añadimos contenido al elemento
    lista.appendChild(item);// se lo añadimos a la lista
}
let encabezado=document.createElement("h2");// creamos u elemento encabezado para visualiazar bien la lista
encabezado.textContent="Lista";
document.body.appendChild(encabezado);// añadimos al body el elemento encabezado
document.body.appendChild(lista);// añadimos al body el elemento ul