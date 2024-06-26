# Laura

## Introducción 

La API de Laura te permite acceder a distintas funcionalidades para la gestión de la base de datos, cómo la gestión de usuarios y el registro de usuarios a cursos y lecciones.

 - **Version actual**: 1.1.0
 - **Desarrolladores**:
    - [Daniela Grisel Flores Quiroz](https://github.com/Daniela-Flores)
    - [José Armando Ramírez Islas](https://github.com/JRI11930)
    - Victor Hugo Mondragón Aguilar
    - Rafael Díaz Contreras Núñez
  
 - **Fecha de lanzamiento**: 24 de mayo de 2024

 ## Autenticación

Hasta el momento Laura cuenta con una autenticación sencilla, la API usa las cookies del navegador para mantener una sesión activa.

## Endpoints 
### Get

    /users: Obtiene la lista de objetos que contienen la información de los usuarios registrados

    /login: Se encarga de validar las credenciales del usuarip y generar la cookie correspondiente 
    
    /logout: Borra la cookie actual para cerrar la sesión activa
    
    /courses: Obtiene la información de los cursos registrados
    
    /lessons: Obtiene la información de las lecciones registradas

    /readUserLessons: Devuelve una lista de objetos con información concerniente a los cursos en los que un usuario está registrado

    /getUserByCookie: Devuelve la información completa del usuario con sesión activa

### POST
    - /users: Registra un nuevo usuario en la base de datos
    
    - /registerCourse: Inscribe a un usuario existente a un curso existente
    
    - /registerLesson: Inscribe a un usuario existente a una lección existente