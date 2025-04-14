import React from 'react';
import styled from 'styled-components';

// Fondo aplicado a toda la página
const GlobalBackground = styled.div`
    width: 100%;
    min-height: 100vh;
    background: url('/imagenes/aboutfondo.jpg') no-repeat center center/cover;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
`;

// Contenedor principal con diseño minimalista
const AboutContainer = styled.div`
    max-width: 800px;
    padding: 40px;
    background: rgba(255, 255, 255, 0.85); // Fondo blanco con transparencia
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    text-align: center;
`;

// Estilo del título
const Title = styled.h1`
    font-size: 2.5rem;
    color: #6C7AE0;
    margin-bottom: 20px;
`;

// Estilo del párrafo de descripción
const AboutText = styled.p`
    font-size: 1.2rem;
    color: #555;
    line-height: 1.6;
`;

const About: React.FC = () => {
    return (
        <GlobalBackground>
            <AboutContainer>
                <Title>Sobre Nosotros</Title>
                <AboutText>
                    Repostería Rosita nació en 1998 como un pequeño negocio familiar, donde cada receta está hecha con amor y dedicación.
                    Nos especializamos en postres artesanales, desde tartas y cheesecakes hasta croissants recién horneados.  
                    Nuestra misión es endulzar cada momento especial con productos de calidad, preparados con ingredientes frescos y naturales.  
                    ¡Gracias por ser parte de nuestra historia!
                </AboutText>
            </AboutContainer>
        </GlobalBackground>
    );
};

export default About;
