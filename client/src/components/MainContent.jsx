import React from 'react';
import {Flex} from 'antd';
import Banner from './Banner';
import CourseList from './CourseList';
const MainContent = ({ setSelectedMenu }) => {
  return (
    <div style={{flex:1}}>
    <Flex vertical gap='2.3rem'>
        <Banner/>
        <CourseList setSelectedMenu={setSelectedMenu} />
    </Flex>
    </div>
  )
};

export default MainContent;