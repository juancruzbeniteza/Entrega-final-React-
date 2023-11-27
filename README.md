# Proyecto de Comercio Electrónico Elegance

## Descripción del Proyecto

Este es un proyecto de comercio electrónico llamado Elegance, creado como parte de un trabajo. El objetivo principal de este proyecto es desarrollar una aplicación web de comercio electrónico utilizando tecnologías como React, Firebase y otras herramientas asociadas.

## Estructura del Proyecto

El proyecto se organiza en varios archivos y carpetas. Aquí hay una breve descripción de algunos de los archivos clave:

### data.js

Contiene la información de los productos que se mostrarán en la tienda, incluyendo detalles como el título, la imagen, el precio, la descripción, etc. Los productos están organizados como un conjunto de datos en formato de array.

### context.js

Este archivo define el contexto de la aplicación utilizando React Context API. Proporciona un estado global que gestiona la información de los productos, el carrito de compras, y otros detalles relacionados.

### App.js

Es el componente principal de la aplicación que define las rutas y organiza la interfaz de usuario utilizando React Router. Incluye componentes como Navbar, ProductList, Details, Cart, Default y Modal.

### config.js

Configuración de Firebase para la conexión con la base de datos. Se utiliza Firestore para almacenar detalles de pedidos, como nombre, apellido, teléfono y productos comprados.

### Otros Componentes

Hay varios componentes adicionales que manejan aspectos específicos de la interfaz de usuario, como el título, la barra de navegación, la visualización de productos, detalles del producto, carrito de compras, etc.

## Instrucciones para Iniciar el Proyecto

1. **Instalación de Dependencias**

   Asegúrate de tener todas las dependencias instaladas. Puedes hacerlo ejecutando el siguiente comando:

   ```bash
   npm install
Iniciar la Aplicación

Luego de instalar las dependencias, puedes iniciar la aplicación con:

bash
npm start
Esto abrirá la aplicación en tu navegador web.

Uso de la Aplicación
Al ingresar a la aplicación, verás una lista de productos en la página principal.
Puedes hacer clic en un producto para ver más detalles.
En la página de detalles, puedes agregar el producto al carrito.
El carrito se puede ver haciendo clic en la opción "Cart" en la barra de navegación.
En la página del carrito, puedes realizar pedidos ingresando tu información y haciendo clic en "Place Order".
Contribuciones
Las contribuciones a este proyecto son bienvenidas. Si encuentras problemas o tienes sugerencias de mejora, no dudes en abrir un problema o enviar una solicitud de extracción.

Agradecimientos
Agradezco tu interés y contribución a este proyecto. ¡Espero que disfrutes trabajando en él tanto como yo!
