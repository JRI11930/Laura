import React from 'react'
import {Flex, Typography, Button, List, Avatar} from 'antd'
import person from '../assets/person.png'

const data=[
    {
      "actividad": "Completaste lección 1",
      "orderTime": 1
    },
    {
      "actividad": "Pasaste quiz 1",
      "orderTime": 1
    },
    {
      "actividad": "Finalizaste ejercicio 2",
      "orderTime": 2
    },
    {
      "actividad": "Completaste lección 3",
      "orderTime": 3
    },
    {
      "actividad": "Pasaste quiz 4",
      "orderTime": 5
    }
  ]
  
const Activity = () => {
  return (
    <Flex vertical gap='small'>
        <Flex align='center' justify='space-between' gap='large'>
        <Typography.Title level={3} strong className="primary-color">
        Tu actividad reciente
        </Typography.Title>
        <Button type="link" className="gray-color">
        Ver todo
        </Button> 
        </Flex>
        <List pagination dataSource={data}
        renderItem={(act,index)=>(
            <List.Item>
                <List.Item.Meta 
                avatar = {<Avatar src={person}/>} 
                description={act.actividad}>
                </List.Item.Meta>
                <span className='gray--color'>
                    {act.orderTime}{act.orderTime===1? 'day ago' : 'days ago'}
                </span>
            </List.Item>
        )}/>
    </Flex>
  )
}

export default Activity