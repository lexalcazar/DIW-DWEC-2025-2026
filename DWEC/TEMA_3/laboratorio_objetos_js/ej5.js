/**
 * Ejercicio 5
 * @author Alexander Alcázar Cecilia
 */

function abrirVentana(){ // función para abrir la ventana
    
    const miVentana = window.open("", "", "width=300,height=300");// abrimos la ventana
    
    let encabezado=miVentana.document.createElement("h2"); // variable que almacena el elemento h2
    encabezado.textContent="Ventana creada desde la principal"; // contenido del elemento
    miVentana.document.body.appendChild(encabezado);// lo añadimos al html

    miVentana.document.body.innerHTML += "Mensaje desde la ventana principal"; // mensaje desde la ventana principal
    
    let boton=miVentana.document.createElement("button");// variable que almacena el elemento button
    boton.textContent="Cerrar Ventana"; // texto del botón
    boton.onclick= function(){ // función para cerrar la ventana al pulsar el botón 
          miVentana.close();  
    }
    miVentana.document.body.appendChild(boton);// se añade el botón al html
}

