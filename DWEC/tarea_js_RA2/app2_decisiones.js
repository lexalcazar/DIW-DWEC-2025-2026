//Programa de clasificación de notas

//Declara una variable let nota = 7; (puedes poner el número que quieras).

//Usando if / else if / else, muestra con console.log():

//"Insuficiente" si la nota es menor que 5

//"Suficiente" si está entre 5 y 5.9

//"Bien" si está entre 6 y 6.9

//"Notable" si está entre 7 y 8.9

//"Sobresaliente" si es 9 o más

//Añade comentarios explicando cada condición.

let nota=10;

if(nota<5){ // si nota es menor a 5

    console.log("Insuficiente"); //imprime Insuficiente

    }else if(nota<6 && nota>=5){ // si es menor que 6 y mayor que cinco

        console.log("Suficiente");// imprime suficinete

        }else if(nota<7 && nota>=6){ // si es menor que 7 y mayor o igual a 6

            console.log("Bien"); // imprime bien

            }else if(nota>=7 && nota<=8.9){ // si es mayor o igual a 7 y menor que 8,9

                console.log("Notable"); // imprime notable

                }else if(nota>=9){ // si nota es mayor o igual a 9

                    console.log("Sobresaliente"); // imprime sobresaliente

                    }
