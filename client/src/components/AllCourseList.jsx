import React, { useState, useEffect } from 'react';
import { Button, Card, Flex, Image } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';
import courseData from '../CoursesData';

const { Meta } = Card;

const AllCourseList = () => {
  const [userID, setUserId] = useState(null); // Estado para almacenar el ID del usuario

  useEffect(() => {
    fetchUserData();
  }, []); // Se ejecuta solo al montar el componente

  const fetchUserData = async () => {
    try {
      const response = await fetch('/getUserByCookie', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include', // Incluir cookies en la solicitud
      });
  
      if (response.ok) {
        const userData = await response.json();
        setUserId(userData.userID); // Suponiendo que la respuesta tiene un campo 'userId'
      } else {
        console.error('Error fetching user data');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const registerUserInCourse = async (courseID) => {
    if (!userID) {
      console.error('No hay un usuario autenticado');
      return;
    }

    try {
      const response = await fetch('/registerCourse', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userID,
          courseID,
        }),
        credentials: 'include', // Si estás manejando sesiones con cookies
      });

      const data = await response.json();
      
      if (data.message === 'Te inscribiste al curso!') {
        console.log('Usuario inscrito en el curso:', courseID);
        alert(data.message);
        // Aquí puedes actualizar el estado o la interfaz si es necesario
      } else {
        console.error('Error al registrar al usuario en el curso:', data.message);
      }
    } catch (error) {
      console.error('Error al registrar al usuario en el curso:', error);
    }
  };

  const handleRegisterCourse = (courseID) => {
    registerUserInCourse(courseID);
  };
  
  return (
    <>
      <div className='courses-flex'>
        <Flex align="center" gap="large">
          {courseData.map((course) => (
            <Card key={course.id} hoverable className="course-card">
              <Image src={course.picture} style={{ width: '130px' }} />
              <Meta title={course.name} style={{marginTop:'1rem'}}/>
              <Button
                type="primary"
                onClick={() => handleRegisterCourse(course.id)}
                style={{ marginTop: '1rem', backgroundColor: '#f5f5f5', color: 'black' }}
              >
                <PlusCircleOutlined style={{ fontSize: '20px' }} />
              </Button>
            </Card>
          ))}
        </Flex>
      </div>
    </>
  );
};

export default AllCourseList;
