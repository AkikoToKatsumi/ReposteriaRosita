import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import { Card, CardMedia, CardContent, Typography, Button, Box, IconButton, Badge, Drawer, List, ListItem, ListItemText, Snackbar, Alert } from '@mui/material';
import { styled } from '@mui/material/styles';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DeleteIcon from '@mui/icons-material/Delete';
import { useAuth } from '../context/AuthContext'; // Importar el contexto de autenticación


const productos = [
    { nombre: 'Tarta de Fresas', imagen: '/imagenes/tarta-fresa.png', precio: 1500},
    { nombre: 'Cheesecake', imagen: '/imagenes/cheesecake.jpg', precio: 200 },
    { nombre: 'Croissants', imagen: '/imagenes/croissants.jpg', precio:30 },
    { nombre: 'Brownie', imagen: '/imagenes/Brownie.jpg', precio: 50 },
    { nombre: 'Muffin de Arándanos', imagen: '/imagenes/Muffin de Arándanos.jpg', precio: 75 },
    { nombre: 'Galletas de Chocolate', imagen: '/imagenes/Galletas de chocolate.webp', precio: 15},
    { nombre: 'Tarta de Manzana', imagen: '/imagenes/tarta de manzana.jpg', precio: 300 },
    { nombre: 'Macarons', imagen: '/imagenes/Macarrons.jpg', precio:40 },
    { nombre: 'Pastel de Zanahoria', imagen: '/imagenes/paste de zanahorias.jpg', precio: 300 },
    { nombre: 'Tarta de Limón', imagen: '/imagenes/Tarta de limon.jpg', precio: 700 },
    { nombre: 'Eclairs', imagen: '/imagenes/Eclairs.jpg', precio: 50 },
    { nombre: 'Donuts Glaseados', imagen: '/imagenes/Donuts Glaseados.jpg', precio: 25 },
    { nombre: 'Tarta de Chocolate', imagen: '/imagenes/Tarta de Chocolate.jpg', precio: 200 },
    { nombre: 'Pan de Plátano', imagen: '/imagenes/Pan de Plátano.jpg', precio: 100 },
    { nombre: 'Tarta Red Velvet', imagen: '/imagenes/Tarta Red Velvet.jpg', precio: 300 },
    { nombre: 'Churros', imagen: '/imagenes/Churros.jpg', precio:15 },
    { nombre: 'Tarta de Queso con Frutas', imagen: '/imagenes/Tarta de Queso con Frutas.avif', precio: 300 },
    { nombre: 'Bizcocho Marmolado', imagen: '/imagenes/Bizcocho Marmolado.jpg', precio:200 },
    { nombre: 'Tarta de Café', imagen: '/imagenes/tarta de Cafe.jpg', precio: 60 },
    { nombre: 'Cupcakes', imagen: '/imagenes/Cupcakes.jpg', precio: 50 }
];
const StyledCard = styled(Card)`
  transition: transform 0.3s ease-in-out;
  background-color: rgba(250, 214, 248, 0.8);
  border-radius: 1px;
  shadow: 0 6px 10px rgba(0, 0, 0, 0.1);
  padding-top: 70px;
  &:hover {
    transform: scale(1.30);
  }
`;

const StyledCardMedia = styled(CardMedia)`
  height: 300px;
  width: 300px;
  object-fit: cover;
  padding-top: 70px;
`;

const Menu = () => {
    const { isAuthenticated } = useAuth(); // Obtener el estado de autenticación
    const [carrito, setCarrito] = useState<{ nombre: string; precio: number; cantidad: number }[]>([]);
    const [isCarritoOpen, setIsCarritoOpen] = useState(false);
    const [mensajeExito, setMensajeExito] = useState(false); // Estado para mostrar el mensaje de éxito

    const agregarAlCarrito = (producto: { nombre: string; precio: number }) => {
        if (!isAuthenticated) {
            alert('Debes iniciar sesión para agregar productos al carrito.');
            return;
        }

        setCarrito((prevCarrito) => {
            const productoExistente = prevCarrito.find((item) => item.nombre === producto.nombre);
            if (productoExistente) {
                return prevCarrito.map((item) =>
                    item.nombre === producto.nombre
                        ? { ...item, cantidad: item.cantidad + 1 }
                        : item
                );
            }
            return [...prevCarrito, { ...producto, cantidad: 1 }];
        });
    };

    const eliminarDelCarrito = (nombre: string) => {
        setCarrito((prevCarrito) => prevCarrito.filter((item) => item.nombre !== nombre));
    };

    const generarFacturaYEnviarWhatsApp = () => {
        if (carrito.length === 0) {
            alert('El carrito está vacío.');
            return;
        }

        const total = carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0);
        const mensaje = encodeURIComponent(
            `Hola, me gustaría realizar un pedido:\n\n${carrito
                .map((item) => `- ${item.nombre} x${item.cantidad} ($${item.precio * item.cantidad})`)
                .join('\n')}\n\nTotal: $${total}`
        );

        const numeroWhatsApp = '18293369235'; // Este es el número al cual se enviará el mensaje
        window.open(`https://wa.me/${numeroWhatsApp}?text=${mensaje}`, '_blank');

        // Mostrar mensaje de éxito y limpiar el carrito
        setMensajeExito(true);
        setCarrito([]);
        setIsCarritoOpen(false);
    };

    return (
        <div style={{ marginTop: '100px' }}>
            {/* Ícono del carrito */}
            {isAuthenticated && (
            <Box display="flex" justifyContent="flex-end" padding="10px">
                <IconButton color="primary" onClick={() => setIsCarritoOpen(true)} style={{ transform: 'scale(1.5)' }}>
                <Badge badgeContent={carrito.reduce((acc, item) => acc + item.cantidad, 0)} color="secondary">
                    <ShoppingCartIcon />
                </Badge>
                </IconButton>
            </Box>
            )}

            {/* Carrito (Drawer) */}
            <Drawer anchor="right" open={isCarritoOpen} onClose={() => setIsCarritoOpen(false)}>
            <Box width="300px" padding="20px">
                <Typography variant="h6" gutterBottom>
                Carrito de Compras
                </Typography>
                <List>
                {carrito.map((item, index) => (
                    <ListItem key={index} divider>
                    <ListItemText
                        primary={`${item.nombre} x${item.cantidad}`}
                        secondary={`$${item.precio * item.cantidad}`}
                    />
                    <IconButton onClick={() => eliminarDelCarrito(item.nombre)}>
                        <DeleteIcon color="error" />
                    </IconButton>
                    </ListItem>
                ))}
                </List>
                {carrito.length > 0 && (
                <Box textAlign="center" marginTop="20px">
                    <Button
                    variant="contained"
                    color="primary"
                    onClick={generarFacturaYEnviarWhatsApp}
                    >
                    Pagar y Enviar Pedido
                    </Button>
                </Box>
                )}
                {carrito.length === 0 && (
                <Typography variant="body1" color="textSecondary" align="center">
                    El carrito está vacío.
                </Typography>
                )}
            </Box>
            </Drawer>

            {/* Productos */}
            <Grid container spacing={3} style={{ padding: '20px', justifyContent: 'center' }} component="div">
            {productos.map((producto, index) => (
                <Grid item xs={12} sm={6} md={4} key={index} {...(true as any)} component="div">
                <StyledCard>
                    <StyledCardMedia image={producto.imagen} title={producto.nombre} />
                    <CardContent>
                    <Typography variant="h6" align="center">{producto.nombre}</Typography>
                    <Typography variant="body1" align="center">${producto.precio}</Typography>
                    <Box textAlign="center" marginTop={2}>
                        <Button
                        variant="contained"
                        color="secondary"
                        onClick={() => {
                            if (isAuthenticated) {
                            agregarAlCarrito(producto);
                            } else {
                            window.location.href = '/login';
                            }
                        }}
                        >
                        {isAuthenticated ? 'Agregar al Carrito' : 'Inicia sesión para agregar'}
                        </Button>
                    </Box>
                    </CardContent>
                </StyledCard>
                </Grid>
            ))}
            </Grid>

            {/* Mensaje de éxito */}
            <Snackbar
                open={mensajeExito}
                autoHideDuration={3000}
                onClose={() => setMensajeExito(false)}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            >
                <Alert onClose={() => setMensajeExito(false)} severity="success" sx={{ width: '100%' }}>
                    ¡Pedido enviado con éxito!
                </Alert>
            </Snackbar>
        </div>
    );
};

export default Menu;

