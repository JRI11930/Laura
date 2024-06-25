import React from 'react';
import { Route, Routes } from 'react-router-dom'; 
import './styles/App.css';
import Navbar from './components/Navbar'; 
import Home from './components/Home';
import About from './components/About';
import Testimonial from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Login from './components/Login'; 
import Dashboard from './pages/Dashboard.jsx';
import CourseList from './components/CourseList.jsx';
import MyCourseList from './components/MyCourseList.jsx';
import Profile from './components/Profile.jsx';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route 
          path="/" 
          element={
            <>
              <Navbar />
              <Home />
              <About />
              <Testimonial />
              <Contact />
              <Footer />
            </>
          } 
        />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/perfil" element={<Profile/>}/>
        <Route path="/miscursos" element={<MyCourseList/>}/>
        <Route path="/cursos" element={<CourseList/>}/>
        <Route path="/login" element={<Login />} />
      </Routes>
      
    </div>
  );
}

export default App;






