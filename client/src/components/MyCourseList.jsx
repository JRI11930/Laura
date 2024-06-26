import React, { useState, useEffect } from 'react';
import { Flex, Card, Button, Image } from 'antd';
import { ReloadOutlined } from '@ant-design/icons';
import courseData from '../CoursesData';

const { Meta } = Card;

const MyCourseList = ({ setSelectedMenu, setSelectedCourseId }) => {
  const [enrolledCourseIds, setEnrolledCourseIds] = useState([]); // Array of course IDs
  const [enrolledCourses, setEnrolledCourses] = useState([]); // State for detailed courses

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      const response = await fetch('/getUserByCookie', {
        method: 'GET',
        credentials: 'include', // Incluir cookies en la solicitud
      });
      if (response.ok) {
        const userData = await response.json();
        fetchMyCourses(userData.userID);
      } else {
        console.error('Error fetching user data');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const fetchMyCourses = async (userID) => {
    try {
      const response = await fetch(`/readUserCourses?userId=${userID}`);
      if (response.ok) {
        const coursesData = await response.json(); // Esto debería ser un array de objetos como [{ "courseID": 1 }, { "courseID": 2 }]
        const courseIds = coursesData.map(course => course.courseID); // Mapea el array de objetos a un array de números
        setEnrolledCourseIds(courseIds); // Actualiza el estado con los IDs de los cursos
  
        // Mapear los IDs de los cursos a los datos de los cursos
        const mappedCourses = courseIds.map(courseID => {
          const courseDataEntry = courseData.find(course => course.id === courseID);
          if (courseDataEntry) {
            return courseDataEntry; // Devolver el objeto del curso correspondiente
          } else {
            console.error(`Course data not found for ID: ${courseID}`);
            return null; // Manejar datos de cursos faltantes
          }
        }).filter(course => course !== null); // Filtrar cursos no encontrados
  
        setEnrolledCourses(mappedCourses); // Actualizar el estado con los cursos inscritos
      } else {
        console.error('Error al obtener los cursos inscritos');
      }
    } catch (error) {
      console.error('Error al conectar con el backend', error);
    }
  };  

  const handleButtonClick = (courseID) => {
    setSelectedCourseId(courseID);
    setSelectedMenu('5');
  };

  return (
    <>
      <div className='courses-flex'>
        <Flex align="center" gap="large">
          {enrolledCourses.map((course) => (
            <Card key={course.id} hoverable className="course-card">
              <Image src={course.picture} style={{ width: '130px' }} />
              <Meta title={course.name} style={{ marginTop: '1rem' }} />
              <Button type="primary" onClick={() => handleButtonClick(course.id)} style={{
                marginTop: '1rem',
                backgroundColor: '#f5f5f5',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'black'
              }}>
                <ReloadOutlined style={{ fontSize: '20px', fontWeight: '500px' }} />
              </Button>
            </Card>
          ))}
        </Flex>
      </div>
    </>
  );
};

export default MyCourseList;