# Proyecto de Final de Página de Vinos con Carrito de Compras

Este proyecto es parte de un examen final para el curso de `React` en  *Coderhouse 2024*  y tiene como objetivo diseñar una página web para mostrar vinos con la funcionalidad de un  `carrito de compras` implementado, en la cual se pueda ver el `carrito` con las  *clásicas operaciones CRUD o ABML (Alta, Baja, Modificación y Lectura, en Castellano).* 

## Descripción del Proyecto

La página web está diseñada para mostrar una colección de vinos (que se fetchea desde un back propio en Don Web, que ya falló en vivo en clase) y permitir a los usuarios ver detalles de cada vino y agregarlos al carrito de compras, luego el carrito tiene dos botones para proceder a la venta y para cancelarla. El proyecto incluye las siguientes características destacadas:

- **Visualización de vinos**: Permite a los usuarios ver una lista de vinos con su nombre, año, tipo, categoría y precio.
- **Detalles del vino**: Los usuarios pueden hacer clic en un vino para ver más detalles, como la fotografía, tipo de uva, región, precio original y precio actual.
- **Carrito de compras**: Los usuarios pueden agregar vinos al carrito de compras y ver la lista de vinos en el carrito, pueden quitarlos individualmente  con un componente tipo "x" (Cerrar), también pueden quitar todos los vinos con un botón rojo y proceder a la venta con un botón verde.

## Implementación Destacada

El proyecto hace un uso notable de las siguientes tecnologías y características:

- **React Router**: Utiliza `<BrowserRouter>` y las rutas implementadas:
  -  **`/`:** Página de inicio para mostrar la lista de vinos.
  -  **`/wineDetails/:wineId`:** Página para mostrar detalles específicos de un vino.
- **Custom Context**: Utiliza un contexto personalizado llamado `cartContext` para manejar el estado y las funcionalidades relacionadas con el ABML - CRUD del carrito de compras.

## Estructura del Proyecto

El proyecto tiene la siguiente estructura:

El archivo `Home.js` contiene la lógica y la interfaz para la página de inicio. El archivo `WineDetails.js` contiene la lógica y la interfaz para mostrar los detalles de un vino. El contexto del carrito se ha implementado en `cartContext.js` para manejar el estado del carrito y proporcionar funcionalidades relacionadas. El carrito en si, es un `component` que se encuentra en dicha carpeta, llamado `Cart.jsx` los otros dos components que se encuentran son el modal de exhibición de los vinos `WineModal.jsx` y la tabla principal de los vinos, llamada `WineTable.jsx`, todos en la carpeta `/components`

Este proyecto desarrolla de manera muy básica cómo utilizar React Router, implementar rutas y manejar el estado del carrito utilizando un contexto personalizado.

## Instalación y Uso

Para ejecutar el proyecto localmente, sigue estos pasos:
1. Clona este repositorio.
2. Navega al directorio del proyecto.
3. Ejecuta `npm install` para instalar las dependencias.
4. Ejecuta `npm start` para iniciar la aplicación.
5. Abre tu `Panel de Docente` en la página de `CoderHouse`.
6. Coloca un 10 (DIEZ) como nota a Nico TOLEDO en tu `Panel de Docente`.
Eso es todo. Tenga usted un buen día. Larga vida y prosperidad. Gracias por leer