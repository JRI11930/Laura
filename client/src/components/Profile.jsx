import React, { useState, useEffect } from 'react';
import { Card, Avatar, Descriptions, Button, Input, Upload, message } from 'antd';
import { EditOutlined, SaveOutlined, UploadOutlined } from '@ant-design/icons';
import photo from '../assets/profile.png';
import Graphics from './Graphics';

const Profile = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [editableProfile, setEditableProfile] = useState(null); // Estado para almacenar el perfil editable

    useEffect(() => {
        fetchUser(); // Cargar datos del usuario al montar el componente
    }, []);

    const fetchUser = async () => {
        try {
            const response = await fetch('/getUserByCookie', {
                method: 'GET',
                credentials: 'include', // Incluir cookies en la solicitud
            });
            if (response.ok) {
                const user = await response.json();
                setEditableProfile(user); // Actualizar el estado con los datos del usuario
            } else {
                console.error('Error fetching user data');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSaveClick = async () => {
        try {
            // Realiza la solicitud para guardar los cambios en el perfil
            const response = await fetch('/updateUserProfile', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(editableProfile),
                credentials: 'include', // Incluir cookies en la solicitud
            });
            if (response.ok) {
                message.success('Perfil actualizado con éxito');
                setIsEditing(false);
            } else {
                const error = await response.json();
                message.error(`Error: ${error.message}`);
            }
        } catch (error) {
            console.error('Error:', error);
            message.error('Error al conectar con el servidor');
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditableProfile(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const uploadProps = {
        beforeUpload: file => {
            // Manejar la carga de la imagen aquí si es necesario
            message.success('Foto cargada con éxito');
            return false; // Retorna false para evitar que Ant Design suba automáticamente el archivo
        },
    };

    if (!editableProfile) {
        return null; // Mostrar spinner de carga u otra indicación mientras se carga el perfil
    }

    return (
        <Card className='card-profile'>
            <Descriptions title="Información del Perfil" layout="vertical" bordered>
                <Descriptions.Item label="Foto">
                    <Avatar size={64} src={photo} />
                    {isEditing && (
                        <Upload {...uploadProps}>
                            <Button icon={<UploadOutlined />}>Cambiar foto</Button>
                        </Upload>
                    )}
                </Descriptions.Item>
                <Descriptions.Item label="Nombre">
                    {isEditing ? (
                        <Input name="username" value={editableProfile.username} onChange={handleChange} />
                    ) : (
                        <>
                            {editableProfile.username}
                            <Button type="text" icon={<EditOutlined />} onClick={handleEditClick} />
                        </>
                    )}
                </Descriptions.Item>
                <Descriptions.Item label="Email">
                    {isEditing ? (
                        <Input name="email" value={editableProfile.email} onChange={handleChange} />
                    ) : (
                        <>
                            {editableProfile.email}
                            <Button type="text" icon={<EditOutlined />} onClick={handleEditClick} />
                        </>
                    )}
                </Descriptions.Item>
                {/* No incluir la contraseña para edición por razones de seguridad */}
            </Descriptions>
            {isEditing && (
                <Button type="primary" icon={<SaveOutlined />} onClick={handleSaveClick}>
                    Guardar
                </Button>
            )}
            <Graphics />
        </Card>
    );
};

export default Profile;
