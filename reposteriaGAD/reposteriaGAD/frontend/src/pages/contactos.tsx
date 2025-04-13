import React from 'react';
import styled from 'styled-components';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

// 🔷 Estilos usando styled-components
const ContactContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    height: 100vh;
    background-color: #f9f9f9;
`;

const ContactTitle = styled.h1`
    font-size: 2.5rem;
    color: #333;
    margin-bottom: 20px;
`;

const ContactDescription = styled.p`
    font-size: 1.2rem;
    color: #555;
    margin-bottom: 30px;
    text-align: center;
    max-width: 600px;
`;

const ContactForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 400px;
    background: #fff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
    width: 95%;
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1rem;

    &:focus {
        border-color: #007bff;
        outline: none;
        box-shadow: 0 0 4px rgba(0, 123, 255, 0.25);
    }
`;

const Textarea = styled.textarea`
    width: 95%;
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1rem;
    resize: none;

    &:focus {
        border-color: #007bff;
        outline: none;
        box-shadow: 0 0 4px rgba(0, 123, 255, 0.25);
    }
`;

const Button = styled.button`
    background: #007bff;
    color: white;
    padding: 10px;
    font-size: 1.2rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background: #0056b3;
    }
`;

const WhatsAppLink = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    color: #25D366;
    font-size: 1.2rem;
    text-decoration: none;

    &:hover {
        color: #128C7E;
    }

    svg {
        margin-right: 8px;
    }
`;

const Contact: React.FC = () => {
    return (
        <ContactContainer>
            <ContactTitle>Contacto</ContactTitle>
            <ContactDescription>
                Si tienes alguna pregunta, no dudes en escribirnos.
            </ContactDescription>
            <ContactForm>
                <Input type="text" placeholder="Nombre" />
                <Input type="email" placeholder="Correo electrónico" />
                <Textarea placeholder="Escribe tu mensaje aquí" rows={5}></Textarea>
                <Button type="submit">Enviar</Button>
            </ContactForm>
            <WhatsAppLink href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon />
                Contáctanos por WhatsApp
            </WhatsAppLink>
        </ContactContainer>
    );
};

export default Contact;
