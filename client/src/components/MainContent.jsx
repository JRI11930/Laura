import React from 'react';
import {Flex} from 'antd';
import Banner from './Banner';
import CourseList from './CourseList';
const MainContent = ({ setSelectedMenu, setSelectedCourseId}) => {
  return (
    <div style={{flex:1}}>
    <Flex vertical gap='2.3rem'>
        <Banner setSelectedMenu={setSelectedMenu} setSelectedCourseId={setSelectedCourseId}/>
        <CourseList setSelectedMenu={setSelectedMenu} />
    </Flex>
    </div>
  )
};

export default MainContent;