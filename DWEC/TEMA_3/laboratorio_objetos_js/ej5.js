/**
 * Ejercicio 5
 * @author Alexander Alcázar Cecilia
 */

function abrirVentana(){
    
    const miVentana = window.open("", "", "width=300,height=300");
    
    //miVentana.document.writeln("<h2> La ventana fue creada desde la ventana principal</h2>");
    //miVentana.document.writeln("<Button onclick='window.close()'> Cerrar ventana</button>");
    
    let encabezado=miVentana.document.createElement("h2");
    encabezado.textContent="Ventana creada desde la principal";
    miVentana.document.body.appendChild(encabezado);
    miVentana.document.body.innerHTML += "Mensaje desde la ventana principal";
    
    let boton=miVentana.document.createElement("button");
    boton.textContent="Cerrar Ventana";
    boton.onclick= function(){
          miVentana.close();  
    }
    
    miVentana.document.body.appendChild(boton);
}

