import React, { useEffect, useState } from 'react';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Testimonial from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}


export default App;
/*const [backendData, setBackendData] = useState({}) // Inicializa el estado con un objeto vacío

 useEffect(() => {
    fetch('/landingpage').then(
      response => response.json()
    ).then(
      data => {
      setBackendData(data)
    }
  )
}, )

 <p>El mensaje de la ruta es: <strong>{backendData.messages}</strong></p>

 */




