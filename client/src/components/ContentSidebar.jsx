import React from 'react'
import {Card, Flex, Typography} from 'antd';

const ContentSidebar = () => {
  return (
    <div>
        <Card className='card'>
            <Flex vertical gap='large'>
                <Typography.Title level={4} strong style={{color:'whitesmoke'}}>
                    Tu tiempo de aprendizaje hoy <br/>
                    0 horas 30 minutos
                </Typography.Title>
                <Typography.Title level={4} strong style={{color:'whitesmoke'}}>
                    Este mes <br/>
                   10 horas 20 minutos
                </Typography.Title>
            </Flex>
        </Card>
    </div>
  )
}

export default ContentSidebar