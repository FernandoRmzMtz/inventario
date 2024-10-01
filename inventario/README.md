# Inventario

## Descripción del Proyecto 

Este proyecto es una aplicación de gestión de inventario que permite a los usuarios agregar, visualizar, eliminar y calcular los costos y ganancias de productos. Está construido utilizando **Angular** para el frontend y **Express** junto con **MongoDB** para el backend.

## Tecnologías Utilizadas:

- **Frontend:**
  - [Angular](https://angular.io/) - Framework para construir aplicaciones web dinámicas.
  - [Bootstrap](https://getbootstrap.com/) - Biblioteca CSS para diseño responsivo.

- **Backend:**
  - [Express](https://expressjs.com/) - Framework para Node.js que facilita la creación de aplicaciones web.
  - [MongoDB](https://www.mongodb.com/) - Base de datos NoSQL que almacena los datos de los productos.

## **Instrucciones**
Primero, asegúrate de tener instalado Node.js y MongoDB en tu máquina. Luego, clona el repositorio de tu proyecto si aún no lo has hecho. Accede a la carpeta del servidor y ejecuta npm install para instalar las dependencias necesarias. Asegúrate de que MongoDB esté en ejecución y verifica la conexión en tu archivo server.js; la línea mongoose.connect('mongodb://localhost:27017/inventario') debe estar configurada correctamente para una base de datos local, la colección donde se guardaran los datos debe llamarse **producto**. Después, ejecuta node server.js para iniciar el servidor en el puerto 3000.

Ahora, accede a la carpeta del frontend de tu aplicación Angular y ejecuta npm install para instalar sus dependencias. Asegúrate de que tu archivo appConfig tenga el proveedor de httpClient para que las peticiones HTTP funcionen correctamente. Luego, ejecuta ng serve para iniciar la aplicación Angular en http://localhost:4200/. La aplicación debería recargarse automáticamente si realizas cambios en los archivos fuente.


## Angular version
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.1.1.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
