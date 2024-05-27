# Laura

## Introducción 

La API de Laura te permite acceder a distintas funcionalidades para la gestión de la base de datos, cómo la gestión de usuarios y el registro de usuarios a cursos y lecciones.

 - **Version actual**: 1.0.0
 - **Desarrollador**: José Armando Ramírez Islas
 - **Fecha de lanzamiento**: 24 de mayo de 2024
 - **URL Base**: http://localhost:5000

 ## Autenticación

Por el momento Laura no cuenta con método de autenticación para su API. Ya que la API se corre de manera local no se consideró necesario implementar un sistema de autenticación. Sin embargo, en un futuro se puede agregar un sistema de autenticación utilizando tokens de acceso o algún otro método.

## Endpoints 
### Get

    + /users: Obtiene la lista de los usuraios registrados
    + /courses: Obtiene la información de los cursos registrados
    + /lessons: Obtiene la información de las lecciones registradas

### POST
    + /users: Registra un nuevo usuario
    + /registerCourse: Inscribe a un usuario existente a un curso existente
    + /registerLesson: Inscribe a un usuario existente a una lección existente

### Detalles de los endpoints

#### /users (GET)
**URL**: /users
**Método**: GET
**Parámetros**: Ninguno
**Respuesta**: Un arreglo de objetos que representan a los usuarios registrados. Cada objeto contiene los siguientes campos:

- userID: Identificador único del usuario
- name: Nombre del usuario
- email: Correo electrónico del usuario

#### /courses (GET)
**URL**: /courses
**Método**: GET
**Parámetros**: Ninguno
**Respuesta**: Un arreglo de objetos que representan a los cursos registrados. Cada objeto contiene los siguientes campos:
- courseID: Identificador único del curso
- name: Nombre del curso

#### /lessons (GET)
**URL**: /lessons
**Método**: GET
**Parámetros**: Ninguno
**Respuesta**: Un arreglo de objetos que representan a las lecciones registradas. Cada objeto contiene los siguientes campos:
-lessonID: Identificador único de la lección
-courseID: Curso al que pertenece la lección
-name: Nombre de la lección
-type: Tipo de la lección (teórica o práctica)
-points: Puntos que la lección otorga una vez completada

#### /users (POST)
**URL**: /users
**Método**: POST
**Parámetros**: Un objeto que contiene los siguientes campos:
- name: Nombre del usuario
- email: Correo electrónico del usuario
- password: contraseña asociada al usuario
**Respuesta**: {"message": "user created"}

#### /registerCourse (POST)
**URL**: /user_courses
**Método**: POST
**Parámetros**: Un objeto que contiene los siguientes campos:
- userID: Identificador único del usuario
- courseID: Identificador único del curso
**Respuesta**:{"message": "Course registered successfully"}

#### /registerLesson (POST)
**URL**: /registerLesson
**Método**: POST
**Parámetros**: Un objeto que contiene los siguientes campos:
-userID: Identificador único del usuario
-lessonID: Identificador único de la lección
**Respuesta**:{"message": "Lesson registered successfully"}
