import React from 'react'
import { Button, Card, Flex, Image } from 'antd';
import courseData from '../CoursesData';
import {PlusCircleOutlined} from '@ant-design/icons';

const {Meta} = Card;
const AllCourseList = () => {
  return (
    <>
    <div className='courses-flex'>
  <Flex align="center" gap="large">
    {courseData.map((course) => (
    <Card key={course.id} hoverable className="course-card">
    <Image src={course.picture} style={{ width: '130px' }} />
    <Meta title={course.name} style={{marginTop:'1rem'}}/>
    <Button type="primary" onClick={{}} style={{ marginTop: '1rem',  backgroundColor: '#f5f5f5', color:'black' }}>
                <PlusCircleOutlined style={{ fontSize: '20px' }} />
              </Button>
    </Card>
    ))
    }
  </Flex> 
  </div>
  </>
  )
};

export default AllCourseList;