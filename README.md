
# Proyecto CRUD con Backend y MongoDB usando Docker Compose


## Tabla de Contenidos
- [Proyecto CRUD con Backend y MongoDB usando Docker Compose](#proyecto-crud-con-backend-y-mongodb-usando-docker-compose)
  - [Tabla de Contenidos](#tabla-de-contenidos)
  - [Descripción](#descripción)
  - [Requisitos Previos](#requisitos-previos)
  - [Pasos para Construir y Ejecutar](#pasos-para-construir-y-ejecutar)
  - [Restaurar base de datos](#restaurar-base-de-datos)
    - [**sección de prueba de usuarios**](#sección-de-prueba-de-usuarios)
  - [Usuarios de Prueba](#usuarios-de-prueba)
  - [Prueba de Registro de Usuarios Admin](#prueba-de-registro-de-usuarios-admin)
  - [sección de funcionalidades](#sección-de-funcionalidades)
  - [Funcionalidades](#funcionalidades)
    - [**Administrador**](#administrador)
    - [**Usuario Regular**](#usuario-regular)
    - [**Autenticación y Autorización**](#autenticación-y-autorización)
    - [**Autenticación y Autorización**](#autenticación-y-autorización-1)
  - [Stack Tecnológico](#stack-tecnológico)
  - [Consideraciones de Seguridad](#consideraciones-de-seguridad)
  - [Mejoras Futuras](#mejoras-futuras)

## Descripción
Este proyecto es una aplicación CRUD de ejemplo que permite la gestión de solicitudes de usuarios mediante un frontend React, un backend Fastify y una base de datos MongoDB. Todo el sistema se encuentra completamente dockerizado para facilitar su despliegue y administración con `docker-compose`.


## Requisitos Previos
- [Docker](https://www.docker.com/): Versión 20.x o superior
- [Docker Compose](https://docs.docker.com/compose/): Versión 1.27 o superior


## Pasos para Construir y Ejecutar
1. Clonar el repositorio:
   ```bash
   git clone <URL_DEL_REPOSITORIO>
   cd ProyectoCompleto

2. Construir y levantar todos los servicios:
   ```bash
   docker-compose up --build
   Esto realizará lo siguiente:
   Backend: Disponible en http://localhost:3000
   Frontend: Disponible en http://localhost:5174
   MongoDB: Base de datos ejecutándose en el puerto 27017

3. Para detener todos los servicios:
   ```bash
   Ctrl + c
   docker-compose down

## Restaurar base de datos
Una vez que todos los servicios estén en funcionamiento, se debe restaurar la base de datos para cargar los datos de prueba. Sigue estos pasos:

   1. Abre una nueva pestaña o ventana de la terminal mientras los contenedores están corriendo.

   2. Navega al directorio donde se encuentra la carpeta de respaldo con el siguiente comando:
     ```bash
     cd ruta/del/proyecto

   3. Ejecuta el siguiente comando para restaurar la base de datos en MongoDB (el contenedor mongodb debe estar en ejecución):
     ```bash
     mongorestore --uri="mongodb://localhost:27017" ./backup/test
Listo reinicia el contenedor y ahora si a probar.

### **sección de prueba de usuarios**  
```md
## Usuarios de Prueba
Se incluyen los siguientes usuarios para validar las funcionalidades de la aplicación según su rol:

  **Usuario Admin**  
  - Correo: `admin@gmail.com`  
  - ontraseña: `1234`  

  **Usuario Regular 1**
  - Correo: `useruno@gmail.com` 
  - Contraseña: `1234`  

  **Usuario Regular 2** 
  - Correo: `userdos@gmail.com`  
  - Contraseña: `1234`  

El rol de "user" permite únicamente gestionar sus propias solicitudes. 

El rol de "admin" ofrece acceso a un dashboard para la gestión de todas las solicitudes.


## Prueba de Registro de Usuarios Admin
El registro de usuarios admin solo se puede hacer a través de Postman para mayor seguridad. Asegúrate de que el endpoint está protegido con una clave o un mecanismo de seguridad (por ejemplo, solo accesible desde un origen permitido).

1. Abre Postman y selecciona el método `POST` con la URL `http://localhost:3000/user/registerUser`.

2. En el apartado `Body`, selecciona `raw` y elige `JSON`, luego ingresa la siguiente información:

   ```json
   {
     "name": "admin2",
     "entry_date": "02/3/2025",
     "salary": 2000000,
     "email": "admin2@gmail.com",
     "password": "1234",
     "role": "admin"
   }

3. Envía la solicitud y luego inicia sesión con el nuevo usuario desde el frontend.
- Correo: `admin2@gmail.com`
- Contraseña: `1234`

## sección de funcionalidades

```md
## Funcionalidades
### **Administrador**
- Crear, editar, eliminar y buscar solicitudes de empleados.
- Acceso completo a las solicitudes de todos los usuarios.
  
### **Usuario Regular**
- Crear y buscar sus propias solicitudes.
- Visualizar únicamente sus propias solicitudes.

### **Autenticación y Autorización**
### **Autenticación y Autorización**
- Sistema de autenticación basado en JWT.
- Los tokens se almacenan de forma segura en el frontend usando `localStorage` y se utilizan para las solicitudes posteriores.
- Redirección automática según el rol del usuario para garantizar que acceden a las áreas correspondientes.
- Cierre de sesión desde el frontend con eliminación del token de `localStorage`.



## Stack Tecnológico
- **Frontend**: React (React Router, React Hooks), Tailwind CSS, Flowbite
- **Backend**: Fastify (con plugins para validación y manejo de roles como fastify-jwt)
- **Base de Datos**: MongoDB (con Mongoose para la gestión de esquemas y modelos)
- **Estado**: React-Redux (con Thunk para el manejo de acciones asincrónicas)
- **Infraestructura**: Docker, Docker Compose para el despliegue de contenedores


## Consideraciones de Seguridad
- Validación robusta en el backend para evitar ataques de inyección SQL.
- Autorización basada en roles para controlar el acceso a funcionalidades específicas.
- Registro de administradores restringido a solicitudes autenticadas por Postman.
- Encriptacion de tokens y roles 


## Mejoras Futuras
- Implementación de pruebas unitarias y de integración.
- Mejorar el manejo de errores en el frontend para brindar retroalimentación más clara al usuario.
- Agregar pruebas automatizadas para asegurar la estabilidad de la aplicación.
- Optimización del rendimiento del backend y manejo de grandes volúmenes de datos.
- Mejorar la interfaz de administración con más herramientas para la gestión de usuarios.
