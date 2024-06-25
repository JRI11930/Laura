import React from "react";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container" id="home">
      <div className="home-banner-container">
        <div className="home-text-section">
          <h1 className="primary-heading-home">
           Sumérgete en la tecnología como nunca antes
          </h1>
          <p className="primary-text-home">
            Fácil, divertido y a tu ritmo...
          </p>
          <button className="secondary-button">
            Nuestra oferta <FiArrowRight />{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;