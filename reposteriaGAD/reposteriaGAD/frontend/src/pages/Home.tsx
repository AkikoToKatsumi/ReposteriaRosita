import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

// Contenedor principal con fondo degradado y centrado de contenido
const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background-image: url('/imagenes/homefondo.jpg'); 
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover; // Cambiado a cover para que se expanda sin perder mucha calidad
    background-position: center;
    text-align: center;
    padding-top: 70px; // Ajusta según la altura de tu navbar
`;
// Definición de animación para desplazar imágenes en un bucle continuo
const scroll = keyframes`
    from { transform: translateX(0); }
    to { transform: translateX(-50%); }
`;

// Contenedor para envolver las imágenes en movimiento
const ImageContainer = styled.div`
    width: 100%;
    overflow: hidden;
    position: relative;
    margin-top: 20px;
`;

// Contenedor que agrupa las imágenes y aplica la animación
const ImageTrack = styled.div`
    display: flex;
    gap: 20px;
    animation: ${scroll} 30s linear infinite;
    white-space: nowrap;

    // Duplicar las imágenes para crear un efecto de bucle continuo
    & > * {
        flex-shrink: 0;
    }
    &::after {
        content: '';
        display: flex;
        gap: 20px;
        width: auto;
        background: inherit;
    }
`;

// Estilos para las imágenes en movimiento
const MovingImage = styled.img`
    width: 300px;
    height: 350px;
    border-radius: 10px;
    object-fit: cover;
    transition: transform 0.2s ease, box-shadow 0.3s ease;
    &:hover {
        transform: scale(1.1);
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
    }
`;

// Estilos para el título principal
const Title = styled.h1`
color:rgb(221, 19, 160);
    font-family: 'Pacifico', cursive; 
    font-weight: bold;
    font-size: 3rem;
    text-shadow: 2px 2px 4px rgba(221, 200, 216, 0.5);
`;

// Contenedor de los botones de navegación
const ButtonContainer = styled.div`

    margin-top: 20px;
    display: flex;
    gap: 20px;
`;

// Estilos para los botones de navegación
const Button = styled(Link)`
    color:rgb(248, 0, 0);
    font-size: 1.5rem;
    font-family: 'Pacifico', cursive; // Una fuente más acorde con una repostería
    text-decoration: none;
    &:hover {
        text-decoration: underline;
    }
`;

// Footer estilizado
const Footer = styled.footer`
    background: rgb(52, 54, 52);
    color: white;
    text-align: center;
    padding: 20px;
    width: 100%;
    position: flexible;
    bottom: 0;
`;

// Contenedor para la sección de ubicación
const LocationContainer = styled.div`
    margin-top: 30px;
    text-align: center;
    color: rgb(221, 19, 160);
    font-family: 'Pacifico', cursive;   
    font-weight: bold;
`;

const MapFrame = styled.iframe`
    width: 100vw; /* Ocupa todo el ancho visible de la ventana */
    height: 400px;
    display: block;
    margin: 20px auto;
    border: none;
    border-radius: 0; /* Si quieres que se expanda sin esquinas */
    box-shadow: none; /* Opcional: quita sombra si quieres un estilo plano */

    @media (max-width: 768px) {
        height: 300px;
    }

    @media (max-width: 480px) {
        height: 250px;
    }
`;


// Componente funcional Home
const Home = () => {
    return (
        <>
            <HomeContainer>
                <Title>Bienvenidos a Repostería Rosita</Title>
                <ButtonContainer>
                    <Button to="/Menu">Nuestro Menú</Button>
                </ButtonContainer>

                {/* Contenedor de imágenes en movimiento */}
                <ImageContainer>
                    <ImageTrack>
                        <MovingImage src="https://www.levapan.com/wp-content/uploads/2024/04/10_productos_pasteleria.jpeg" alt="Pastelería" />
                        <MovingImage src="/imagenes/image.png" alt="Productos" />
                        <MovingImage src="/imagenes/ceac-27-03-2019-reposteria.jpg.webp" alt="Repostería" />
                        <MovingImage src="/imagenes/tarta-fresa.png" alt="Tarta de Fresas" />
                        <MovingImage src="/imagenes/cheesecake.jpg" alt="Cheesecake" />
                        <MovingImage src="/imagenes/croissants.jpg" alt="Croissants" />
                        <MovingImage src="/imagenes/Brownie.jpg" alt="Brownie" />
                        <MovingImage src="/imagenes/Muffin de Arándanos.jpg" alt="Muffin de Arándanos" />
                        <MovingImage src="/imagenes/Galletas de chocolate.webp" alt="Galletas de Chocolate" />
                        <MovingImage src="/imagenes/tarta de manzana.jpg" alt="Tarta de Manzana" />
                        <MovingImage src="/imagenes/Macarrons.jpg" alt="Macarons" />
                        <MovingImage src="/imagenes/paste de zanahorias.jpg" alt="Pastel de Zanahoria" />
                        <MovingImage src="/imagenes/Tarta de limon.jpg" alt="Tarta de Limón" />
                        <MovingImage src="/imagenes/Eclairs.jpg" alt="Eclairs" />
                        <MovingImage src="/imagenes/Donuts Glaseados.jpg" alt="Donuts Glaseados" />
                        <MovingImage src="/imagenes/Tarta de Chocolate.jpg" alt="Tarta de Chocolate" />
                        <MovingImage src="/imagenes/Pan de Plátano.jpg" alt="Pan de Plátano" />
                        <MovingImage src="/imagenes/Tarta Red Velvet.jpg" alt="Tarta Red Velvet" />
                        <MovingImage src="/imagenes/Churros.jpg" alt="Churros" />
                        <MovingImage src="/imagenes/Tarta de Queso con Frutas.avif" alt="Tarta de Queso con Frutas" />
                        <MovingImage src="/imagenes/Bizcocho Marmolado.jpg" alt="Bizcocho Marmolado" />
                        <MovingImage src="/imagenes/tarta de Cafe.jpg" alt="Tarta de Café" />
                        <MovingImage src="/imagenes/Cupcakes.jpg" alt="Cupcakes" />
                    </ImageTrack>
                </ImageContainer>

                {/* Nueva sección de ubicación */}
                <LocationContainer>
                    <Title>Nuestra Ubicación</Title>
                    <p>Visítanos en nuestra tienda física:</p>
                    <MapFrame 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.370123456789!2d-69.93121123456789!3d18.486123456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8eaf89abcdef1234%3A0x123456789abcdef!2sRepostería%20Rosita!5e0!3m2!1ses!2s!4v1699999999999!5m2!1ses!2s" 
                        allowFullScreen 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                    ></MapFrame>
                </LocationContainer>
            </HomeContainer>

            {/* Footer con enlaces a redes sociales */}
            <Footer>
                <p>&copy; {new Date().getFullYear()} Repostería Rosita - Todos los derechos reservados.
                    
                </p>
               
                <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginTop: '2px'}}><h5>by. Gabriela Garcia--- Dauris Santana---Axel Paulino</h5></div>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginTop: '2px'}}><h5>Programacion lll</h5></div>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginTop: '5px' }}>
                    
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <img src="/imagenes/instagram.ico" alt="Instagram" style={{ width: '30px', height: '30px' }} />
                    </a>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <img src="/imagenes/facebook.ico" alt="Facebook" style={{ width: '30px', height: '30px' }} />
                    </a>
                </div>
            </Footer>
        </>
    );
};

export default Home;
