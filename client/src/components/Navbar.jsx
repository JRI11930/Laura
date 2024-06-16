import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Home as HomeIcon, School as SchoolIcon, AutoStories as AutoStoriesIcon, CommentRounded as CommentRoundedIcon, Login as LoginIcon, PersonAdd as PersonAddIcon } from '@mui/icons-material';
import { Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Box, Divider } from '@mui/material';
import { HiOutlineBars3 } from "react-icons/hi2";
import Logo from '../assets/Logo.svg'; // Asegúrate de ajustar la ruta del logo

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    { text: "Inicio", icon: <HomeIcon />, link: "/" },
    { text: "Conócenos", icon: <SchoolIcon />, link: "/conocenos" },
    { text: "Testimonios", icon: <AutoStoriesIcon />, link: "/testimonios" },
    { text: "Contacto", icon: <CommentRoundedIcon />, link: "/contacto" },
    { text: "Inicia Sesión", icon: <LoginIcon />, link: "/login" },
    { text: "Únete", icon: <PersonAddIcon />, link: "/unete" },
  ];
  
  return (
    <nav>
      <div className="nav-logo-container">
      <Link to="/">
          <img src={Logo} alt="Logo" width="120" />
        </Link>
      </div>
      <div className="navbar-links-container">
        <Link to="/conocenos">Conócenos</Link>
        <Link to="/testimonios">Testimonios</Link>
        <Link to="/contacto">Contacto</Link>
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
                <ListItemButton component={Link} to={item.link}>
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
