import React from "react";
import AboutBackground from "../assets/about-background.png";
import AboutBackgroundImage from "../assets/full-stack.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section-container" id="about">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt=""  />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">Conócenos</p>
        <h1 className="primary-heading-about">
          Laura impulsa tu aprendizaje
        </h1>
        <p className="primary-text-about">
          Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
          elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
        </p>
        <p className="primary-text">
          Non tincidunt magna non et elit. 
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Conoce más...</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Mira el video
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;