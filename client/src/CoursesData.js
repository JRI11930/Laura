import course1 from './assets/course1.svg';
import course2 from './assets/course2.svg';
import course3 from './assets/course3.svg';

const CoursesData = [
  {
    id: '1',
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
      // Segunda lección añadida aquí
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
      // Puedes seguir añadiendo más lecciones
    ],
  },
  {
    id: '2',
    name: 'CSS',
    picture: course2,
    lessons: [
      // Estructura similar a la del curso de HTML
    ],
  },
  {
    id: '3',
    name: 'JavaScript',
    picture: course3,
    lessons: [
      // Estructura similar a la del curso de HTML
    ],
  },
  {
    id: '4',
    name: 'Responsive Design',
    picture: course2,
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
          // Más preguntas aquí
        ],
      },
      // Más lecciones aquí
    ],
  },
  {
    id: '5',
    name: 'Node.js',
    picture: course3,
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
          // Más preguntas aquí
        ],
      },
      // Más lecciones aquí
    ],
  },
];

export default CoursesData;
