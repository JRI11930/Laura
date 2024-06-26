import React, { useState } from 'react';
import { Card, Avatar, Descriptions, Button, Input, Upload, message } from 'antd';
import { EditOutlined, SaveOutlined, UploadOutlined } from '@ant-design/icons';
import photo from '../assets/profile.png';
import Graphics from './Graphics';

// Datos iniciales del perfil
const proffile = {
  photo: photo,
  name: "Juan Pérez",
  email: "juan.perez@example.com",
  password: "contraseña123"
};

const Profile = () => {
  
  const [isEditing, setIsEditing] = useState(false);
  const [editableProfile, setEditableProfile] = useState(proffile);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    // Actualiza el estado de profile con los datos editables
    Profile(editableProfile);
    setIsEditing(false);
    message.success('Perfil actualizado con éxito');
  };

  const handleChange = (e) => {
    setEditableProfile({ ...editableProfile, [e.target.name]: e.target.value });
  };

  const uploadProps = {
    beforeUpload: file => {
      // Aquí deberías manejar la carga de la imagen
      message.success('Foto cargada con éxito');
      return false; // Retorna false para evitar que Ant Design suba automáticamente el archivo
    },
  };

  return (
    <Card className='card-profile'>
      <Descriptions title="Información del Perfil" layout="vertical" bordered>
        <Descriptions.Item label="Foto">
          <Avatar size={64} src={proffile.photo} />
          {isEditing && (
            <Upload {...uploadProps}>
              <Button icon={<UploadOutlined />}>Cambiar foto</Button>
            </Upload>
          )}
        </Descriptions.Item>
        <Descriptions.Item label="Nombre">
          {isEditing ? (
            <Input name="name" value={proffile.name} onChange={handleChange} />
          ) : (
            <>
              {proffile.name}
            </>
          )}
        </Descriptions.Item>
        <Descriptions.Item label="Email">
          {isEditing ? (
            <Input name="email" value={proffile.email} onChange={handleChange} />
          ) : (
            <>
              {proffile.email}
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
       <Graphics/>
    </Card>

  );
};

export default Profile;

