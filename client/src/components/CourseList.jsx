import React from 'react'
import { Button, Card, Flex, Typography, Image } from 'antd';
import courseData from '../CoursesData';

const {Meta} = Card;
const CourseList = ({ setSelectedMenu }) => {
  return (
    <>
    <Flex align="center" justify="space-between">
    <Typography.Title level={3} strong className="primary-color">
      Cursos disponibles
    </Typography.Title>
    <Button
          type="link"
          className="gray-color"
          onClick={() => setSelectedMenu('4')} // Aquí cambias el estado para renderizar MyCourseList
        >
      Ver todo
    </Button>
  </Flex>
  <Flex align="center" gap="large">
    {courseData.slice(0, 3).map((course) => (
    <Card key={course.id} hoverable className="course-card">
    <Image src={course.picture} style={{ width: '130px' }} />
    <Meta title={course.name} style={{marginTop:'1rem'}}/>
    </Card>
    ))
    }
  </Flex> 
  </>
);
}

export default CourseList



