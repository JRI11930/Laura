import course1 from './assets/course1.svg';
import course2 from './assets/course2.svg';
import course3 from './assets/course3.svg';
import course4 from './assets/course4.svg';
import course5 from './assets/course5.svg';
import course6 from './assets/course66.svg';

const CoursesData = [
  {
    id: 1,
    name: 'HTML',
    picture: course1,
    lessons: [
      {
        number: 1,
        title: "Introducción a HTML",
        content: "Aprende sobre la estructura básica de una página web y cómo HTML es utilizado para definir el contenido y la estructura.",
        quiz: [
          {
            pregunta: "¿Qué significa HTML?",
            opciones: ["Hyper Text Markup Language", "Hot Mail", "Hyperlink and Text Markup Language"],
            correcta: "Hyper Text Markup Language",
          },
          {
            pregunta: "¿Cuál es la función principal de HTML?",
            opciones: ["Programar la funcionalidad de las páginas", "Diseñar la apariencia de las páginas", "Estructurar el contenido de las páginas"],
            correcta: "Estructurar el contenido de las páginas",
          },
        ],
      },
      {
        number: 2,
        title: "Elementos y Etiquetas",
        content: "Profundiza en los elementos y etiquetas de HTML, aprendiendo sobre su sintaxis y cómo se utilizan para formar la estructura de las páginas web.",
        quiz: [
          {
            pregunta: "¿Qué elemento HTML se utiliza para definir un párrafo?",
            opciones: ["<div>", "<p>", "<span>"],
            correcta: "<p>",
          },
          {
            pregunta: "¿Cuál es la diferencia entre una etiqueta de apertura y una etiqueta de cierre?",
            opciones: ["La etiqueta de apertura tiene una barra inclinada", "La etiqueta de cierre tiene una barra inclinada", "No hay diferencia"],
            correcta: "La etiqueta de cierre tiene una barra inclinada",
          },
        ],
      },
      {
        number: 3,
        title: "Atributos y Valores",
        content: "Aprende sobre los atributos y valores en HTML y cómo utilizarlos para agregar información adicional a los elementos.",
        quiz: [
          {
            pregunta: "¿Qué atributo se utiliza para agregar un enlace a una etiqueta <a>?",
            opciones: ["href", "src", "link"],
            correcta: "href",
          },
          {
            pregunta: "¿Cuál es el propósito del atributo alt en la etiqueta <img>?",
            opciones: ["Proporcionar una descripción alternativa de la imagen", "Establecer la altura de la imagen", "Definir la URL de la imagen"],
            correcta: "Proporcionar una descripción alternativa de la imagen",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    name: 'CSS',
    picture: course2,
    lessons: [
      {
        number: 1,
        title: "Introducción a CSS",
        content: "Conoce los conceptos básicos de CSS y cómo se utiliza para diseñar y personalizar la apariencia de las páginas web.",
        quiz: [
          {
            pregunta: "¿Qué significa CSS?",
            opciones: ["Cascading Style Sheets", "Computer Style Sheets", "Creative Style Sheets"],
            correcta: "Cascading Style Sheets",
          },
          {
            pregunta: "¿Cuál es la función principal de CSS?",
            opciones: ["Programar la funcionalidad de las páginas", "Diseñar la apariencia de las páginas", "Estructurar el contenido de las páginas"],
            correcta: "Diseñar la apariencia de las páginas",
          },
        ],
      },
      {
        number: 2,
        title: "Selectores y Propiedades",
        content: "Aprende sobre los selectores y propiedades de CSS y cómo utilizarlos para aplicar estilos a los elementos HTML.",
        quiz: [
          {
            pregunta: "¿Qué selector se utiliza para aplicar un estilo a un elemento con un id específico?",
            opciones: ["#", ".", "*"],
            correcta: "#",
          },
          {
            pregunta: "¿Qué propiedad de CSS se utiliza para cambiar el color de fondo de un elemento?",
            opciones: ["color", "background-color", "font-color"],
            correcta: "background-color",
          },
        ],
      },
      {
        number: 3,
        title: "Diseño de la Caja de CSS",
        content: "Descubre cómo funciona el modelo de caja de CSS y cómo utilizar propiedades como padding, margin y border.",
        quiz: [
          {
            pregunta: "¿Qué propiedad se utiliza para agregar espacio dentro de un elemento?",
            opciones: ["margin", "padding", "border"],
            correcta: "padding",
          },
          {
            pregunta: "¿Cuál es la diferencia entre margin y padding?",
            opciones: ["Margin se aplica dentro del borde, padding fuera del borde", "Padding se aplica dentro del borde, margin fuera del borde", "No hay diferencia"],
            correcta: "Padding se aplica dentro del borde, margin fuera del borde",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    name: 'JavaScript',
    picture: course3,
    lessons: [
      {
        number: 1,
        title: "Introducción a JavaScript",
        content: "Aprende los conceptos básicos de JavaScript y cómo se utiliza para agregar interactividad a las páginas web.",
        quiz: [
          {
            pregunta: "¿Qué es JavaScript?",
            opciones: ["Un lenguaje de programación", "Un estilo de CSS", "Un tipo de HTML"],
            correcta: "Un lenguaje de programación",
          },
          {
            pregunta: "¿Cómo se escribe un comentario en JavaScript?",
            opciones: ["<!-- comentario -->", "// comentario", "/* comentario */"],
            correcta: "// comentario",
          },
        ],
      },
      {
        number: 2,
        title: "Variables y Tipos de Datos",
        content: "Aprende sobre las variables y los diferentes tipos de datos en JavaScript.",
        quiz: [
          {
            pregunta: "¿Cómo se declara una variable en JavaScript?",
            opciones: ["variable nombre;", "var nombre;", "v nombre;"],
            correcta: "var nombre;",
          },
          {
            pregunta: "¿Qué tipo de dato es true o false?",
            opciones: ["String", "Number", "Boolean"],
            correcta: "Boolean",
          },
        ],
      },
      {
        number: 3,
        title: "Funciones y Eventos",
        content: "Descubre cómo crear funciones y manejar eventos en JavaScript.",
        quiz: [
          {
            pregunta: "¿Cómo se define una función en JavaScript?",
            opciones: ["function miFuncion() {}", "func miFuncion() {}", "function: miFuncion() {}"],
            correcta: "function miFuncion() {}",
          },
          {
            pregunta: "¿Qué método se utiliza para agregar un evento a un elemento?",
            opciones: ["addEvent()", "addEventListener()", "attachEvent()"],
            correcta: "addEventListener()",
          },
        ],
      },
    ],
  },
  {
    id: 4,
    name: 'Responsive Design',
    picture: course4,
    lessons: [
      {
        number: 1,
        title: "Fundamentos de Diseño Responsivo",
        content: "Descubre cómo crear sitios web que se vean bien en cualquier dispositivo, utilizando técnicas de diseño responsivo.",
        quiz: [
          {
            pregunta: "¿Qué es el diseño responsivo?",
            opciones: ["Un enfoque de diseño que responde a las acciones del usuario", "La habilidad de un sitio web para adaptarse a diferentes tamaños de pantalla", "Un tipo de diseño gráfico"],
            correcta: "La habilidad de un sitio web para adaptarse a diferentes tamaños de pantalla",
          },
          {
            pregunta: "¿Qué unidad de medida es relativa al tamaño de la pantalla?",
            opciones: ["px", "em", "%"],
            correcta: "%",
          },
        ],
      },
      {
        number: 2,
        title: "Media Queries",
        content: "Aprende sobre las media queries en CSS y cómo utilizarlas para aplicar estilos específicos para diferentes tamaños de pantalla.",
        quiz: [
          {
            pregunta: "¿Qué es una media query?",
            opciones: ["Una consulta a la base de datos", "Una regla CSS que aplica estilos según el dispositivo", "Una función de JavaScript"],
            correcta: "Una regla CSS que aplica estilos según el dispositivo",
          },
          {
            pregunta: "¿Cómo se escribe una media query para dispositivos con un ancho máximo de 600px?",
            opciones: ["@media (max-width: 600px) {}", "@media (min-width: 600px) {}", "@media (width: 600px) {}"],
            correcta: "@media (max-width: 600px) {}",
          },
        ],
      },
    ],
  },
  {
    id: 5,
    name: 'Node.js',
    picture: course5,
    lessons: [
      {
        number: 1,
        title: "Introducción a Node.js",
        content: "Aprende los conceptos básicos de Node.js y cómo puede ser utilizado para construir aplicaciones de servidor eficientes.",
        quiz: [
          {
            pregunta: "¿Qué es Node.js?",
            opciones: ["Un framework de JavaScript para el frontend", "Un lenguaje de programación", "Un entorno de ejecución de JavaScript para el servidor"],
            correcta: "Un entorno de ejecución de JavaScript para el servidor",
          },
          {
            pregunta: "¿Qué motor de JavaScript utiliza Node.js?",
            opciones: ["SpiderMonkey", "JavaScriptCore", "V8"],
            correcta: "V8",
          },
        ],
      },
      {
        number: 2,
        title: "Módulos y Paquetes",
        content: "Descubre cómo utilizar módulos y paquetes en Node.js para organizar y reutilizar tu código.",
        quiz: [
          {
            pregunta: "¿Qué comando se utiliza para instalar un paquete en Node.js?",
            opciones: ["install package", "npm install package", "node install package"],
            correcta: "npm install package",
          },
          {
            pregunta: "¿Cómo se exporta una función en Node.js?",
            opciones: ["exports.miFuncion = miFuncion;", "export function miFuncion() {}", "module.exports = miFuncion;"],
            correcta: "module.exports = miFuncion;",
          },
        ],
      },
    ],
  },
  {
    id: 6,
    name: 'SQL',
    picture: course6,
    lessons: [
      {
        number: 1,
        title: "Introducción a SQL",
        content: "Aprende los conceptos básicos de SQL y cómo se utiliza para gestionar bases de datos.",
        quiz: [
          {
            pregunta: "¿Qué significa SQL?",
            opciones: ["Structured Query Language", "Simple Query Language", "Structured Question Language"],
            correcta: "Structured Query Language"
          },
          {
            pregunta: "¿Cuál es la función principal de SQL?",
            opciones: ["Definir la estructura de la base de datos", "Manipular datos en la base de datos", "Ambas"],
            correcta: "Ambas"
          }
        ]
      },
      {
        number: 2,
        title: "Consultas Básicas",
        content: "Aprende a realizar consultas básicas en SQL para recuperar datos de la base de datos.",
        quiz: [
          {
            pregunta: "¿Qué comando se utiliza para seleccionar datos de una tabla?",
            opciones: ["SELECT", "GET", "RETRIEVE"],
            correcta: "SELECT"
          },
          {
            pregunta: "¿Cómo se seleccionan todas las columnas de una tabla?",
            opciones: ["SELECT * FROM table_name", "SELECT all FROM table_name", "SELECT columns FROM table_name"],
            correcta: "SELECT * FROM table_name"
          }
        ]
      }
    ]
  },  
];

export default CoursesData;
