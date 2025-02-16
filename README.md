
# Proyecto CRUD con Backend y MongoDB usando Docker Compose


## Tabla de Contenidos
- [Proyecto CRUD con Backend y MongoDB usando Docker Compose](#proyecto-crud-con-backend-y-mongodb-usando-docker-compose)
  - [Tabla de Contenidos](#tabla-de-contenidos)
  - [Descripción](#descripción)
  - [Requisitos Previos](#requisitos-previos)
  - [Pasos para Construir y Ejecutar](#pasos-para-construir-y-ejecutar)
    - [**5. Mejora la sección de prueba de usuarios**](#5-mejora-la-sección-de-prueba-de-usuarios)
  - [Usuarios de Prueba](#usuarios-de-prueba)
  - [Prueba de Registro de Usuarios Admin](#prueba-de-registro-de-usuarios-admin)
    - [**7. Agrega una sección de funcionalidades**](#7-agrega-una-sección-de-funcionalidades)
  - [Funcionalidades](#funcionalidades)
    - [**Administrador**](#administrador)
    - [**Usuario Regular**](#usuario-regular)
    - [**Autenticación y Autorización**](#autenticación-y-autorización)
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
   docker-compose up --build
   Esto realizará lo siguiente:
   Backend: Disponible en http://localhost:3000
   Frontend: Disponible en http://localhost:5174
   MongoDB: Base de datos ejecutándose en el puerto 27017

3. Para detener todos los servicios:
   docker-compose down



---

### **5. Mejora la sección de prueba de usuarios**  
```md
## Usuarios de Prueba
Se incluyen los siguientes usuarios para validar las funcionalidades de la aplicación según su rol:

- **Usuario Admin**  
  - Correo: `admin@gmail.com`  
  - Contraseña: `1234`  

- **Usuario Regular 1**  
  - Correo: `useruno@gmail.com`  
  - Contraseña: `1234`  

- **Usuario Regular 2**  
  - Correo: `userdos@gmail.com`  
  - Contraseña: `1234`  

El rol de "user" permite únicamente gestionar sus propias solicitudes. El rol de "admin" ofrece acceso a un dashboard para la gestión de todas las solicitudes.


## Prueba de Registro de Usuarios Admin
El registro de usuarios con rol `admin` solo se puede hacer mediante Postman para mayor seguridad:

1. Abre Postman y selecciona el método `POST` con la URL `http://localhost:3000/user/registerUser`.

2. En el apartado `Body`, selecciona `raw` y elige `JSON`, luego ingresa la siguiente información:

   ```json
   {
     "name": "admin",
     "entry_date": "02/3/2025",
     "salary": 2000000,
     "email": "admin@gmail.com",
     "password": "1234",
     "role": "admin"
   }

3. Envía la solicitud y luego inicia sesión con el nuevo usuario desde el frontend.


---

### **7. Agrega una sección de funcionalidades**  

```md
## Funcionalidades
### **Administrador**
- Crear, editar, eliminar y buscar solicitudes de empleados.
- Acceso completo a las solicitudes de todos los usuarios.
  
### **Usuario Regular**
- Crear y buscar sus propias solicitudes.
- Visualizar únicamente sus propias solicitudes.

### **Autenticación y Autorización**
- Sistema de autenticación con manejo de sesiones.
- Redirección automática según el rol del usuario.
- Cierre de sesión desde el frontend.
- Encriptacion de tokens y roles en localstorage 


## Stack Tecnológico
- **Frontend**: React, Tailwind, Flowbite
- **Backend**: Fastify con validaciones y manejo de roles.
- **Base de Datos**: MongoDB (base de datos no relacional)
- **Estado**: Manejadores de estado usando `React-Redux`
- **Infraestructura**: Docker y Docker Compose


## Consideraciones de Seguridad
- Validación robusta en el backend para evitar ataques de inyección SQL.
- Autorización basada en roles para controlar el acceso a funcionalidades específicas.
- Registro de administradores restringido a solicitudes autenticadas por Postman.
- Encriptacion de tokens y roles 


## Mejoras Futuras
- Implementación de pruebas unitarias
- Mejorar el manejo de errores en el frontend para brindar retroalimentación más clara al usuario.
- Agregar pruebas automatizadas para asegurar la estabilidad de la aplicación.
