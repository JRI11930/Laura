//import { useEffect, useState } from 'react';
import React from 'react';
import { Flex, Card, Button, Image } from 'antd'; // Importa los componentes necesarios de Ant Design
import courseData from '../CoursesData'; // Asegúrate de que la ruta es correcta y que los datos están en el formato esperado
import { ReloadOutlined } from '@ant-design/icons';

const { Meta } = Card;

// IDs de cursos para pruebas en formato de cadena
const enrolledCourseIds = ['1', '2', '3'];

const MyCourseList = ({ setSelectedMenu, setSelectedCourseId }) => {
  // Filtrar los cursos en los que el usuario está "inscrito" (datos de prueba)
  const filteredCourses = courseData.filter(course => enrolledCourseIds.includes(course.id));
  // Función que maneja el clic en el botón
  const handleButtonClick = (courseId) => {
    setSelectedCourseId(courseId);
    setSelectedMenu('5');
  };

  return (
    <>
      <div className='courses-flex'>
        <Flex align="center" gap="large">
          {filteredCourses.map((course) => (
            <Card key={course.id} hoverable className="course-card">
              <Image src={course.picture} style={{ width: '130px' }} />
              <Meta title={course.name} style={{ marginTop: '1rem' }}/>
              <Button type="primary" onClick={() => handleButtonClick(course.id)} style={{
               marginTop: '1rem',
                backgroundColor: '#f5f5f5', // Color de fondo gris muy claro
                alignItems: 'center',
                justifyContent: 'center',
                color:'black'
                }}>
              <ReloadOutlined style={{ fontSize: '20px', fontWeight:'500px' }}/> {/*ícono de reanudar */}
            </Button>
            </Card>
          ))}
        </Flex>
      </div>
    </>
  );
};

export default MyCourseList;


  /* CONEXIÓN CON BACK
  // Función para obtener los cursos inscritos del usuario
  const fetchMyCourses = async () => {
    try {
      // Suponiendo que la función del backend se llama 'getMyCourses'
      const response = await fetch('/api/getMyCourses');
      if (response.ok) {
        const enrolledCourseIds = await response.json();
        // Filtrar los cursos en los que el usuario está inscrito
        const enrolledCourses = courseData.filter(course => enrolledCourseIds.includes(course.id));
        setMyCourses(enrolledCourses);
      } else {
        // Manejo de errores de la respuesta
        console.error('Error al obtener los cursos inscritos');
      }
    } catch (error) {
      // Manejo de errores de la petición
      console.error('Error al conectar con el backend', error);
    }
  };

  // Llamar a fetchMyCourses cuando el componente se monta
  useEffect(() => {
    fetchMyCourses();
  }, []);
*/

 