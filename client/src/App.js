import React from 'react';
import { Route, Routes } from 'react-router-dom'; 
import './App.css';
import Navbar from './components/Navbar'; 
import Home from './components/Home';
import About from './components/About';
import Testimonial from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Login from './components/Login'; 
import Panel from './components/Panel';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route 
          path="/" 
          element={
            <>
              <Home />
              <About />
              <Testimonial />
              <Contact />
            </>
          } 
        />
        <Route path="/conocenos" element={<About />} />
        <Route path="/panel" element={<Panel />} />
        <Route path="/testimonios" element={<Testimonial />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/unete" element={<div>Únete Page</div>} /> {}
      </Routes>
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




