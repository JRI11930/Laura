import React, { useState } from 'react';
import { Layout, Button, Flex} from 'antd';
import {MenuUnfoldOutlined, MenuFoldOutlined} from '@ant-design/icons';
import Sidebar from '../components/Sidebar.jsx';
import '../styles/Dashboard.css';
import CustomHeader from '../components/Header.jsx';
import MainContent from '../components/MainContent.jsx';
import SideContent from '../components/SideContent.jsx';
import Profile from '../components/Profile.jsx';
import MyCourseList from '../components/MyCourseList.jsx';
import AllCourseList from '../components/AllCourseList.jsx';
import Course from '../components/Course.jsx';

const { Sider, Header, Content} = Layout;

const Dashboard = () => {
    const [collapsed, setCollapsed] = useState(false);
    const [selectedMenu, setSelectedMenu] = useState('2');
    const menuSelectionHandler = (item) => {
        setSelectedMenu(item.key);
      };

   const renderContent = () => {
        switch (selectedMenu) {
          case '1':
          return(
          <>
           <Profile />
          </>);
          case '2':
            return (
              <>
                <MainContent setSelectedMenu={setSelectedMenu} />
                <SideContent/>
              </>
            );
          case '3':
            return <MyCourseList setSelectedMenu={setSelectedMenu}  />;
          case '4':
            return <AllCourseList/>;
          case '5':
            return <Course courseId='1' />;
          default:
              return <Dashboard />;
        }
      };

    return (
        <Layout>
        <Sider theme="light" trigger={null} collapsible collapsed={collapsed} className="sider">
            <Sidebar onMenuSelect={menuSelectionHandler}/>
            <Button type='text' icon={collapsed ? <MenuUnfoldOutlined/> : <MenuFoldOutlined/>}
            onClick={()=> setCollapsed(!collapsed)}
            className='trigger-btn'
            />
        </Sider>
        <Layout>
            <Header className='headeir'>
                <CustomHeader/>
            </Header>
            <Content className='content'>
                <Flex gap='large'>
                {renderContent()}
                </Flex>
            </Content>
        </Layout>
        </Layout>
    );
  };
  
  export default Dashboard;



