import React, { useState } from 'react';
import { Layout, Button, Flex} from 'antd';
import {MenuUnfoldOutlined, MenuFoldOutlined, LogoutOutlined} from '@ant-design/icons';
import Sidebar from '../components/Sidebar.jsx';
import '../styles/Dashboard.css';
import CustomHeader from '../components/Header.jsx';
import MainContent from '../components/MainContent.jsx';
import SideContent from '../components/SideContent.jsx';
import Profile from '../components/Profile.jsx';
import MyCourseList from '../components/MyCourseList.jsx';
import AllCourseList from '../components/AllCourseList.jsx';
import Course from '../components/Course.jsx';
import Ayuda from '../components/Ayuda.jsx';

const { Sider, Header, Content} = Layout;

const Dashboard = () => {
    const [collapsed, setCollapsed] = useState(false);
    const [selectedMenu, setSelectedMenu] = useState('2');
    const [selectedCourseId, setSelectedCourseId] = useState(null);
    
    const menuSelectionHandler = (item) => {
        setSelectedMenu(item.key);
      };

   const renderContent = () => {
        switch (selectedMenu) {
          case '1':
          return(
          <>
           <Profile/>
          </>);
          case '2':
            return (
              <>
                <MainContent setSelectedMenu={setSelectedMenu} setSelectedCourseId={setSelectedCourseId} />
                <SideContent/>
              </>
            );
          case '3':
            return <MyCourseList setSelectedMenu={setSelectedMenu}  setSelectedCourseId={setSelectedCourseId} />;
          case '4':
            return <AllCourseList/>;
          case '5':
            return <Course courseId={selectedCourseId} />;
          case '6':
            return <Ayuda/>;
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
            <Button
            size='circle'
            icon={<LogoutOutlined className='logout-btn' style={{fontSize:'25px'}}/>}
            className="logout-button"
            onClick={() => console.log('Logout')}
            style = {{padding:'25px'}}
            />
        </Layout>
        </Layout>
    );
  };
  
  export default Dashboard;



