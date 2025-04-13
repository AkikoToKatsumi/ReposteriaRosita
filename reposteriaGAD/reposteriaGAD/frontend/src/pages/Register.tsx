import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios'; // 🔥 Importamos Axios para hacer la solicitud HTTP

// 🔷 Estilos usando styled-components
const RegisterContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-image: url('https://cdn.euroinnova.edu.es/img/subidasEditor/euroinnova%20(5)%20(1)-1654699692.webp');
    background-size: cover;
    background-position: center;
    text-align: center;
`;

const RegisterTitle = styled.h2`
    font-size: 2rem;
    color: #333;
    margin-bottom: 20px;
    background-color: rgba(255, 255, 255, 0.8);
    padding: 10px;
    border-radius: 5px;
`;

const RegisterForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 300px;
    padding: 20px;
    background: white;
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
`;

const Button = styled.button`
    background: rgb(96, 119, 247);
    color: white;
    padding: 10px;
    font-size: 1.2rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        background: hsl(293, 82.40%, 51.00%);
    }
`;

const RegisterFooter = styled.p`
    margin-top: 15px;
    font-size: 0.9rem;
    background-color: rgba(255, 255, 255, 0.8);

    a {
        color: rgb(96, 119, 247);
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
    }
`;

const Register = () => {
    const [formData, setFormData] = useState({ name: '', email: '', password: '' }); // Ensure fields are empty initially

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5005/api/auth/register', formData, {
                headers: { "Content-Type": "application/json" }
            });

            console.log('✅ Usuario registrado:', response.data);
            alert('Registro exitoso');
            setFormData({ name: '', email: '', password: '' }); // Clear form fields after submission
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.error('❌ Error en el registro:', error.response?.data || error.message);
            } else {
                console.error('❌ Error desconocido:', error);
            }
            alert('Error en el registro');
        }
    };

    return (
        <RegisterContainer>
            <RegisterTitle>Crea tu cuenta</RegisterTitle>
            <RegisterForm onSubmit={handleSubmit}>
                <Input type="text" name="name" placeholder="Nombre de usuario" value={formData.name} onChange={handleChange} required />
                <Input type="email" name="email" placeholder="Correo electrónico" value={formData.email} onChange={handleChange} required />
                <Input type="password" name="password" placeholder="Contraseña" value={formData.password} onChange={handleChange} required />
                <Button type="submit">Registrarse</Button>
            </RegisterForm>
            <RegisterFooter>
                ¿Ya tienes una cuenta? <Link to="/login">Inicia sesión aquí</Link>
            </RegisterFooter>
        </RegisterContainer>
    );
};

export default Register;
