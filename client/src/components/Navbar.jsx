import React, { useState, useEffect } from 'react';
import { Link, useLocation  } from 'react-router-dom';
import { Home as HomeIcon, School as SchoolIcon, AutoStories as AutoStoriesIcon, CommentRounded as CommentRoundedIcon, Login as LoginIcon, PersonAdd as PersonAddIcon } from '@mui/icons-material';
import { Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Box, Divider } from '@mui/material';
import { HiOutlineBars3 } from "react-icons/hi2";
import Logo from '../assets/Logo.png'; // Asegúrate de ajustar la ruta del logo

const Navbar = () => {
  // Función para manejar el desplazamiento hacia arriba
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const location = useLocation();
   // Efecto para manejar el desplazamiento suave desde otras páginas
   useEffect(() => {
    if (location.state?.scrollTo) {
      const id = location.state.scrollTo;
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  // Efecto para manejar el desplazamiento suave dentro de la misma página
  useEffect(() => {
    const handleSmoothScroll = (e) => {
      e.preventDefault();
      const targetId = e.target.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    };

    const smoothScrollAnchors = document.querySelectorAll('a[href^="#"]');
    smoothScrollAnchors.forEach(anchor => {
      anchor.addEventListener('click', handleSmoothScroll);
    });

    // Limpieza del evento
    return () => {
      smoothScrollAnchors.forEach(anchor => {
        anchor.removeEventListener('click', handleSmoothScroll);
      });
    };
  }, []);

  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    { text: "Inicio", icon: <HomeIcon />, link: "/" },
    { text: "Conócenos", icon: <SchoolIcon />, link: "/", scrollTo: 'about' },
    { text: "Testimonios", icon: <AutoStoriesIcon />, link: "/", scrollTo: 'testimonials' },
    { text: "Contacto", icon: <CommentRoundedIcon />, link: "/", scrollTo: 'contact' },
    { text: "Inicia Sesión", icon: <LoginIcon />, link: "/login" },
    { text: "Únete", icon: <PersonAddIcon />, link: "/login" },
  ];
  
  return (
    <nav>
      <div className="nav-logo-container">
      <button onClick={scrollToTop} className="scrollToTopBtn">↑</button>
      <Link to="/">
          <img src={Logo} alt="Logo" width="200" />
        </Link>
      </div>
      <div className="navbar-links-container">
        <Link to="/" state={{ scrollTo: 'about' }}>Conócenos</Link>
        <Link to="/" state={{ scrollTo: 'testimonials' }}>Testimonios</Link>
        <Link to="/" state={{ scrollTo: 'contact' }}>Contacto</Link>
        <Link to="/login">Inicia Sesión</Link>
        <button className="primary-button"><Link to="/login" style={{ color: 'inherit', textDecoration: 'none' }}>Únete</Link></button>
      </div>
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton component={Link} to={item.link} state={{ scrollTo: item.scrollTo }}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </nav>
  );
};

export default Navbar;
