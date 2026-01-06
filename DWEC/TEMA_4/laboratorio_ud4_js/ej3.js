/** 
    * @author Alex Alcázar 
    * @description Ejercicio 3: Objetos y clases básicas*/

class Alumno {

   // constructor para inicializar nombre y nota del alumno
   // con los valores pasados como parámetros
   // al crear un nuevo objeto de la clase Alumno
   // nombre: string con el nombre del alumno
   // nota: número con la nota del alumno

    constructor(nombre, nota) {
        this.nombre = nombre;
        this.nota = nota;
    }

    // metodo resumen para devolver un texto con el nombre y la nota del alumno.
    
    resumen() {
        return `${this.nombre} ha obtenido una nota de ${this.nota}.`;
    }
}

//--------------------------------------------------------------------------------------------------------------------

// creamos objetos de la clase Alumno

let alumno1 = new Alumno("Cristina", 8.5);
let alumno2 = new Alumno("Juan", 6.0);
let alumno3 = new Alumno("Irene", 92);
let alumno4 = new Alumno("Gorka", 5.5);


// mostramos el resumen de cada alumno por consola

console.log(alumno1.resumen()); // "Cristina ha obtenido una nota de 8.5."
console.log(alumno2.resumen()); // "Juan ha obtenido una nota de 6.0."
console.log(alumno3.resumen()); // "Irene ha obtenido una nota de 92."
console.log(alumno4.resumen()); // "Gorka ha obtenido una nota de 5.5."

// los guardamos en un array

let alumnos = [alumno1, alumno2, alumno3, alumno4];

// mostramos el array por consola

console.log(alumnos);
