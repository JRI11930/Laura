import React from 'react';
import { Card, Typography } from 'antd';

const { Title, Paragraph } = Typography;

const Ayuda = () => {
  return (
    <Card style={{ margin: '20px', padding: '20px', width:'95vw' }}>
      <Title level={2}>Centro de Ayuda</Title>
      <Paragraph>
        Bienvenido al Centro de Ayuda. Aquí encontrarás respuestas a las preguntas frecuentes y recursos para ayudarte a sacar el máximo provecho de nuestra plataforma.
      </Paragraph>
      <Title level={4}>Preguntas Frecuentes</Title>
      <Paragraph>
        <strong>1. ¿Cómo puedo inscribirme en un curso?</strong><br />
        Para inscribirte en un curso, navega a la sección "Explora más" y selecciona el curso que te interesa. Luego, haz clic en "Inscribirse".
      </Paragraph>
      <Paragraph>
        <strong>2. ¿Cómo puedo contactar con soporte?</strong><br />
        Puedes contactar con nuestro equipo de soporte enviando un correo electrónico soporte@laura.com.
      </Paragraph>
      <Paragraph>
        <strong>3. ¿Puedo descargar los materiales del curso?</strong><br />
        No, por ahora no es posible descargar los materiales del curso desde la sección de recursos dentro de cada lección.
      </Paragraph>
      <Paragraph>
        <strong>5. ¿Cómo actualizo mi perfil?</strong><br />
        Para actualizar tu perfil, navega a la sección "Perfil" desde el menú principal y haz clic en "Editar perfil".
      </Paragraph>
      <Title level={4}>Recursos Adicionales</Title>
      <Paragraph>
        Visita nuestro <a href="#">Blog</a> para artículos, tutoriales y más recursos educativos.
      </Paragraph>
      <Paragraph>
        Consulta nuestros <a href="#">Webinars</a> para obtener información sobre próximos eventos en vivo y sesiones de capacitación.
      </Paragraph>
      <Paragraph>
        Únete a nuestra <a href="#">Comunidad</a> para conectar con otros estudiantes y profesionales, compartir conocimientos y resolver dudas.
      </Paragraph>
      <Paragraph>
        Accede a la <a href="#">Documentación</a> para obtener guías detalladas sobre cómo utilizar todas las funcionalidades de nuestra plataforma.
      </Paragraph>
      <Paragraph>
        Revisa nuestra <a href="#">Política de Privacidad</a> para entender cómo protegemos tus datos personales.
      </Paragraph>
    </Card>
  );
};

export default Ayuda;
