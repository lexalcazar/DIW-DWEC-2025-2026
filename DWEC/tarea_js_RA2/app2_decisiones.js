//---------------------------------------------------------
// PROGRAMA CLASIFICACIÓN DE NOTAS
//----------------------------------------------------------

let nota=7;

if(nota<5){ // si nota es menor a 5

    console.log("Has obtenido un: "+ nota+" Insuficiente"); //imprime Insuficiente

    }else if(nota<6 && nota>=5){ // si es menor que 6 y mayor que cinco

        console.log("Has obtenido un: "+ nota+" Suficinete");// imprime suficinete

        }else if(nota<7 && nota>=6){ // si es menor que 7 y mayor o igual a 6

            console.log("Has obtenido un: "+ nota+" Bien"); // imprime bien

            }else if(nota>=7 && nota<=8.9){ // si es mayor o igual a 7 y menor que 8,9

                console.log("Has obtenido un: "+ nota+" Notable"); // imprime notable

                }else if(nota>=9){ // si nota es mayor o igual a 9

                    console.log("Has obtenido un: "+ nota+" Sobresaliente"); // imprime sobresaliente

                    }
//-------------------------------------------------------------------------------
// VALIDACIÓN DE ENTRADA TIPO TEXTO -> NÚMERO
//-------------------------------------------------------------------------------

let notaTexto="7"; // declaramos notaTexto como un string
let notaNumero; // declaramos notaNumero
console.log(typeof(notaTexto));// imprimimos el tipo de dato que hay en notaTexto
notaNumero=Number(notaTexto);// convertimos notaTexto a número y lo almacenamos en notaNumero
console.log(typeof(notaNumero));// imprimimos el tipo de dato almacenado en notaNumero

//----------------------------------------------------------------------------------
// USO DE SWITCH
//----------------------------------------------------------------------------------

let rolUsuario="caca";

switch(rolUsuario){
    case "admin":
        console.log("Acceso completo");
        break;
    case "usuario":
        console.log("Acceso limitado");
        break;
    case "invitado":
        console.log("Sólo lectura");
        break;
    default:
        console.log("Rol no reconocido");
        break;
}