import React from 'react';
import {Avatar, Flex,Typography} from 'antd';
import Search from 'antd/es/input/Search'
import {MessageOutlined, NotificationOutlined} from '@ant-design/icons'
import profile from '../assets/profile.png';

const CustomHeader = () => {
  return (
    <div class="headerrr">
    <Flex justify='space-between' align='center' gap="3rem">
        <Typography.Title level={3} type="secondary"></Typography.Title>
        <Flex align='center' gap="3rem">
            <Search  placeholder='Búsqueda' allowClear/>
            <Flex align='center' gap="10px">
                <MessageOutlined className='header-icon'/>
                <NotificationOutlined className='header-icon'/>
                <Avatar size={60} src={profile}/>
            </Flex>
        </Flex>
    </Flex>
    </div>
  )
};

export default CustomHeader;