import React from "react";

const Contact = () => {
  return (
    <div className="contact-page-wrapper" id="contact">
      <h1 className="primary-heading">¿Tienes algo en mente?</h1>
      <h1 className="primary-heading">Escríbenos</h1>
      <div className="contact-form-container">
        <input type="text" placeholder="Tu pregunta..." />
        <button className="secondary-button">Enviar</button>
      </div>
    </div>
  );
};

export default Contact;