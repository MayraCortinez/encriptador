# Encriptador de Texto

Este proyecto es un encriptador y desencriptador de texto desarrollado en HTML, CSS y JavaScript. Su objetivo es transformar texto de entrada en una versión encriptada según reglas predefinidas, permitiendo luego su desencriptación.

## Descripción

El encriptador de texto toma una cadena de texto como entrada y aplica un conjunto de reglas para transformarlo en un texto encriptado. Luego, puedes desencriptar el texto encriptado utilizando la misma herramienta. La aplicación incluye un diseño responsive, pensado para funcionar correctamente en dispositivos móviles y de escritorio.

## Características

- **Encriptación de texto**: Convierte el texto de entrada en una versión encriptada según reglas específicas.
- **Desencriptación de texto**: Revierte el proceso de encriptación para recuperar el texto original.
- **Interfaz amigable**: Diseñada con una estética moderna y limpia.
- **Responsive Design**: Adaptable a diferentes tamaños de pantalla, desde dispositivos móviles hasta monitores de escritorio.
- **Funcionalidad de copia**: Permite copiar el texto encriptado o desencriptado con un solo clic.

## Tecnologías Utilizadas

- **HTML**: Estructura básica de la aplicación.
- **CSS**: Estilización de la aplicación, utilizando Flexbox para la disposición de elementos y efectos visuales avanzados como degradados y sombreado.
- **JavaScript**: Lógica para la encriptación, desencriptación y manejo de eventos.

## Configuración y Uso

1. **Clonar el repositorio**:
    ```bash
    git clone https://github.com/tu_usuario/encriptador-de-texto.git
    cd encriptador-de-texto
    ```

2. **Abrir el archivo `index.html` en un navegador**:
    No se requiere configuración adicional ni instalación de dependencias.

3. **Uso de la aplicación**:
    - Ingresa el texto en el campo de entrada.
    - Haz clic en "Encriptar" para convertir el texto en su versión encriptada.
    - Haz clic en "Desencriptar" para revertir el texto encriptado a su versión original.
    - Usa el botón "Copiar" para copiar el texto resultante al portapapeles.

## Estructura del Proyecto

- **`index.html`**: Archivo principal que contiene la estructura HTML de la aplicación.
- **`styles.css`**: Contiene los estilos CSS, incluyendo variables de color y diseño responsive.
- **`script.js`**: Contiene la lógica de encriptación y desencriptación.

## Detalles Técnicos

- **Validación de Entrada**: Sólo se aceptan letras minúsculas y sin números.
- **Responsive Design**: El diseño se adapta a diferentes tamaños de pantalla utilizando Media Queries. Se asegura que los elementos como `sub-containers` mantengan la misma altura y que las imágenes dentro de ellos estén alineadas en la parte superior derecha.
- **Gestión de Textos Largos**: Se utiliza `word-wrap: break-word;` y `overflow-y: auto;` en el contenedor del texto encriptado para manejar adecuadamente textos largos, evitando que se desborden.


## Autor

- **Nombre:** Mayra Estefanía Cortinez
- **Correo Electrónico:** cortinezmayra89@example.com


