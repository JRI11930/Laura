import React from "react";
import Logo from "../assets/Logo.svg";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-wrapper">
    <div className="footer-wrapper-in">
      <div className="footer-section-one">
        <div className="footer-icons">
          <BsTwitter />
          <SiLinkedin />
          <BsYoutube />
          <FaFacebookF />
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <span>Nosotros</span>
          <span>Soporte</span>
          <span>Contacto</span>
          <span>Trayectoria</span>
          <span>Testimonios</span>
        </div>
        <div className="footer-section-columns">
          <span>244-5333-7783</span>
          <span>hello@laura.com</span>
          <span>press@laura.com</span>
          <span>contact@laura.com</span>
        </div>
        <div className="footer-section-columns">
          <span>Términos y Condiciones</span>
          <span>Política de privacidad</span>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Footer;