import React from 'react';
import Grid from '@mui/material/Grid';
import { Card, CardMedia, CardContent, Typography, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

const productos = [
    { nombre: 'Tarta de Fresas', imagen: '/imagenes/tarta-fresa.png' },
    { nombre: 'Cheesecake', imagen: '/imagenes/cheesecake.jpg' },
    { nombre: 'Croissants', imagen: '/imagenes/croissants.jpg' },
    { nombre: 'Brownie', imagen: '/imagenes/Brownie.jpg' },
    { nombre: 'Muffin de Arándanos', imagen: '/imagenes/Muffin de Arándanos.jpg' },
    { nombre: 'Galletas de Chocolate', imagen: '/imagenes/Galletas de chocolate.webp' },
    { nombre: 'Tarta de Manzana', imagen: '/imagenes/tarta de manzana.jpg' },
    { nombre: 'Macarons', imagen: '/imagenes/Macarrons.jpg' },
    { nombre: 'Pastel de Zanahoria', imagen: '/imagenes/paste de zanahorias.jpg' },
    { nombre: 'Tarta de Limón', imagen: '/imagenes/Tarta de limon.jpg' },
    { nombre: 'Eclairs', imagen: '/imagenes/Eclairs.jpg' },
    { nombre: 'Donuts Glaseados', imagen: '/imagenes/Donuts Glaseados.jpg' },
    { nombre: 'Tarta de Chocolate', imagen: '/imagenes/Tarta de Chocolate.jpg' },
    { nombre: 'Pan de Plátano', imagen: '/imagenes/Pan de Plátano.jpg' },
    { nombre: 'Tarta Red Velvet', imagen: '/imagenes/Tarta Red Velvet.jpg' },
    { nombre: 'Churros', imagen: '/imagenes/Churros.jpg' },
    { nombre: 'Tarta de Queso con Frutas', imagen: '/imagenes/Tarta de Queso con Frutas.avif' },
    { nombre: 'Bizcocho Marmolado', imagen: '/imagenes/Bizcocho Marmolado.jpg' },
    { nombre: 'Tarta de Café', imagen: '/imagenes/tarta de Cafe.jpg' },
    { nombre: 'Cupcakes', imagen: '/imagenes/Cupcakes.jpg' }
];

const StyledCard = styled(Card)`
  transition: transform 0.3s ease-in-out;
  
  background-color: rgba(250, 214, 248, 0.8); /* Fondo blanco con transparencia */
  border-radius: 1px; /* Bordes redondeados */
  shadow: 0 6px 10px rgba(0, 0, 0, 0.1); /* Sombra sutil */
  padding-top: 70px; /* Espacio superior para el contenido */
  
  &:hover {
    transform: scale(1.30); /* Aumenta toda la tarjeta */
  }
`;

const StyledCardMedia = styled(CardMedia)`
  height: 300px;  
  width: 300px;  
  object-fit: cover;  
  padding-top: 70px;
`;

// Removed StyledGridContainer as it is unused
const Menu = () => {
    const handleDownloadPDF = () => {
        const link = document.createElement('a');
        link.href = process.env.PUBLIC_URL + '/Menu.pdf'; // Correctly reference the PDF in the public folder
        link.download = 'Menu.pdf';
        link.click();
    };

    return (
        <div style={{ marginTop: '100px' }}> {/* Add margin to avoid overlap with Navbar */}
            <div style={{ textAlign: 'center', margin: '20px 0' }}> {/* Center the button */}
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleDownloadPDF}
                    style={{ marginBottom: '20px' }} // Add spacing below the button
                >
                    Descargar Menú en PDF
                </Button>
            </div>
            <Grid container spacing={3} style={{ padding: '20px', justifyContent: 'center' }} component="div">
                {productos.map((producto, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index} {...(true as any)} component="div">
                        <StyledCard>
                            <StyledCardMedia image={producto.imagen} title={producto.nombre} />
                            <CardContent>
                                <Typography variant="h6" align="center">{producto.nombre}</Typography>
                            </CardContent>
                        </StyledCard>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default Menu;

