import { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText, Box, ListItemButton, Menu, MenuItem, Avatar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import React from 'react';
import { useAuth } from '../context/AuthContext'; // importar

//  Estilos personalizados con MUI Styled Components
const StyledAppBar = styled(AppBar)({
    backgroundColor: '#E389C8', // Azul suave
    boxShadow: 'none', // Sin sombra
    borderBottom: '2px solid rgba(255, 255, 255, 0.2)', // Línea sutil abajo
    position: 'fixed', // Fijar la barra en la parte superior
    top: 0,
    width: '100%',
    zIndex: 1100, // Asegura que esté por encima de otros elementos
});

const StyledButton = styled(Button)<{ component?: React.ElementType }>({
    fontSize: '1rem',
    fontWeight: 'bold',
    color: '#fff',
    marginLeft: '15px',
    textTransform: 'none', // Evita mayúsculas forzadas
    '&:hover': {
        backgroundColor: 'rgba(54, 49, 49, 0.2)',
        borderRadius: '5px'
    }
});

const NavBar = () => {
    const { user, logout } = useAuth(); //  Usamos el contexto
    const [open, setOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null); // Estado para el menú desplegable
    const navigate = useNavigate();

    const handleLogout = () => {
        logout(); //  Usa logout del contexto
        navigate('/');
    };

    const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <StyledAppBar position="static">
                <Toolbar>
                    <IconButton edge="start" color="inherit" sx={{ display: { xs: 'block', sm: 'none' } }} onClick={() => setOpen(true)}>
                        <MenuIcon />
                    </IconButton>
                    <IconButton edge="start" color="inherit" component={Link} to="/" sx={{ flexGrow: 0 }}>
                        <img src="./rositalg.png" alt="Repostería Rosita" style={{ height: '70px', width: '70px', marginRight: '3px' }} />
                    </IconButton>
                    <Typography variant="h6" sx={{ flexGrow: 1, color: '#fff', fontWeight: 'bold' }}>
                        Repostería Rosita
                    </Typography>

                    {/*  En pantallas grandes */}
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        {/* Solo muestra enlaces si NO ha iniciado sesión */}
                        {!user && (
                            <>
                                <StyledButton component={Link} {...{ to: "/login" }}>Iniciar Sesión</StyledButton>
                                <StyledButton component={Link} {...{ to: "/register" }}>Registrarse</StyledButton>
                            </>
                        )}

                        {/* Muestra enlaces comunes a todos */}
                        <StyledButton component={Link} {...{ to: "/about" }}>Sobre Nosotros</StyledButton>
                        <StyledButton component={Link} {...{ to: "/contactos" }}>Contactos</StyledButton>

                        {/* Si está autenticado, muestra el icono de usuario */}
                        {user && (
                            <>
                                <StyledButton component={Link} {...{ to: "/faq" }}>
                                    Preguntas Frecuentes
                                </StyledButton>
                                <IconButton onClick={handleMenuOpen} sx={{ color: '#6664DE' }}>
                                    <Avatar
                                        sx={{
                                            bgcolor: user.name ? '#6664DE' : '#FF5722', // azul si hay nombre, naranja si no
                                            color: '#fff', // Texto blanco
                                        }}
                                    >
                                        {user.name ? user.name[0].toUpperCase() : '?'}
                                    </Avatar>
                                </IconButton>
                                <Menu
                                    anchorEl={anchorEl}
                                    open={Boolean(anchorEl)}
                                    onClose={handleMenuClose}
                                >
                                    <MenuItem disabled>{user.name || 'Usuario Desconocido'}</MenuItem> {/* Fallback to 'Usuario Desconocido' */}
                                    <MenuItem disabled>{user.email || 'Correo no disponible'}</MenuItem> {/* Fallback to 'Correo no disponible' */}
                                    <MenuItem
                                        onClick={() => { handleLogout(); handleMenuClose(); }}
                                        sx={{
                                            color: '#000',
                                            '&:hover': {
                                                backgroundColor: '#ff4d4d', // Red background on hover
                                                color: '#fff', // White text on hover
                                            },
                                        }}
                                    >
                                        Cerrar Sesión
                                    </MenuItem>
                                </Menu>
                            </>
                        )}
                    </Box>
                </Toolbar>
            </StyledAppBar>

            {/*  Menú móvil */}
            <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
                <List sx={{ width: 250 }}>
                    {/* Si NO hay sesión, muestra Login y Registro */}
                    {!user && (
                        <>
                            <ListItem component={Link} to="/login" onClick={() => setOpen(false)}>
                                <ListItemText primary="Iniciar Sesión" />
                            </ListItem>
                            <ListItem component={Link} to="/register" onClick={() => setOpen(false)}>
                                <ListItemText primary="Registrarse" />
                            </ListItem>
                        </>
                    )}

                    {/* Enlaces comunes */}
                    <ListItem component={Link} to="/" onClick={() => setOpen(false)}>
                        <ListItemText primary="Inicio" />
                    </ListItem>
                    <ListItem component={Link} to="/about" onClick={() => setOpen(false)}>
                        <ListItemText primary="Sobre Nosotros" />
                    </ListItem>
                    <ListItem component={Link} to="/contactos" onClick={() => setOpen(false)}>
                        <ListItemText primary="Contactos" />
                    </ListItem>

                    {/* Solo si está logueado */}
                    {user && (
                        <>
                            <ListItem component={Link} to="/faq" onClick={() => setOpen(false)}>
                                <ListItemText primary="Preguntas Frecuentes" />
                            </ListItem>
                            <ListItemButton onClick={() => { handleLogout(); setOpen(false); }} sx={{ backgroundColor: '#ff4d4d', '&:hover': { backgroundColor: '#e60000' } }}>
                                <ListItemText primary="Cerrar Sesión" sx={{ color: '#fff' }} />
                            </ListItemButton>
                        </>
                    )}
                </List>
            </Drawer>
        </>
    );
};

export default NavBar;
