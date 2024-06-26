import React, { useState } from 'react';
import { Card, Typography, Button, Divider, Radio } from 'antd';
import { LeftOutlined } from '@ant-design/icons';
import CoursesData from '../CoursesData.js';

const { Title, Paragraph } = Typography;

const Course = ({ courseId }) => {
  const [currentLesson, setCurrentLesson] = useState(0);
  const [quizStarted, setQuizStarted] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const course = CoursesData.find(c => c.id === courseId);

  if (!course || !course.lessons) {
    return <div>No se encontró el curso o no hay lecciones disponibles.</div>;
  }

  const lesson = course.lessons[currentLesson];

  const goToNextLesson = () => {
    if (currentLesson < course.lessons.length - 1) {
      setCurrentLesson(currentLesson + 1);
      setQuizStarted(false);
      setSelectedAnswers({});
      setShowResults(false);
    } else {
      console.log('Has completado el curso');
    }
  };

  const goToPreviousLesson = () => {
    if (currentLesson > 0) {
      setCurrentLesson(currentLesson - 1);
      setQuizStarted(false);
      setSelectedAnswers({});
      setShowResults(false);
    }
  };

  const handleAnswerChange = (questionIndex, answer) => {
    setSelectedAnswers({ ...selectedAnswers, [questionIndex]: answer });
  };

  const handleSubmitQuiz = () => {
    setShowResults(true);
  };

  const handleResetQuiz = () => {
    setQuizStarted(false);
    setSelectedAnswers({});
    setShowResults(false);
  };

  const isAnswerCorrect = (question, selectedAnswer) => {
    return question.correcta === selectedAnswer;
  };

  return (
    <Card bordered={false} style={{ width: '100%' }}>
      <Title level={2}>{course.name}</Title>
      <Divider />
      <Title level={4}>Lección {lesson.number}: {lesson.title}</Title>
      <Paragraph>
        {lesson.content}
      </Paragraph>
      {lesson.quiz && !quizStarted && (
        <Button type="primary" onClick={() => setQuizStarted(true)} style={{ marginTop: '10px', backgroundColor: 'white', borderColor: 'red', color:'red' }}>
          Iniciar Quiz
        </Button>
      )}
      {quizStarted && lesson.quiz && lesson.quiz.map((q, index) => (
        <div key={index} style={{ marginBottom: '20px' }}>
          <Paragraph strong>{q.pregunta}</Paragraph>
          <Radio.Group
            onChange={(e) => handleAnswerChange(index, e.target.value)}
            value={selectedAnswers[index]}
            disabled={showResults}
          >
            {q.opciones.map((opcion, i) => (
              <Radio
                key={i}
                value={opcion}
                style={{
                  display: 'block',
                  color: showResults
                    ? isAnswerCorrect(q, opcion)
                      ? 'green'
                      : selectedAnswers[index] === opcion
                      ? 'red'
                      : 'inherit'
                    : 'inherit',
                }}
              >
                {opcion}
              </Radio>
            ))}
          </Radio.Group>
        </div>
      ))}
      {quizStarted && lesson.quiz && !showResults && (
        <Button type="primary" onClick={handleSubmitQuiz} style={{ marginTop: '10px', backgroundColor: 'red', borderColor: 'red' }}>
          Enviar Respuestas
        </Button>
      )}
      {showResults && (
        <Button onClick={handleResetQuiz} style={{ marginTop: '10px' }}>
          Reiniciar Quiz
        </Button>
      )}
      <Divider />
      <Button type="default" icon={<LeftOutlined />} onClick={goToPreviousLesson} style={{ marginTop: '10px', marginRight: '10px' }}>
        Lección Anterior
      </Button>
      <Button type="primary" onClick={goToNextLesson} style={{ marginTop: '10px' }}>
        Siguiente Lección
      </Button>
    </Card>
  );
};

export default Course;
