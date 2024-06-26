import React from 'react';
import { Flex, Menu } from 'antd';
import { UserOutlined, QuestionCircleOutlined, ProductOutlined, ReadOutlined } from '@ant-design/icons';
import Logo from '../assets/Logo.png';

const Sidebar = ({ onMenuSelect }) => {
  return (
    <>
      <Flex align="center" justify="center">
        <div className="logo">
          <img src={Logo} alt="Logo" width="180" />
        </div>
      </Flex>
      <Menu mode="inline" defaultSelectedKeys={['2']} className="menu-bar" onSelect={onMenuSelect} items={[
        {
          key: '1',
          icon: <UserOutlined />,
          label: 'Perfil'
        },
        {
          key: '2',
          icon: <ProductOutlined />,
          label: 'Dashboard'
        },
        {
          key: '3',
          icon: <ReadOutlined />,
          label: 'Mis cursos'
        },
        {
          key: '6',
          icon: <QuestionCircleOutlined />,
          label: 'Ayuda'
        },
      ]} />
    </>
  );
};

export default Sidebar;
