const textArea=document.querySelector(".text-area");
const mensaje= document.querySelector(".mensaje");
 
/*El Encriptador usara la clave murcielago si es vocal se correrá 5 letras a la izquierda 
si es consonante 5 a la derecha en el orden del alfabeto español
la letra "m" se convertira en "0q"
la letra "u" se convertira en "1p"
la letra "r" se convertira en "2w"
la letra "c" se convertira en "3h"
la letra "i" se convertira en "4d"
la letra "e" se convertira en "5z"
la letra "l" se convertira en "6p"
la letra "a" se convertira en "7v"
la letra "g" se convertira en "8l"
la letra "o" se convertira en "9k"

*/
/**Boton Encriptar */
function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado
    /*Para Limpiar el campo del texto donde el usuario ingresa el mensaje */
    textArea.value="";
    /*Para queitar la imagen de la caja de texto de encriptado */
   // mensaje.style.backgroundImage="none";
}


function encriptar(stringEncriptada){
    let matrizCodigo = [["m","0q"],["u","1p"], ["r","2w"],["c","3h"],["i","4d"],["e","5z"],["l","6p"],["a","7v"],["g","8l"],["o","9k"]];
    stringEncriptada=stringEncriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length ; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringEncriptada
}


/**Boton Desencriptar */
function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value)
    mensaje.value = textoEncriptado
    /*Para Limpiar el campo del texto donde el usuario ingresa el mensaje */
    textArea.value="";
    /*Para queitar la imagen de la caja de texto de encriptado */
   // mensaje.style.backgroundImage="none";
}

/*Funcion Desencriptar */
function desencriptar(stringDesencriptada){
    let matrizCodigo = [["m","0q"],["u","1p"], ["r","2w"],["c","3h"],["i","4d"],["e","5z"],["l","6p"],["a","7v"],["g","8l"],["o","9k"]];
    stringDesencriptada=stringDesencriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length ; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0] )
        }
    }
    return stringDesencriptada
}


/** Botón Copiar */
async function btnCopiar() {
    try {
        // Copiar el texto del área de mensaje al portapapeles
        await navigator.clipboard.writeText(mensaje.value);
        
        // Pegar el texto copiado en el área de texto de la clase text-area
        textArea.value = mensaje.value;
        
        // Mostrar una alerta de confirmación
        alert(' Se Copiará el Texto en el TEXT AREA Principal.');
    } catch (err) {
        // Mostrar una alerta si ocurre un error
        alert('No se pudo copiar o pegar el texto.');
    }
}
/**Función btnEncriptar:
Encripta el texto del textArea y coloca el resultado en mensaje. Luego limpia el textArea.

Función encriptar:
Utiliza una matriz de codificación para reemplazar caracteres específicos en el texto de entrada.

Función btnDesencriptar:
Desencripta el texto del textArea y coloca el resultado en mensaje. Luego limpia el textArea.

Función desencriptar:
Utiliza una matriz de codificación inversa para reemplazar los caracteres codificados de vuelta a su forma original.

Función btnCopiar:
Copia el texto del mensaje al portapapeles y muestra una alerta confirmando la acción. No es necesario volver a pegar el texto en el textArea. */