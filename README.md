# React + Vite

# Proyecto de Página de Vinos con Carrito de Compras

Este proyecto es parte de un examen parcial para el curso de React en Coderhouse 2024 y tiene como objetivo diseñar una página web para mostrar vinos con la funcionalidad de un carrito de compras implementado.

## Descripción del Proyecto

La página web está diseñada para mostrar una colección de vinos (que se fetchea desde un back propio) y permitir a los usuarios ver detalles de cada vino y agregarlos al carrito de compras. El proyecto incluye las siguientes características destacadas:

- **Visualización de vinos**: Permite a los usuarios ver una lista de vinos con su nombre, año, tipo, categoría y precio.
- **Detalles del vino**: Los usuarios pueden hacer clic en un vino para ver más detalles, como la fotografía, tipo de uva, región, precio original y precio actual.
- **Carrito de compras**: Los usuarios pueden agregar vinos al carrito de compras y ver la lista de vinos en el carrito.

## Implementación Destacada

El proyecto hace un uso notable de las siguientes tecnologías y características:

- **React Router**: Utiliza `<BrowserRouter>` y las rutas implementadas:
  -  **`/`:** Página de inicio para mostrar la lista de vinos.
  -  **`/wineDetails/:wineId`:** Página para mostrar detalles específicos de un vino.
- **Custom Context**: Utiliza un contexto personalizado llamado `cartContext` para manejar el estado y las funcionalidades relacionadas con el carrito de compras.

## Estructura del Proyecto

El proyecto tiene la siguiente estructura:

El archivo `Home.js` contiene la lógica y la interfaz para la página de inicio. El archivo `WineDetails.js` contiene la lógica y la interfaz para mostrar los detalles de un vino. El contexto del carrito se ha implementado en `cartContext.js` para manejar el estado del carrito y proporcionar funcionalidades relacionadas.

Este proyecto desarrolla de manera muy básica cómo utilizar React Router, implementar rutas y manejar el estado del carrito utilizando un contexto personalizado.

## Instalación y Uso

Para ejecutar el proyecto localmente, sigue estos pasos:
1. Clona este repositorio.
2. Navega al directorio del proyecto.
3. Ejecuta `npm install` para instalar las dependencias.
4. Ejecuta `npm start` para iniciar la aplicación.

Eso es todo. Tenga usted un buen día. Gracias por leer

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
