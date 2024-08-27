// Variable global para almacenar el texto encriptado
let encryptedText = '';
let decryptedText = '';

var notyf = new Notyf();

// Función para capturar el valor del input y asignarlo a la variable
function captureInput() {
    // Obtengo el valor del input con id 'text-input'
    text = document.getElementById('text-input').value;
    console.log("Texto capturado:", text); // Corroboro en consola que funcione la captura

    // Verificar si el campo de texto está vacío
    if (text.trim() === '') {
        alert("El campo de texto está vacío.");
        return;
    }

    // Llamar a la función de encriptación
    encryptedText = encryptText(text); // Desplazamiento de 3 como ejemplo
    console.log("Texto encriptado:", encryptedText);

    // Mostrar el texto encriptado en el HTML
    document.getElementById('encrypted-text').textContent = encryptedText;

     // Deshabilitar el botón de encriptar
     document.getElementById('encrypt-button').disabled = true;

     // Habilitar el botón de desencriptar
     document.getElementById('desencrypt-button').disabled = false;

     // Habilitar el botón de copiar
     document.getElementById('copy-button').style.display = 'inline';

     // Mostrar el botón de refrescar
     document.getElementById('refresh-button').style.display = 'inline';
}

// Función para desencriptar el texto
function desencrypt() {
    // Llamar a la función de desencriptación
    decryptedText = decryptText(encryptedText);
    
    // Mostrar el texto desencriptado en el HTML
    document.getElementById('encrypted-text').textContent = decryptedText;

    // Deshabilitar el botón de desencriptar después de presionar
    document.getElementById('desencrypt-button').disabled = true;

    // Deshabilitar el botón de copiar
    document.getElementById('copy-button').style.display = 'none';

}

// Función para encriptar el texto añadiendo letras aleatorias
function encryptText(text) {
    let encryptedText = '';
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';

    for (let i = 0; i < text.length; i++) {
        // Añadir la letra original al texto encriptado
        encryptedText += text[i];
        
        // Número de letras aleatorias a añadir (basado en la posición + 1)
        const numRandomLetters = i + 2;

        // Añadir letras aleatorias al texto encriptado
        for (let j = 0; j < numRandomLetters; j++) {
            const randomIndex = Math.floor(Math.random() * alphabet.length);
            encryptedText += alphabet[randomIndex];
        }
    }

    return encryptedText;
}

// Función para desencriptar el texto eliminando las letras aleatorias
function decryptText(encryptedText) {
    let decryptedText = '';
    let i = 0;
    let position = 1; // Iniciamos con la posición 1

    while (i < encryptedText.length) {
        // Añadir la letra original al texto desencriptado
        decryptedText += encryptedText[i];
        
        // Incrementar el índice para saltar las letras aleatorias
        i += position + 2; // Avanzamos a la siguiente letra original

        // Incrementar la posición para el siguiente carácter
        position++;
    }

    return decryptedText;
}

// Función para copiar el texto encriptado al portapapeles
function copy() {
    if (encryptedText){
        const textToCopy = document.getElementById('encrypted-text').textContent;
        navigator.clipboard.writeText(textToCopy).then(() => {
            document.getElementById('alert-copy').textContent = 'Texto encriptado copiado al portapapeles';
        }).catch(err => {
            console.error('Error al copiar el texto: ', err);
        });

        // Deshabilitar el botón de copiar
        document.getElementById('copy-button').style.display = 'none';

        setTimeout(() => {
            document.getElementById('alert-copy').textContent = '';
        }, 1500);
        return true;
    }else{
        document.getElementById('alert-copy').textContent = 'No hay texto encriptado para copiar';
    }

}

// Función para refrescar la página
function refreshPage() {
    // Limpiar los campos de entrada y salida
    document.getElementById('text-input').value = '';
    document.getElementById('encrypted-text').textContent = '';
    document.getElementById('alert-copy').textContent = '';

    // Deshabilitar el botón de encriptar y copiar
    document.getElementById('encrypt-button').disabled = false;
    document.getElementById('desencrypt-button').disabled = true;

    // Ocultar el botón de refrescar y copiar
    document.getElementById('refresh-button').style.display = 'none';
    document.getElementById('copy-button').style.display = 'none';
}

// Función para validar la entrada del texto
function validateInput() {
    // Obtener el valor del input
    const text = document.getElementById('text-input').value;

    // Obtener los mensajes de error
    const lowercaseMessage = document.getElementById('lowercase-message');
    const numberMessage = document.getElementById('number-message');

    // Validar solo letras minúsculas
    const lowercaseRegex = /^[a-z]*$/; // Permitimos que el campo esté vacío
    if (!lowercaseRegex.test(text)) {
        lowercaseMessage.style.display = 'block';
    } else {
        lowercaseMessage.style.display = 'none';
    }

    // Validar ausencia de números
    const numberRegex = /\d/;
        if (numberRegex.test(text)) {
            lowercaseMessage.style.display = 'none';
            numberMessage.style.display = 'block';
        } else {
            numberMessage.style.display = 'none';
        }

    // Habilitar o deshabilitar el botón de encriptar basado en la validación
    const encryptButton = document.getElementById('encrypt-button');
        if (text === '' || lowercaseMessage.style.display === 'block' || numberMessage.style.display === 'block') {
            encryptButton.disabled = true;
        } else {
            encryptButton.disabled = false;
        }
}

// Event listener para el campo de texto
document.getElementById('text-input').addEventListener('input', validateInput);

// Asegúrate de llamar a validateInput cuando la página se carga
document.addEventListener('DOMContentLoaded', validateInput);


