import React from 'react';
import {Card,Flex,Typography, Button} from 'antd';

const Banner = () => {
  return (
    <Card style={{height:260,padding:'20px'}}>
        <Flex vertical gap="30px">
            <Flex vertical align='flex-start'>
                <Typography.Title level={2} strong>No pares de aprender...</Typography.Title>
                <Typography.Text type='secondary' strong>
                    Reanuda justo donde lo dejaste, ¡Tu curso espera por ti!
                </Typography.Text>
            </Flex>
            <Flex gap='large'>
                <Button type='primary' size='large'>Reanuda</Button>
                <Button size='large'>Explora más</Button>
            </Flex>
        </Flex>
    </Card>
  )
};

export default Banner;