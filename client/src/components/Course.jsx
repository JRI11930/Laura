import React, { useState } from 'react';
import { Card, Typography, Button, Image, Divider } from 'antd';
import CoursesData from '../CoursesData.js';

const { Title, Paragraph } = Typography;

const CourseComponent = ({ courseId }) => {
  const [currentLesson, setCurrentLesson] = useState(0);
  const course = CoursesData.find(c => c.id === courseId);

  if (!course || !course.lessons) {
    return <div>No se encontró el curso o no hay lecciones disponibles.</div>;
  }

  const lesson = course.lessons[currentLesson];

  const goToNextLesson = () => {
    if (currentLesson < course.lessons.length - 1) {
      setCurrentLesson(currentLesson + 1);
    } else {
      // Aquí puedes manejar el final del curso
      console.log('Has completado el curso');
    }
  };

  return (
    <Card bordered={false} style={{ width: '100%' }}>
      <Title level={2}>{course.name}</Title>
      <Divider />
      <Title level={4}>Lección {lesson.number}: {lesson.title}</Title>
      <Paragraph>
        {lesson.content}
      </Paragraph>
      {lesson.quiz && lesson.quiz.map((q, index) => (
        <div key={index}>
          <Paragraph strong>{q.pregunta}</Paragraph>
          {q.opciones.map((opcion, i) => (
            <Paragraph key={i}>{opcion}</Paragraph>
          ))}
        </div>
      ))}
      <Divider />
      <Button type="primary" onClick={goToNextLesson} style={{ marginTop: '10px' }}>
        Siguiente Lección
      </Button>
    </Card>
  );
};

export default CourseComponent;
